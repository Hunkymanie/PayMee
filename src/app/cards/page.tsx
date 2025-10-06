'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { formatCurrency } from '@/lib/utils'
import { 
  CreditCardIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowPathIcon,
  PlusIcon,
  WifiIcon
} from '@heroicons/react/24/outline'

export default function CardsPage() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  // Mock card data
  const card = {
    id: 1,
    bank: 'PAYMEE BANK',
    type: 'debit',
    balance: 25420.50,
    cardNumber: '4532 1234 5678 9012',
    last4: '9012',
    expiryDate: '12/28',
    cvv: '123',
    holderName: 'ADEBAYO OLAMIDE',
    isActive: true,
    color: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
  }

  const cardStats = [
    { label: 'Available Balance', value: formatCurrency(card.balance), change: '+2.5%' },
    { label: 'Total Spent', value: formatCurrency(8420.30), change: '+12%' },
    { label: 'Cashback Earned', value: formatCurrency(142.50), change: '+8%' },
    { label: 'Monthly Limit', value: formatCurrency(50000), change: 'Unlimited' }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">My Cards</h1>
            <p className="mt-2 text-slate-600">Manage your debit and credit cards</p>
          </div>
          <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg">
            <PlusIcon className="h-5 w-5" />
            Add New Card
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Card Display */}
          <div className="xl:col-span-2">
            <div className="compact-card rounded-xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-semibold text-slate-900">Primary Card</h2>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    {showDetails ? (
                      <EyeSlashIcon className="h-5 w-5 text-slate-600" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-slate-600" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <ArrowPathIcon className="h-5 w-5 text-slate-600" />
                  </button>
                </div>
              </div>

              {/* Card with Flip Animation */}
              <div className="perspective-1000 mb-8">
                <div 
                  className={`relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of Card */}
                  <div 
                    className={`absolute inset-0 w-full h-64 rounded-2xl p-8 text-white shadow-2xl backface-hidden ${card.color}`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <p className="text-sm opacity-90 font-medium">{card.bank}</p>
                        <p className="text-xs opacity-70 mt-1">{card.type.toUpperCase()} CARD</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <WifiIcon className="h-6 w-6 opacity-80" />
                        <div className="w-10 h-6 bg-white/20 rounded"></div>
                      </div>
                    </div>

                    {/* Card Number */}
                    <div className="mb-6">
                      <p className="text-xl font-mono tracking-wider">
                        {showDetails ? card.cardNumber : `•••• •••• •••• ${card.last4}`}
                      </p>
                    </div>

                    {/* Card Details */}
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs opacity-70 mb-1">CARD HOLDER</p>
                        <p className="text-sm font-medium">{card.holderName}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs opacity-70 mb-1">EXPIRES</p>
                        <p className="text-sm font-mono">{card.expiryDate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div 
                    className={`absolute inset-0 w-full h-64 rounded-2xl ${card.color} shadow-2xl rotate-y-180 backface-hidden`}
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    {/* Magnetic Stripe */}
                    <div className="w-full h-12 bg-black mt-6"></div>
                    
                    {/* CVV Area */}
                    <div className="p-8 pt-6">
                      <div className="bg-white/90 rounded p-4 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-slate-600">CVV</span>
                          <span className="text-sm font-mono text-slate-900">
                            {showDetails ? card.cvv : '•••'}
                          </span>
                        </div>
                      </div>
                      
                      {/* Bank Info */}
                      <div className="text-white space-y-2">
                        <p className="text-xs opacity-70">Customer Service: 1-800-PAYMEE</p>
                        <p className="text-xs opacity-70">www.paymeebank.com</p>
                        <p className="text-xs opacity-70">This card is property of Paymee Bank</p>
                      </div>

                      {/* Card Network Logo */}
                      <div className="absolute bottom-6 right-8">
                        <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center">
                          <span className="text-xs font-bold text-white">VISA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="grid grid-cols-4 gap-4">
                <button className="compact-card rounded-lg p-4 hover:bg-blue-50 transition-colors group">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-200 transition-colors">
                      <CreditCardIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-sm font-medium text-slate-900">Top Up</p>
                  </div>
                </button>
                <button className="compact-card rounded-lg p-4 hover:bg-green-50 transition-colors group">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-green-200 transition-colors">
                      <ArrowPathIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-sm font-medium text-slate-900">Transfer</p>
                  </div>
                </button>
                <button className="compact-card rounded-lg p-4 hover:bg-purple-50 transition-colors group">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-purple-200 transition-colors">
                      <EyeIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <p className="text-sm font-medium text-slate-900">Statements</p>
                  </div>
                </button>
                <button className="compact-card rounded-lg p-4 hover:bg-orange-50 transition-colors group">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-orange-200 transition-colors">
                      <CreditCardIcon className="h-5 w-5 text-orange-600" />
                    </div>
                    <p className="text-sm font-medium text-slate-900">Settings</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Card Statistics */}
          <div className="space-y-6">
            <div className="compact-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Card Statistics</h3>
              <div className="space-y-4">
                {cardStats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{stat.value}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      stat.change.includes('+') 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="compact-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <p className="text-sm font-medium text-slate-900">Block Card</p>
                  <p className="text-xs text-slate-500">Temporarily disable transactions</p>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <p className="text-sm font-medium text-slate-900">Change PIN</p>
                  <p className="text-xs text-slate-500">Update your card PIN</p>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <p className="text-sm font-medium text-slate-900">Set Limits</p>
                  <p className="text-xs text-slate-500">Manage spending limits</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}