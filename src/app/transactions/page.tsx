import DashboardLayout from '@/components/DashboardLayout'
import TransactionList from '@/components/TransactionList'
import TransactionFilters from '@/components/TransactionFilters'
import { formatCurrency } from '@/lib/utils'
import { mockTransactions } from '@/data/mock'
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ClockIcon,
  PlusIcon
} from '@heroicons/react/24/outline'

export default function TransactionsPage() {
  // Calculate quick stats
  const totalIncome = mockTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)
  
  const totalExpenses = mockTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)
    
  const pendingCount = mockTransactions
    .filter(t => t.status === 'pending').length

  return (
    <DashboardLayout>
      <div className="space-y-4">
        {/* Modern Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Transactions</h1>
            <p className="text-slate-600 text-sm">
              Monitor your financial activity and spending patterns
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all duration-200 font-medium text-sm">
              Export
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg shadow-blue-600/25 text-sm">
              <PlusIcon className="h-4 w-4" />
              Add Transaction
            </button>
          </div>
        </div>
        
        {/* Modern Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 to-green-100 p-4 border border-emerald-200/50">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-full -mr-8 -mt-8"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-500 rounded-lg shadow-lg">
                  <ArrowTrendingUpIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-emerald-700 font-semibold text-xs">Total Income</p>
                  <p className="text-emerald-900 text-lg font-bold tracking-tight">{formatCurrency(totalIncome)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-500 text-white px-2 py-0.5 rounded-lg text-xs font-medium">+12.5%</span>
                <span className="text-emerald-700 text-xs">vs last month</span>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-red-50 to-rose-100 p-4 border border-red-200/50">
            <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/10 rounded-full -mr-8 -mt-8"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-red-500 rounded-lg shadow-lg">
                  <ArrowTrendingDownIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-red-700 font-semibold text-xs">Total Expenses</p>
                  <p className="text-red-900 text-lg font-bold tracking-tight">{formatCurrency(totalExpenses)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-red-500 text-white px-2 py-0.5 rounded-lg text-xs font-medium">+3.1%</span>
                <span className="text-red-700 text-xs">vs last month</span>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-orange-100 p-4 border border-amber-200/50">
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/10 rounded-full -mr-8 -mt-8"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-amber-500 rounded-lg shadow-lg">
                  <ClockIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-amber-700 font-semibold text-xs">Pending</p>
                  <p className="text-amber-900 text-lg font-bold tracking-tight">{pendingCount}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white px-2 py-0.5 rounded-lg text-xs font-medium">Transactions</span>
                <span className="text-amber-700 text-xs">awaiting approval</span>
              </div>
            </div>
          </div>
        </div>
        
        <TransactionFilters />
        <TransactionList />
      </div>
    </DashboardLayout>
  )
}