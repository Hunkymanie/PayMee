'use client'

import { 
  BanknotesIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline'
import { formatCurrency } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: number
  change: string
  changeType: 'positive' | 'negative'
  icon: React.ComponentType<{ className?: string }>
  iconBgColor: string
  iconColor: string
}

export function StatCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  iconBgColor, 
  iconColor 
}: StatCardProps) {
  return (
    <div className="compact-card rounded-xl p-3 sm:p-4">
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 sm:p-2 ${iconBgColor} rounded-lg flex-shrink-0`}>
            <Icon className={`h-3 w-3 sm:h-4 sm:w-4 ${iconColor}`} />
          </div>
          <p className="text-xs font-medium text-slate-500 truncate">{title}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm sm:text-base font-bold text-slate-900 truncate">
            {formatCurrency(value)}
          </p>
          <span className={`text-xs font-semibold px-1.5 sm:px-2 py-1 rounded flex-shrink-0 ${
            changeType === 'positive' 
              ? 'text-emerald-600 bg-emerald-50' 
              : 'text-red-600 bg-red-50'
          }`}>
            {change}
          </span>
        </div>
      </div>
    </div>
  )
}

interface StatsOverviewProps {
  totalBalance: number
  totalIncome: number
  totalExpenses: number
}

export default function StatsOverview({ 
  totalBalance, 
  totalIncome, 
  totalExpenses 
}: StatsOverviewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
      <StatCard
        title="Account Balance"
        value={totalBalance}
        change="+12.5%"
        changeType="positive"
        icon={BanknotesIcon}
        iconBgColor="bg-blue-50"
        iconColor="text-blue-600"
      />
      
      <StatCard
        title="Money In"
        value={totalIncome}
        change="+8.2%"
        changeType="positive"
        icon={ArrowUpIcon}
        iconBgColor="bg-green-50"
        iconColor="text-green-600"
      />
      
      <StatCard
        title="Money Out"
        value={totalExpenses}
        change="+3.1%"
        changeType="negative"
        icon={ArrowUpIcon}
        iconBgColor="bg-red-50"
        iconColor="text-red-600 rotate-180"
      />
    </div>
  )
}