import DashboardLayout from '@/components/DashboardLayout'
import AnalyticsCharts from '@/components/AnalyticsCharts'
import SpendingBreakdown from '@/components/SpendingBreakdown'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { formatCurrency } from '@/lib/utils'
import { mockDashboardStats } from '@/data/mock'
import {
  ArrowUpIcon,
  ArrowTrendingUpIcon as TrendingUpIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  BanknotesIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

export default function AnalyticsPage() {
  // Mock data for analytics - you can replace with real data
  const analyticsData = {
    monthlyGrowth: 12.5,
    avgMonthlyIncome: 8500,
    avgMonthlyExpenses: 6200,
    savingsRate: 27.1,
    topSpendingCategory: 'Food & Dining',
    topSpendingAmount: 1850,
    transactionCount: 142,
    cardsUsed: 3
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
      <div className="space-y-4">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Financial Analytics
            </h1>
            <p className="mt-1 text-slate-500">
              Deep insights into your spending patterns, trends, and financial health
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="flex items-center gap-2 compact-card rounded-lg px-4 py-2">
              <CalendarDaysIcon className="h-4 w-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-700">Last 30 Days</span>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Monthly Growth */}
          <div className="compact-card rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Monthly Growth</p>
                <div className="flex items-center mt-1">
                  <p className="text-xl font-bold text-slate-900">
                    +{analyticsData.monthlyGrowth}%
                  </p>
                  <TrendingUpIcon className="h-5 w-5 text-green-500 ml-2" />
                </div>
              </div>
              <div className="p-3 bg-green-50 rounded-xl">
                <ChartBarIcon className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center text-xs text-green-600">
                <ArrowUpIcon className="h-3 w-3 mr-1" />
                <span>+2.3% from last month</span>
              </div>
            </div>
          </div>

          {/* Average Income */}
          <div className="compact-card rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Avg. Monthly Income</p>
                <p className="text-xl font-bold text-slate-900 mt-1">
                  {formatCurrency(analyticsData.avgMonthlyIncome)}
                </p>
              </div>
              <div className="p-3 bg-blue-50 rounded-xl">
                <BanknotesIcon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center text-xs text-blue-600">
                <ArrowUpIcon className="h-3 w-3 mr-1" />
                <span>+8.2% from last month</span>
              </div>
            </div>
          </div>

          {/* Savings Rate */}
          <div className="compact-card rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Savings Rate</p>
                <p className="text-xl font-bold text-slate-900 mt-1">
                  {analyticsData.savingsRate}%
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded-xl">
                <TrendingUpIcon className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center text-xs text-purple-600">
                <ArrowUpIcon className="h-3 w-3 mr-1" />
                <span>Above average (22%)</span>
              </div>
            </div>
          </div>

          {/* Transaction Count */}
          <div className="compact-card rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Transactions</p>
                <p className="text-xl font-bold text-slate-900 mt-1">
                  {analyticsData.transactionCount}
                </p>
              </div>
              <div className="p-3 bg-orange-50 rounded-xl">
                <CreditCardIcon className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center text-xs text-slate-500">
                <span>This month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column - Monthly Trend + Financial Health Score */}
          <div className="space-y-4">
            {/* Income vs Expenses Trend */}
            <div className="compact-card rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Income vs Expenses</h3>
                  <p className="text-sm text-slate-500">Monthly comparison over time</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-600">Income</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-slate-600">Expenses</span>
                  </div>
                </div>
              </div>
              <AnalyticsCharts />
            </div>

            {/* Financial Health Score - Replica of Chart Box */}
            <div className="compact-card rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Financial Health Score</h3>
                  <p className="text-sm text-slate-500">Overall financial wellness</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-600">Score</span>
                  </div>
                </div>
              </div>
              
              {/* Health Score Content */}
              <div className="h-48 flex items-center justify-center">
                <div className="flex items-center gap-8">
                  {/* Score Circle */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          strokeDasharray="85, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">85</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-sm text-slate-500 font-medium">Excellent</div>
                    </div>
                  </div>
                  
                  {/* Score Breakdown */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-6 min-w-[120px]">
                      <span className="text-sm text-slate-600 font-medium">Savings</span>
                      <span className="text-lg font-bold text-green-600">A+</span>
                    </div>
                    <div className="flex items-center justify-between gap-6 min-w-[120px]">
                      <span className="text-sm text-slate-600 font-medium">Spending</span>
                      <span className="text-lg font-bold text-blue-600">A</span>
                    </div>
                    <div className="flex items-center justify-between gap-6 min-w-[120px]">
                      <span className="text-sm text-slate-600 font-medium">Goals</span>
                      <span className="text-lg font-bold text-purple-600">B+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Top Spending Categories */}
          <div className="compact-card rounded-xl p-4">
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-slate-900">Top Spending Categories</h3>
              <p className="text-sm text-slate-500">Where your money goes this month</p>
            </div>
            <SpendingBreakdown />
          </div>
        </div>

        {/* Monthly Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* This Month Summary */}
          <div className="compact-card rounded-xl p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <CalendarDaysIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">This Month</h4>
                <p className="text-xs text-slate-500">September 2025</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Total Income</span>
                <span className="font-semibold text-green-600">
                  {formatCurrency(mockDashboardStats.totalIncome)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Total Expenses</span>
                <span className="font-semibold text-red-600">
                  {formatCurrency(mockDashboardStats.totalExpenses)}
                </span>
              </div>
              <div className="border-t border-slate-200 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-900">Net Savings</span>
                  <span className="font-bold text-blue-600">
                    {formatCurrency(mockDashboardStats.totalIncome - mockDashboardStats.totalExpenses)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Category */}
          <div className="compact-card rounded-xl p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-50 rounded-lg">
                <ChartBarIcon className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Top Category</h4>
                <p className="text-xs text-slate-500">Highest spending</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-900">{analyticsData.topSpendingCategory}</span>
                  <span className="text-sm font-semibold text-slate-900">
                    {formatCurrency(analyticsData.topSpendingAmount)}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-xs text-slate-500 mt-1">65% of total expenses</p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="compact-card rounded-xl p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-50 rounded-lg">
                <CreditCardIcon className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Payment Methods</h4>
                <p className="text-xs text-slate-500">Cards usage</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Paymee Card</span>
                <span className="text-sm font-semibold text-slate-900">78%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Bank Transfer</span>
                <span className="text-sm font-semibold text-slate-900">15%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Cash</span>
                <span className="text-sm font-semibold text-slate-900">7%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
    </ProtectedRoute>
  )
}