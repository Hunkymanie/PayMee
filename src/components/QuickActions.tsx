import { 
  ArrowUpIcon,
  ArrowDownIcon,
  BanknotesIcon,
  CreditCardIcon,
  PlusCircleIcon,
  ArrowsRightLeftIcon
} from '@heroicons/react/24/outline'

const actions = [
  {
    name: 'Send Money',
    icon: ArrowUpIcon,
    color: 'bg-blue-600',
  },
  {
    name: 'Receive',
    icon: ArrowDownIcon,
    color: 'bg-blue-600',
  },
  {
    name: 'Pay Bills',
    icon: BanknotesIcon,
    color: 'bg-blue-600',
  },
  {
    name: 'Top Up',
    icon: CreditCardIcon,
    color: 'bg-blue-600',
  },
  {
    name: 'Investment',
    icon: PlusCircleIcon,
    color: 'bg-blue-600',
  },
  {
    name: 'Exchange',
    icon: ArrowsRightLeftIcon,
    color: 'bg-blue-600',
  },
]

export default function QuickActions() {
  return (
    <div className="compact-card rounded-xl p-4 sm:p-5">
      <div className="mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          Quick Actions
        </h3>
        <p className="text-slate-500 text-xs mt-0.5 uppercase tracking-wide">Fast transactions</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 sm:gap-3">
        {actions.map((action) => (
          <button
            key={action.name}
            className="group p-2 sm:p-3 rounded-lg border border-slate-200 text-center transition-all duration-200 hover:border-blue-200 hover:shadow-md hover:scale-105 bg-white"
          >
            <div className={`inline-flex p-1.5 sm:p-2 rounded-md ${action.color} mb-1 sm:mb-2 group-hover:shadow-md transition-all duration-200`}>
              <action.icon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
            </div>
            <p className="text-xs font-medium text-slate-700 group-hover:text-slate-900">
              {action.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}