import { Transaction, Card, Account, User, DashboardStats } from '@/types'

export const mockUser: User = {
  id: '1',
  firstName: 'Adebayo',
  lastName: 'Ogundimu',
  email: 'adebayo.ogundimu@example.com',
  phone: '+234 803 123 4567',
  bvn: '12345678901',
  nin: '12345678901234567890',
  address: {
    street: '15 Admiralty Way',
    city: 'Lekki',
    state: 'Lagos',
    country: 'Nigeria'
  }
}

export const mockAccounts: Account[] = [
  {
    id: '1',
    name: 'Main Account',
    type: 'current',
    balance: 2500000,
    currency: 'NGN',
    bank: 'GTBank',
    accountNumber: '0123456789'
  },
  {
    id: '2',
    name: 'Savings Account',
    type: 'savings',
    balance: 8750000,
    currency: 'NGN',
    bank: 'First Bank',
    accountNumber: '3001234567'
  },
  {
    id: '3',
    name: 'Investment Portfolio',
    type: 'investment',
    balance: 15000000,
    currency: 'NGN',
    bank: 'Stanbic IBTC',
    accountNumber: '0012345678'
  }
]

export const mockCards: Card[] = [
  {
    id: '1',
    type: 'debit',
    last4: '4756',
    bank: 'GTBank',
    expiryDate: '12/26',
    balance: 2500000,
    isActive: true,
    color: 'bg-gradient-to-br from-blue-600 to-blue-800'
  },
  {
    id: '2',
    type: 'credit',
    last4: '8901',
    bank: 'Access Bank',
    expiryDate: '08/27',
    balance: 1000000,
    isActive: true,
    color: 'bg-gradient-to-br from-purple-600 to-purple-800'
  },
  {
    id: '3',
    type: 'debit',
    last4: '2345',
    bank: 'Zenith Bank',
    expiryDate: '03/25',
    balance: 750000,
    isActive: false,
    color: 'bg-gradient-to-br from-gray-600 to-gray-800'
  }
]

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'income',
    amount: 850000,
    description: 'Salary Payment',
    category: 'Salary',
    date: new Date('2024-12-01'),
    status: 'completed',
    reference: 'TXN123456789'
  },
  {
    id: '2',
    type: 'expense',
    amount: 45000,
    description: 'Shoprite Purchase',
    category: 'Groceries',
    date: new Date('2024-12-02'),
    status: 'completed',
    reference: 'TXN123456790'
  },
  {
    id: '3',
    type: 'transfer',
    amount: 150000,
    description: 'Transfer to Savings',
    category: 'Transfer',
    date: new Date('2024-12-03'),
    status: 'completed',
    reference: 'TXN123456791'
  },
  {
    id: '4',
    type: 'expense',
    amount: 25000,
    description: 'Uber Rides',
    category: 'Transportation',
    date: new Date('2024-12-04'),
    status: 'completed',
    reference: 'TXN123456792'
  },
  {
    id: '5',
    type: 'income',
    amount: 120000,
    description: 'Freelance Project',
    category: 'Freelance',
    date: new Date('2024-12-05'),
    status: 'pending',
    reference: 'TXN123456793'
  },
  {
    id: '6',
    type: 'expense',
    amount: 78000,
    description: 'Electricity Bill',
    category: 'Utilities',
    date: new Date('2024-12-06'),
    status: 'completed',
    reference: 'TXN123456794'
  },
  {
    id: '7',
    type: 'expense',
    amount: 35000,
    description: 'Netflix & Spotify',
    category: 'Entertainment',
    date: new Date('2024-12-07'),
    status: 'completed',
    reference: 'TXN123456795'
  },
  {
    id: '8',
    type: 'income',
    amount: 200000,
    description: 'Investment Returns',
    category: 'Investment',
    date: new Date('2024-12-08'),
    status: 'completed',
    reference: 'TXN123456796'
  }
]

export const mockDashboardStats: DashboardStats = {
  totalBalance: 26250000,
  totalIncome: 1170000,
  totalExpenses: 183000,
  monthlyGrowth: 12.5,
  transactionCount: 8,
  activeCards: 2
}

export const chartData = [
  { month: 'Jan', income: 850000, expenses: 420000 },
  { month: 'Feb', income: 920000, expenses: 380000 },
  { month: 'Mar', income: 780000, expenses: 450000 },
  { month: 'Apr', income: 1100000, expenses: 520000 },
  { month: 'May', income: 950000, expenses: 390000 },
  { month: 'Jun', income: 1050000, expenses: 460000 },
  { month: 'Jul', income: 890000, expenses: 410000 },
  { month: 'Aug', income: 980000, expenses: 440000 },
  { month: 'Sep', income: 1020000, expenses: 470000 },
  { month: 'Oct', income: 860000, expenses: 400000 },
  { month: 'Nov', income: 1150000, expenses: 380000 },
  { month: 'Dec', income: 1170000, expenses: 183000 }
]