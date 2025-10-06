import DashboardLayout from '@/components/DashboardLayout'
import RecentTransactions from '@/components/RecentTransactions'
import BalanceChart from '@/components/BalanceChart'
import QuickActions from '@/components/QuickActions'
import { formatCurrency } from '@/lib/utils'
import { mockDashboardStats } from '@/data/mock'
import { 
  BanknotesIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area - Middle Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Account Balance Overview */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            {/* Account Balance */}
            <div className="compact-card rounded-xl p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-50 rounded-lg flex-shrink-0">
                    <BanknotesIcon className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Account Balance</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base font-bold text-slate-900">
                    {formatCurrency(mockDashboardStats.totalBalance)}
                  </p>
                  <span className="text-emerald-600 text-xs font-semibold bg-emerald-50 px-2 py-1 rounded flex-shrink-0">
                    +12.5%
                  </span>
                </div>
              </div>
            </div>

            {/* Money In */}
            <div className="compact-card rounded-xl p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-green-50 rounded-lg flex-shrink-0">
                    <ArrowUpIcon className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Money In</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base font-bold text-slate-900">
                    {formatCurrency(mockDashboardStats.totalIncome)}
                  </p>
                  <span className="text-emerald-600 text-xs font-semibold bg-emerald-50 px-2 py-1 rounded flex-shrink-0">
                    +8.2%
                  </span>
                </div>
              </div>
            </div>

            {/* Money Out */}
            <div className="compact-card rounded-xl p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-red-50 rounded-lg flex-shrink-0">
                    <ArrowUpIcon className="h-4 w-4 text-red-600 rotate-180" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Money Out</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base font-bold text-slate-900">
                    {formatCurrency(mockDashboardStats.totalExpenses)}
                  </p>
                  <span className="text-red-600 text-xs font-semibold bg-red-50 px-2 py-1 rounded flex-shrink-0">
                    +3.1%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Overview */}
          <BalanceChart />
          
          {/* Recent Transactions */}
          <RecentTransactions />
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* My Cards */}
          <div className="compact-card rounded-xl p-5">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                My Cards
              </h3>
              <p className="text-slate-500 text-xs mt-0.5 uppercase tracking-wide">Payment cards</p>
            </div>
            
            <div className="space-y-4">
              {/* Single Paymee Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-black p-4 text-white shadow-2xl transform transition-all duration-300 hover:scale-[1.02] max-w-sm mx-auto" style={{ aspectRatio: '1.586/1' }}>
                {/* Card Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/10"></div>
                <div className="absolute top-2 right-2 w-10 h-10 bg-gradient-to-br from-blue-400/15 to-purple-600/15 rounded-full blur-lg"></div>
                
                <div className="relative h-full flex flex-col justify-between">
                  {/* Card Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-slate-300 text-xs font-light tracking-widest">PAYMEE</div>
                      <div className="text-white text-xs font-medium opacity-90">DEBIT CARD</div>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      {/* Contactless Payment Icon */}
                      <div className="w-3.5 h-3.5">
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white/60">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="currentColor"/>
                          <path d="M8 6C8 7.1 8.9 8 10 8S12 7.1 12 6 11.1 4 10 4 8 4.9 8 6Z" fill="currentColor"/>
                          <path d="M14 8C14 9.1 14.9 10 16 10S18 9.1 18 8 17.1 6 16 6 14 6.9 14 8Z" fill="currentColor"/>
                        </svg>
                      </div>
                      {/* Paymee Logo */}
                      <div className="w-6 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">P</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Chip */}
                  <div className="mt-2">
                    <div className="w-8 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded shadow-md relative">
                      <div className="absolute inset-0.5 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-sm">
                        <div className="grid grid-cols-2 gap-px p-0.5 h-full">
                          <div className="bg-yellow-600 rounded-sm"></div>
                          <div className="bg-yellow-600 rounded-sm"></div>
                          <div className="bg-yellow-600 rounded-sm"></div>
                          <div className="bg-yellow-600 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Number */}
                  <div className="flex-1 flex items-center">
                    <div className="font-mono text-sm font-medium tracking-wider text-white leading-none">
                      4521 1234 5678 2847
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-slate-400 text-xs font-light tracking-wide leading-none">VALID THRU</div>
                      <div className="text-white text-sm font-medium mt-0.5 leading-none">12/28</div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400 text-xs font-light tracking-wide leading-none">CARDHOLDER</div>
                      <div className="text-white text-sm font-medium mt-0.5 leading-none">ADEBAYO O.</div>
                    </div>
                    <div className="flex items-center">
                      {/* Mastercard Logo */}
                      <div className="w-4 h-2.5 bg-red-500 rounded-sm"></div>
                      <div className="w-4 h-2.5 bg-yellow-400 rounded-sm -ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manage Cards Button */}
              <button className="w-auto mx-auto bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-6 py-3 text-slate-700 hover:text-slate-900 transition-all duration-200 group">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium text-sm">Manage Card</span>
                </div>
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <QuickActions />
        </div>
      </div>
    </DashboardLayout>
  )
}
