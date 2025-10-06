import { mockTransactions } from '@/data/mock'
import { formatCurrency, formatDate, cn } from '@/lib/utils'
import { 
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowsRightLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const getTransactionIcon = (type: string) => {
  switch (type) {
    case 'income':
      return ArrowDownIcon
    case 'expense':
      return ArrowUpIcon
    case 'transfer':
      return ArrowsRightLeftIcon
    default:
      return ArrowsRightLeftIcon
  }
}

export default function RecentTransactions() {
  const recentTransactions = mockTransactions.slice(0, 6)

  return (
    <div className="compact-card rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Recent Transactions</h3>
          <p className="text-slate-500 text-sm mt-1">Latest activity</p>
        </div>
        <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
          View All
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
      
      {/* Table Header */}
      <div className="grid grid-cols-12 gap-3 px-3 py-2 text-xs font-medium text-slate-500 uppercase tracking-wide border-b border-slate-100">
        <div className="col-span-5">Transaction</div>
        <div className="col-span-2">Date</div>
        <div className="col-span-3 text-right">Amount</div>
        <div className="col-span-2 text-center">Status</div>
      </div>
      
      {/* Transaction Rows */}
      <div className="divide-y divide-slate-50">
        {recentTransactions.map((transaction) => {
          const IconComponent = getTransactionIcon(transaction.type)
          
          return (
            <div key={transaction.id} className="grid grid-cols-12 gap-3 px-3 py-3 hover:bg-slate-50/50 transition-all duration-200 group cursor-pointer items-center">
              {/* Transaction (Icon + Name) */}
              <div className="col-span-5 flex items-center gap-3">
                <div className={cn(
                  'flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center',
                  transaction.type === 'income' 
                    ? 'bg-green-100 text-green-600' 
                    : transaction.type === 'expense'
                    ? 'bg-red-100 text-red-600'
                    : 'bg-blue-100 text-blue-600'
                )}>
                  <IconComponent className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-900 truncate">
                    {transaction.description}
                  </p>
                  <p className="text-xs text-slate-500 truncate">
                    {transaction.category}
                  </p>
                </div>
              </div>
              
              {/* Date */}
              <div className="col-span-2">
                <p className="text-sm text-slate-600">
                  {formatDate(transaction.date)}
                </p>
              </div>
              
              {/* Amount */}
              <div className="col-span-3 text-right">
                <p className={cn(
                  'text-sm font-semibold',
                  transaction.type === 'income' 
                    ? 'text-green-600' 
                    : 'text-slate-900'
                )}>
                  {transaction.type === 'income' ? '+' : ''}{formatCurrency(transaction.amount)}
                </p>
              </div>
              
              {/* Status */}
              <div className="col-span-2 flex justify-center">
                <span className={cn(
                  'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
                  transaction.status === 'completed' 
                    ? 'bg-green-100 text-green-700'
                    : transaction.status === 'pending'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-red-100 text-red-700'
                )}>
                  {transaction.status}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}