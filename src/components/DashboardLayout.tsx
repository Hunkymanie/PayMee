'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  HomeIcon,
  CreditCardIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChartBarIcon,
  ListBulletIcon,
  CogIcon,
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Overview', href: '/', icon: HomeIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Transactions', href: '/transactions', icon: ListBulletIcon },
  { name: 'Cards', href: '/cards', icon: CreditCardIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Mobile sidebar */}
      <div className={cn(
        "fixed inset-0 flex z-50 md:hidden",
        sidebarOpen ? "block" : "hidden"
      )}>
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white/90 backdrop-blur-xl border-r border-white/20">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/10 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <SidebarContent pathname={pathname} />
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-40">
        <div className="flex-1 flex flex-col min-h-0 bg-white/80 backdrop-blur-xl border-r border-white/30 shadow-xl">
          <SidebarContent pathname={pathname} />
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-72 flex flex-col flex-1">
        {/* Top navigation */}
        <div className="sticky top-0 z-30 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            type="button"
            className="h-12 w-12 inline-flex items-center justify-center rounded-xl bg-white/80 backdrop-blur-sm text-slate-600 hover:text-slate-900 hover:bg-white shadow-lg border border-white/50 transition-all duration-200"
            onClick={() => setSidebarOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Header */}
        <header className="bg-white/60 backdrop-blur-xl shadow-sm border-b border-white/30 sticky top-0 z-20">
          <div className="px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center h-20">
              <div className="flex-1">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  Welcome Back, Adebayo.
                </h1>
                <p className="text-sm text-slate-500 mt-1">here's what is happening with your finances</p>
              </div>
              <div className="flex items-center space-x-4">
                {/* Search Bar */}
                <div className="relative hidden sm:block">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="search-input block w-80 pl-10 pr-3 py-2.5 border border-white/30 rounded-xl bg-white/50 backdrop-blur-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 text-sm"
                    placeholder="Search transactions, contacts..."
                  />
                </div>
                
                {/* Notifications */}
                <button className="p-3 text-slate-400 hover:text-slate-600 hover:bg-white/50 rounded-xl transition-all duration-200 relative">
                  <BellIcon className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 py-8">
          <div className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

function SidebarContent({ pathname }: { pathname: string }) {
  return (
    <>
      <div className="flex items-center h-20 flex-shrink-0 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-blue-600 font-bold text-xl">P</span>
            </div>
          </div>
          <div className="ml-4">
            <p className="text-white font-bold text-xl">PayMee</p>
            <p className="text-blue-100 text-xs">Financial Dashboard</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto pt-6">
        <nav className="flex-1 px-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  isActive
                    ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-r-4 border-blue-500 text-blue-700 shadow-lg'
                    : 'text-slate-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-slate-900',
                  'group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02]'
                )}
              >
                <item.icon
                  className={cn(
                    isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600',
                    'mr-4 flex-shrink-0 h-6 w-6 transition-colors duration-200'
                  )}
                />
                <span className="font-medium">{item.name}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                )}
              </Link>
            )
          })}
        </nav>
        
        {/* Bottom section - User Profile */}
        <div className="p-4 mt-auto">
          {/* User Profile Card */}
                    {/* User Profile Card */}
          <div className="compact-card rounded-xl p-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                A
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">Adebayo</p>
              </div>
              <button className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded">
                <ArrowRightOnRectangleIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}