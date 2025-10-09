'use client'

import DashboardLayout from '@/components/DashboardLayout'
import StatsOverview from '@/components/StatsOverview'
import RecentTransactions from '@/components/RecentTransactions'
import BalanceChart from '@/components/BalanceChart'
import QuickActions from '@/components/QuickActions'
import MyCardsWidget from '@/components/MyCardsWidget'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { useDashboardStats } from '@/hooks'

export default function Home() {
  const { stats, error } = useDashboardStats()

  if (error) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <div className="text-center py-12">
            <p className="text-red-600">Error loading dashboard: {error}</p>
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-4 sm:space-y-6">
          {/* Account Balance Overview */}
          <StatsOverview
            totalBalance={stats.totalBalance}
            totalIncome={stats.totalIncome}
            totalExpenses={stats.totalExpenses}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Balance Chart */}
              <BalanceChart />
              
              {/* Recent Transactions */}
              <RecentTransactions />
            </div>

            {/* Right Sidebar */}
            <div className="space-y-4 sm:space-y-6">
              {/* My Cards */}
              <MyCardsWidget />

              {/* Quick Actions */}
              <QuickActions />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
