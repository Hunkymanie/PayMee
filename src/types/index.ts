export interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  description?: string
}

export interface Transaction {
  id: string
  type: 'income' | 'expense' | 'transfer'
  amount: number
  description: string
  category: string
  date: Date
  status: 'completed' | 'pending' | 'failed'
  reference?: string
}

export interface Card {
  id: string
  type: 'debit' | 'credit'
  last4: string
  bank: string
  expiryDate: string
  balance: number
  isActive: boolean
  color: string
}

export interface Account {
  id: string
  name: string
  type: 'savings' | 'current' | 'investment'
  balance: number
  currency: string
  bank: string
  accountNumber: string
}

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  avatar?: string
  bvn: string
  nin: string
  address: {
    street: string
    city: string
    state: string
    country: string
  }
}

export interface DashboardStats {
  totalBalance: number
  totalIncome: number
  totalExpenses: number
  monthlyGrowth: number
  transactionCount: number
  activeCards: number
}