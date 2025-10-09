'use client'

import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts'
import { chartData } from '@/data/mock'
import { formatCurrency } from '@/lib/utils'

export default function AnalyticsCharts() {
  // Get last 5 months from chartData
  const last5Months = chartData.slice(-5)
  
  return (
    <div className="space-y-4">
      {/* Chart Container */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Monthly Trend</h3>
              <p className="text-slate-500 text-sm mt-1">
                Income vs Expenses • Last 5 months
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full" />
                <span className="text-sm font-medium text-slate-600">Income</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-sm font-medium text-slate-600">Expenses</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={last5Months}
              margin={{
                top: 15,
                right: 25,
                left: 15,
                bottom: 15,
              }}
            >
              <defs>
                <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
                </linearGradient>
                <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.05}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis 
                dataKey="month" 
                stroke="#94a3b8"
                fontSize={12}
                fontWeight={500}
                tickMargin={12}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                stroke="#94a3b8"
                fontSize={12}
                fontWeight={500}
                tickFormatter={(value) => `₦${(value / 1000000).toFixed(1)}M`}
                width={60}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                formatter={(value: number, name: string) => [formatCurrency(value), name]}
                labelStyle={{ color: '#0f172a', fontWeight: 600, fontSize: '13px' }}
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.98)', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  fontSize: '13px',
                  padding: '12px'
                }}
                cursor={{ stroke: '#e2e8f0', strokeWidth: 1 }}
              />
              <Area 
                type="monotone" 
                dataKey="income" 
                stroke="#3b82f6" 
                strokeWidth={3}
                fill="url(#incomeGradient)" 
                name="Income"
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
              />
              <Area 
                type="monotone" 
                dataKey="expenses" 
                stroke="#ef4444" 
                strokeWidth={3}
                fill="url(#expenseGradient)" 
                name="Expenses"
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#ef4444', strokeWidth: 2, stroke: '#fff' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}