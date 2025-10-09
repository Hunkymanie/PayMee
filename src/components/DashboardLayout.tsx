'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { mainNavigation } from '@/config/navigation'
import { useUser } from '@/components/providers/UserProvider'
import { createClient } from '@/lib/supabase/client'
import {
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const { user } = useUser()

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [sidebarOpen])

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => document.removeEventListener('keydown', handleEscKey)
  }, [sidebarOpen])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  const getUserInitials = (name: string) => {
    // Get only the first letter of the first name
    const firstName = name.split(' ')[0]
    return firstName[0]?.toUpperCase() || 'U'
  }

  const displayName = user?.user_metadata?.full_name || user?.email || 'User'
  const firstName = displayName.split(' ')[0] || 'User'

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile sidebar */}
      <div className={cn(
        "fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out",
        sidebarOpen ? "visible opacity-100" : "invisible opacity-0"
      )}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300" onClick={() => setSidebarOpen(false)} />
        <div className={cn(
          "relative flex-1 flex flex-col w-full h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="absolute top-4 right-4 z-10">
            <button
              type="button"
              className="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
              onClick={() => setSidebarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5 text-slate-700" />
            </button>
          </div>
          <SidebarContent pathname={pathname} user={user} onLogout={handleLogout} setSidebarOpen={setSidebarOpen} />
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-40">
        <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-slate-200 shadow-lg">
          <SidebarContent pathname={pathname} user={user} onLogout={handleLogout} />
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-72 flex flex-col flex-1">

        {/* Header */}
        <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-20">
          <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex justify-between items-center h-16 sm:h-20">
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              <div className="flex-1 min-w-0 md:ml-0 ml-4">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 truncate">
                  Welcome Back, {firstName}.
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 hidden sm:block">here&apos;s what is happening with your finances</p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                
                {/* Notifications */}
                <button className="p-2 sm:p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all duration-200 relative">
                  <BellIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 bg-blue-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
                </button>

                {/* User Profile */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                  {user?.user_metadata?.avatar_url ? (
                    <Image
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
                      src={user.user_metadata.avatar_url}
                      alt={displayName}
                      width={40}
                      height={40}
                    />
                  ) : (
                    <div className="h-8 w-8 sm:h-10 sm:w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                      {getUserInitials(displayName)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 py-4 sm:py-6 lg:py-8">
          <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

function SidebarContent({ 
  pathname, 
  user, 
  onLogout,
  setSidebarOpen
}: { 
  pathname: string
  user: { user_metadata?: { full_name?: string; avatar_url?: string }; email?: string } | null
  onLogout: () => void
  setSidebarOpen?: (open: boolean) => void
}) {
  const displayName = user?.user_metadata?.full_name || user?.email || 'User'
  
  const getUserInitials = (name: string) => {
    // Get only the first letter of the first name
    const firstName = name.split(' ')[0]
    return firstName[0]?.toUpperCase() || 'U'
  }

  return (
    <>
      <div className="flex items-center h-20 flex-shrink-0 px-6 bg-blue-600">
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
          {mainNavigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setSidebarOpen?.(false)}
                className={cn(
                  isActive
                    ? 'bg-blue-50 border-r-4 border-blue-500 text-blue-700'
                    : 'text-slate-600 hover:bg-blue-50 hover:text-slate-900',
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
          <div className="compact-card rounded-xl p-4 mb-4">
            <div className="flex items-center gap-3">
              {user?.user_metadata?.avatar_url ? (
                <Image
                  className="w-10 h-10 rounded-full"
                  src={user.user_metadata.avatar_url}
                  alt={displayName}
                  width={40}
                  height={40}
                />
              ) : (
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {getUserInitials(displayName)}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{displayName}</p>
                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
              </div>
              <button 
                onClick={onLogout}
                className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded"
                title="Sign out"
              >
                <ArrowRightOnRectangleIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}