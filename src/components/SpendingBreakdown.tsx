import { formatCurrency } from '@/lib/utils'

const spendingData = [
  { category: 'Investment', amount: 350000, percentage: 32.8, color: 'bg-purple-500', hex: '#8b5cf6', trend: '+5.2%' },
  { category: 'Food & Dining', amount: 245000, percentage: 23.0, color: 'bg-blue-500', hex: '#3b82f6', trend: '+2.1%' },
  { category: 'Utilities', amount: 178000, percentage: 16.7, color: 'bg-emerald-500', hex: '#10b981', trend: '-1.8%' },
  { category: 'Transportation', amount: 125000, percentage: 11.7, color: 'bg-orange-500', hex: '#f97316', trend: '+8.3%' },
  { category: 'Entertainment', amount: 89000, percentage: 8.3, color: 'bg-pink-500', hex: '#ec4899', trend: '+15.2%' },
  { category: 'Others', amount: 67000, percentage: 6.3, color: 'bg-slate-500', hex: '#64748b', trend: '-2.1%' },
]

export default function SpendingBreakdown() {
  const total = spendingData.reduce((sum, item) => sum + item.amount, 0)
  let currentAngle = 0
  
  return (
    <div className="space-y-2">
      {/* Professional Pie Chart - Compact */}
      <div className="flex items-center justify-center relative">
        <div className="relative w-36 h-36">
          {/* Outer ring shadow */}
          <div className="absolute inset-2 rounded-full shadow-lg bg-white"></div>
          
          {/* SVG Pie Chart */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {spendingData.map((item, index) => {
              const percentage = (item.amount / total) * 100
              const angle = (percentage / 100) * 360
              const startAngle = currentAngle
              const endAngle = currentAngle + angle
              
              // Calculate path for pie slice
              const startAngleRad = (startAngle * Math.PI) / 180
              const endAngleRad = (endAngle * Math.PI) / 180
              const largeArcFlag = angle > 180 ? 1 : 0
              
              const x1 = 50 + 42 * Math.cos(startAngleRad)
              const y1 = 50 + 42 * Math.sin(startAngleRad)
              const x2 = 50 + 42 * Math.cos(endAngleRad)
              const y2 = 50 + 42 * Math.sin(endAngleRad)
              
              const pathData = [
                `M 50 50`,
                `L ${x1} ${y1}`,
                `A 42 42 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                'Z'
              ].join(' ')
              
              currentAngle = endAngle
              
              return (
                <g key={index}>
                  {/* Main slice */}
                  <path
                    d={pathData}
                    fill={item.hex}
                    className="hover:opacity-90 transition-all duration-300 cursor-pointer drop-shadow-sm"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  {/* Hover effect */}
                  <path
                    d={pathData}
                    fill="transparent"
                    className="hover:stroke-slate-400 hover:stroke-2 transition-all duration-300"
                  />
                </g>
              )
            })}
            
            {/* Center circle with gradient */}
            <defs>
              <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#f8fafc', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#e2e8f0', stopOpacity:1}} />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="18" fill="url(#centerGradient)" stroke="#e2e8f0" strokeWidth="1" />
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm font-bold text-slate-900">Total</div>
              <div className="text-xs text-slate-600 font-medium">₦{(total/1000000).toFixed(1)}M</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Professional Legend - Compact */}
      <div className="space-y-1">
        {spendingData.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-1.5 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200">
            <div className="flex items-center space-x-2">
              {/* Color indicator */}
              <div className="relative">
                <div className={`w-3 h-3 rounded-full ${item.color} shadow-sm`}></div>
                <div className="absolute inset-0 rounded-full ring-1 ring-white"></div>
              </div>
              
              {/* Category info */}
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <p className="font-medium text-slate-900 text-xs">{item.category}</p>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                    item.trend.startsWith('+') 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {item.trend}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{item.percentage.toFixed(1)}%</p>
              </div>
            </div>
            
            {/* Amount */}
            <div className="text-right">
              <p className="font-semibold text-slate-900 text-xs">
                {formatCurrency(item.amount)}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Summary Card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-2 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-blue-900 text-sm">Monthly Spending</p>
            <p className="text-xs text-blue-600">All categories</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-blue-900">
              {formatCurrency(total)}
            </p>
            <p className="text-xs text-blue-600">This month</p>
          </div>
        </div>
      </div>
    </div>
  )
}