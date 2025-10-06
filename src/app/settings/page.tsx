'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { mockUser } from '@/data/mock'
import {
  UserIcon,
  ShieldCheckIcon,
  BellIcon,
  CreditCardIcon,
  KeyIcon,
  DevicePhoneMobileIcon,
  EyeIcon,
  EyeSlashIcon,
  CheckIcon
} from '@heroicons/react/24/outline'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    transactions: true,
    security: true,
    marketing: false,
    email: true,
    push: true,
    sms: false
  })

  const tabs = [
    { id: 'profile', name: 'Profile', icon: UserIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'cards', name: 'Cards & Limits', icon: CreditCardIcon }
  ]

  const updateNotification = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }))
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
          <p className="mt-2 text-slate-600">Manage your account preferences and security</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Settings Navigation */}
          <div className="compact-card rounded-xl p-5">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    {tab.name}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Settings Content */}
          <div className="xl:col-span-3">
            {activeTab === 'profile' && (
              <div className="compact-card rounded-xl p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-slate-900">Profile Information</h3>
                  <p className="text-slate-600 mt-1">Update your personal details</p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue={mockUser.firstName}
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue={mockUser.lastName}
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue={mockUser.email}
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue={mockUser.phone}
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="compact-card rounded-xl p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-900">Security Settings</h3>
                    <p className="text-slate-600 mt-1">Manage your account security</p>
                  </div>

                  <div className="space-y-4">
                    {/* Password */}
                    <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <KeyIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900">Password</h4>
                          <p className="text-sm text-slate-500">Last changed 30 days ago</p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">Change</button>
                    </div>

                    {/* Two-Factor Authentication */}
                    <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <ShieldCheckIcon className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900">Two-Factor Authentication</h4>
                          <p className="text-sm text-slate-500">
                            <span className="text-green-600 font-medium">Enabled</span> • SMS to +234 803 ***-4567
                          </p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">Manage</button>
                    </div>

                    {/* Login Activity */}
                    <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <DevicePhoneMobileIcon className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900">Active Sessions</h4>
                          <p className="text-sm text-slate-500">2 devices currently signed in</p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">View</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="compact-card rounded-xl p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-slate-900">Notification Preferences</h3>
                  <p className="text-slate-600 mt-1">Choose how you want to be notified</p>
                </div>

                <div className="space-y-6">
                  {/* Notification Types */}
                  <div>
                    <h4 className="font-medium text-slate-900 mb-4">What to notify about</h4>
                    <div className="space-y-4">
                      {[
                        { key: 'transactions', label: 'Transaction Updates', desc: 'Get notified about your transactions' },
                        { key: 'security', label: 'Security Alerts', desc: 'Important security notifications' },
                        { key: 'marketing', label: 'Promotions & News', desc: 'Special offers and product updates' }
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900">{item.label}</p>
                            <p className="text-sm text-slate-500">{item.desc}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={notifications[item.key as keyof typeof notifications]}
                              onChange={(e) => updateNotification(item.key, e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Methods */}
                  <div className="pt-6 border-t border-slate-200">
                    <h4 className="font-medium text-slate-900 mb-4">How to notify</h4>
                    <div className="space-y-4">
                      {[
                        { key: 'email', label: 'Email', desc: 'Send notifications to your email' },
                        { key: 'push', label: 'Push Notifications', desc: 'Browser and mobile push notifications' },
                        { key: 'sms', label: 'SMS', desc: 'Text messages to your phone' }
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900">{item.label}</p>
                            <p className="text-sm text-slate-500">{item.desc}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={notifications[item.key as keyof typeof notifications]}
                              onChange={(e) => updateNotification(item.key, e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cards' && (
              <div className="compact-card rounded-xl p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-slate-900">Cards & Spending Limits</h3>
                  <p className="text-slate-600 mt-1">Manage your card settings and limits</p>
                </div>

                <div className="space-y-6">
                  {/* Spending Limits */}
                  <div>
                    <h4 className="font-medium text-slate-900 mb-4">Daily Spending Limits</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">ATM Withdrawal Limit</label>
                        <input
                          type="text"
                          defaultValue="₦200,000"
                          className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Online Transaction Limit</label>
                        <input
                          type="text"
                          defaultValue="₦500,000"
                          className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">POS Transaction Limit</label>
                        <input
                          type="text"
                          defaultValue="₁,000,000"
                          className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card Controls */}
                  <div className="pt-6 border-t border-slate-200">
                    <h4 className="font-medium text-slate-900 mb-4">Card Controls</h4>
                    <div className="space-y-4">
                      {[
                        { label: 'Online Transactions', desc: 'Allow online and e-commerce transactions', enabled: true },
                        { label: 'International Transactions', desc: 'Allow transactions outside Nigeria', enabled: false },
                        { label: 'Contactless Payments', desc: 'Enable tap-to-pay functionality', enabled: true },
                        { label: 'ATM Withdrawals', desc: 'Allow cash withdrawals from ATMs', enabled: true }
                      ].map((control, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900">{control.label}</p>
                            <p className="text-sm text-slate-500">{control.desc}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked={control.enabled}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Save Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}