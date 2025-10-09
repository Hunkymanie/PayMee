'use client'

import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useUser } from '@/components/providers/UserProvider'
import { generateMockUser, generateUserCards } from '@/data/mock'

interface PaymeeCardProps {
  cardNumber: string
  expiryDate: string
  cardholderName: string
  bank: string
  cardType: 'debit' | 'credit'
  color: string
  isActive: boolean
}

function PaymeeCard({ cardNumber, expiryDate, cardholderName, bank, cardType, color, isActive }: PaymeeCardProps) {
  return (
    <div className={`relative overflow-hidden ${color} rounded-xl p-4 sm:p-6 text-white shadow-xl ${!isActive ? 'opacity-60' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full translate-y-8 -translate-x-8 sm:translate-y-12 sm:-translate-x-12"></div>
      </div>
      
      {/* Card Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-4 sm:mb-6 lg:mb-8">
          <div>
            <div className="text-white/80 text-xs font-medium tracking-wider uppercase mb-1">{bank}</div>
            <div className="text-white/60 text-xs capitalize">{cardType} Card</div>
          </div>
          <div className="w-6 h-6 sm:w-8 sm:h-8">
            {isActive ? (
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <rect width="32" height="32" rx="6" fill="white" fillOpacity="0.2"/>
                <path d="M8 12h16v8H8z" fill="white" fillOpacity="0.3"/>
                <circle cx="12" cy="16" r="6" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.6"/>
                <circle cx="20" cy="16" r="6" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.6"/>
              </svg>
            ) : (
              <div className="text-white/40 text-xs">INACTIVE</div>
            )}
          </div>
        </div>
        
        {/* Card Number */}
        <div className="mb-3 sm:mb-4">
          <div className="text-white font-mono text-base sm:text-lg tracking-wider">
            {cardNumber}
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex justify-between items-end">
          <div>
            <div className="text-white/60 text-xs mb-1">Card Holder</div>
            <div className="text-white font-medium text-xs sm:text-sm truncate max-w-[80px] sm:max-w-none">{cardholderName}</div>
          </div>
          <div>
            <div className="text-white/60 text-xs mb-1">Expires</div>
            <div className="text-white font-medium text-xs sm:text-sm">{expiryDate}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MyCardsWidget() {
  const { user } = useUser()
  
  // Generate user data and cards
  const currentUser = generateMockUser(user || undefined)
  const userCards = generateUserCards(currentUser)
  
  // Get the primary card (first one)
  const primaryCard = userCards[0]
  
  // Generate cardholder name from user data
  const getCardholderName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name.toUpperCase()
    }
    if (user?.email) {
      // Extract name from email if full_name not available
      const emailName = user.email.split('@')[0]
      return emailName.replace(/[._]/g, ' ').toUpperCase()
    }
    return `${currentUser.firstName} ${currentUser.lastName}`.toUpperCase()
  }
  
  // Format card number for display (mask middle digits)
  const formatCardNumber = (last4: string) => {
    return `•••• •••• •••• ${last4}`
  }
  
  if (!primaryCard) {
    return (
      <div className="compact-card rounded-xl p-5">
        <div className="text-center py-8">
          <p className="text-slate-500">No cards available</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="compact-card rounded-xl p-4 sm:p-5">
      <div className="mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 flex items-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
          My Cards
        </h3>
        <p className="text-slate-500 text-xs mt-0.5 uppercase tracking-wide">
          {userCards.length} card{userCards.length !== 1 ? 's' : ''} • {userCards.filter(c => c.isActive).length} active
        </p>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        <PaymeeCard
          cardNumber={formatCardNumber(primaryCard.last4)}
          expiryDate={primaryCard.expiryDate}
          cardholderName={getCardholderName()}
          bank={primaryCard.bank}
          cardType={primaryCard.type}
          color={primaryCard.color}
          isActive={primaryCard.isActive}
        />

        {/* Manage Cards Button */}
        <Link href="/cards">
          <button className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-4 sm:px-6 py-3 text-slate-700 hover:text-slate-900 transition-all duration-200 group">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="font-medium text-xs sm:text-sm">View All Cards ({userCards.length})</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}