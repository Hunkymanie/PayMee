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
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Receive',
    icon: ArrowDownIcon,
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Pay Bills',
    icon: BanknotesIcon,
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'Top Up',
    icon: CreditCardIcon,
    color: 'from-orange-500 to-orange-600',
  },
  {
    name: 'Investment',
    icon: PlusCircleIcon,
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    name: 'Exchange',
    icon: ArrowsRightLeftIcon,
    color: 'from-pink-500 to-pink-600',
  },
]

export default function QuickActions() {
  return (
    <div className="compact-card rounded-xl p-5">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900 flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          Quick Actions
        </h3>
        <p className="text-slate-500 text-xs mt-0.5 uppercase tracking-wide">Fast transactions</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.name}
            className="group p-3 rounded-lg border border-slate-100 text-center transition-all duration-200 hover:border-blue-200 hover:shadow-md hover:scale-105 bg-white/60 hover:bg-white/80"
          >
            <div className={`inline-flex p-2 rounded-md bg-gradient-to-r ${action.color} mb-2 group-hover:shadow-md transition-all duration-200`}>
              <action.icon className="h-4 w-4 text-white" />
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