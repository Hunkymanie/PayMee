'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { useUser } from '@/components/providers/UserProvider'
import { generateMockUser, generateUserCards } from '@/data/mock'
import { formatCurrency } from '@/lib/utils'
import { 
  CreditCardIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowPathIcon,
  PlusIcon,
  WifiIcon,
  LockClosedIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'

export default function CardsPage() {
  const { user } = useUser()
  const currentUser = generateMockUser(user || undefined)
  const userCards = generateUserCards(currentUser)
  const [showCardNumber, setShowCardNumber] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  // Get cardholder name
  const getCardholderName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name.toUpperCase()
    }
    if (user?.email) {
      const emailName = user.email.split('@')[0]
      return emailName.replace(/[._]/g, ' ').toUpperCase()
    }
    return `${currentUser.firstName} ${currentUser.lastName}`.toUpperCase()
  }

  // Generate full card number for display
  const getFullCardNumber = (last4: string) => {
    return `5399 **** **** ${last4}`
  }

  const card = userCards[0] // Single PayMe card

  if (!card) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <div className="text-center py-12">
            <CreditCardIcon className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">No Card Found</h3>
            <p className="text-slate-500">You don&apos;t have any cards yet.</p>
            <button className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <PlusIcon className="h-5 w-5" />
              Request Card
            </button>
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">My PayMee Card</h1>
              <p className="mt-2 text-slate-600">Manage your PayMee debit card</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 sm:px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base">
              <PlusIcon className="h-5 w-5" />
              <span className="sm:inline">Request New Card</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Card Display */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
                  <h2 className="text-lg sm:text-xl font-semibold text-slate-900">PayMee Debit Card</h2>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setShowCardNumber(!showCardNumber)}
                      className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                      title={showCardNumber ? "Hide card number" : "Show card number"}
                    >
                      {showCardNumber ? (
                        <EyeSlashIcon className="h-5 w-5 text-slate-600" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-slate-600" />
                      )}
                    </button>
                    <button
                      onClick={() => setIsFlipped(!isFlipped)}
                      className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                      title="Flip card"
                    >
                      <ArrowPathIcon className="h-5 w-5 text-slate-600" />
                    </button>
                  </div>
                </div>

                {/* Card with Flip Animation */}
                <div className="perspective-1000 mb-6 sm:mb-8">
                  <div 
                    className={`relative w-full h-48 sm:h-56 transition-transform duration-700 ${
                      isFlipped ? 'rotate-y-180' : ''
                    }`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front of Card */}
                    <div 
                      className="absolute inset-0 w-full h-48 sm:h-56 rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-lg bg-blue-600"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      {/* Card Header */}
                      <div className="flex justify-between items-start mb-4 sm:mb-6 lg:mb-8">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold">PayMee</h3>
                          <p className="text-xs opacity-80">DEBIT CARD</p>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <WifiIcon className="h-4 w-4 sm:h-6 sm:w-6 opacity-80" />
                          <div className="w-8 h-4 sm:w-10 sm:h-6 bg-white/20 rounded flex items-center justify-center">
                            <span className="text-xs font-bold">CHIP</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Number */}
                      <div className="mb-4 sm:mb-6">
                        <p className="text-base sm:text-lg lg:text-xl font-mono tracking-wider">
                          {showCardNumber ? getFullCardNumber(card.last4) : `•••• •••• •••• ${card.last4}`}
                        </p>
                      </div>

                      {/* Card Details */}
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-xs opacity-70 mb-1">CARD HOLDER</p>
                          <p className="text-xs sm:text-sm font-medium truncate max-w-[120px] sm:max-w-none">{getCardholderName()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs opacity-70 mb-1">EXPIRES</p>
                          <p className="text-xs sm:text-sm font-mono">{card.expiryDate}</p>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div 
                      className="absolute inset-0 w-full h-48 sm:h-56 rounded-2xl bg-blue-600 shadow-lg"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      {/* Magnetic Stripe */}
                      <div className="w-full h-8 sm:h-12 bg-black mt-4 sm:mt-6"></div>
                      
                      {/* CVV Area */}
                      <div className="p-4 sm:p-6 lg:p-8 pt-3 sm:pt-6">
                        <div className="bg-white rounded p-2 sm:p-4 mb-3 sm:mb-4">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-slate-600">CVV</span>
                            <span className="text-xs sm:text-sm font-mono text-slate-900">
                              {showCardNumber ? '123' : '•••'}
                            </span>
                          </div>
                        </div>
                        
                        {/* Bank Info */}
                        <div className="text-white space-y-1">
                          <p className="text-xs opacity-70">24/7 Customer Service: 1-800-PAYMEE</p>
                          <p className="text-xs opacity-70">www.paymeebank.com</p>
                          <p className="text-xs opacity-70">This card is property of PayMee Bank Nigeria</p>
                        </div>

                        {/* Card Network Logo */}
                        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8">
                          <div className="w-10 h-6 sm:w-12 sm:h-8 bg-white/20 rounded flex items-center justify-center">
                            <span className="text-xs font-bold text-white">VISA</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <button className="bg-white border border-slate-200 rounded-lg p-3 sm:p-4 hover:bg-blue-50 transition-colors group">
                    <div className="text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-200 transition-colors">
                        <CreditCardIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-900">Fund Card</p>
                    </div>
                  </button>
                  <button className="bg-white border border-slate-200 rounded-lg p-3 sm:p-4 hover:bg-blue-50 transition-colors group">
                    <div className="text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-200 transition-colors">
                        <ArrowPathIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-900">Transfer</p>
                    </div>
                  </button>
                  <button className="bg-white border border-slate-200 rounded-lg p-3 sm:p-4 hover:bg-red-50 transition-colors group">
                    <div className="text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-red-200 transition-colors">
                        <LockClosedIcon className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-900">Block Card</p>
                    </div>
                  </button>
                  <button className="bg-white border border-slate-200 rounded-lg p-3 sm:p-4 hover:bg-slate-50 transition-colors group">
                    <div className="text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-slate-200 transition-colors">
                        <Cog6ToothIcon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-900">Settings</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Card Summary */}
              <div className="compact-card rounded-xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">Card Summary</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm sm:text-base text-slate-600">Available Balance</span>
                    <span className="text-sm sm:text-base font-semibold text-slate-900">{formatCurrency(card.balance)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm sm:text-base text-slate-600">Card Status</span>
                    <span className="text-sm sm:text-base text-green-600 font-medium">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm sm:text-base text-slate-600">Card Type</span>
                    <span className="text-sm sm:text-base text-slate-900">Debit Card</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm sm:text-base text-slate-600">Daily Limit</span>
                    <span className="text-sm sm:text-base text-slate-900">₦200,000</span>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">Recent Transactions</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 sm:p-3 bg-slate-50 rounded-lg">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-medium text-slate-900 truncate">ATM Withdrawal</p>
                      <p className="text-xs text-slate-500">Today 2:30 PM</p>
                    </div>
                    <span className="text-sm sm:text-base text-red-600 font-medium ml-2">-₦50,000</span>
                  </div>
                  <div className="flex justify-between items-center p-2 sm:p-3 bg-slate-50 rounded-lg">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-medium text-slate-900 truncate">Online Payment</p>
                      <p className="text-xs text-slate-500">Yesterday 4:15 PM</p>
                    </div>
                    <span className="text-sm sm:text-base text-red-600 font-medium ml-2">-₦25,000</span>
                  </div>
                  <div className="flex justify-between items-center p-2 sm:p-3 bg-slate-50 rounded-lg">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-medium text-slate-900 truncate">Card Funding</p>
                      <p className="text-xs text-slate-500">2 days ago</p>
                    </div>
                    <span className="text-sm sm:text-base text-green-600 font-medium ml-2">+₦100,000</span>
                  </div>
                </div>
                <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm">
                  View All Transactions
                </button>
              </div>

              {/* Card Controls */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">Card Controls</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-slate-600">Online Transactions</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-9 h-5 sm:w-11 sm:h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-slate-600">International Use</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-9 h-5 sm:w-11 sm:h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-slate-600">Contactless Payments</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-9 h-5 sm:w-11 sm:h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
