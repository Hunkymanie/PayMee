import { Transaction, Card, Account, User, DashboardStats } from '@/types'

// Generate dynamic cards for a user
const generateCardsForUser = (userId: string, userEmail: string): Card[] => {
  // Generate ONE PayMe card per user
  const seed = userId + userEmail
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  
  // Use absolute value to ensure positive number
  const seedNum = Math.abs(hash)
  
  // Generate PayMe card number - always starts with 5399 (PayMe prefix)
  const prefix = '5399'
  let remainingDigits = ''
  let currentSeed = seedNum
  
  for (let i = 0; i < 12; i++) {
    remainingDigits += (currentSeed % 10).toString()
    currentSeed = Math.floor(currentSeed / 10) + i // Add variation
  }
  
  const cardNumber = prefix + remainingDigits
  const last4 = cardNumber.slice(-4)
  
  // Generate expiry date (2-4 years from now)
  const yearsToAdd = (seedNum % 3) + 2 // 2-4 years
  const monthsToAdd = (seedNum % 12) + 1 // 1-12 months
  
  const currentDate = new Date()
  const expiryDate = new Date(currentDate.getFullYear() + yearsToAdd, monthsToAdd - 1)
  
  const month = (expiryDate.getMonth() + 1).toString().padStart(2, '0')
  const year = expiryDate.getFullYear().toString().slice(-2)
  const expiryString = `${month}/${year}`
  
  // Generate balance based on user (between 500k and 5M Naira)
  const balanceMultiplier = seedNum % 4500000
  const balance = 500000 + balanceMultiplier
  
  return [{
    id: '1',
    type: 'debit',
    last4: last4,
    bank: 'PayMe Bank',
    expiryDate: expiryString,
    balance: balance,
    isActive: true,
    color: 'bg-blue-600'
  }]
}

// Function to generate mock user data based on actual user
export const generateMockUser = (actualUser?: { 
  user_metadata?: { full_name?: string, phone?: string }; 
  email?: string;
  phone?: string;
}): User => {
  let firstName = 'User'
  let lastName = 'Name'
  let email = 'user@example.com'

  if (actualUser?.user_metadata?.full_name) {
    const nameParts = actualUser.user_metadata.full_name.split(' ')
    firstName = nameParts[0] || 'User'
    lastName = nameParts.slice(1).join(' ') || 'Name'
  } else if (actualUser?.email) {
    const emailName = actualUser.email.split('@')[0]
    firstName = emailName.charAt(0).toUpperCase() + emailName.slice(1)
  }

  if (actualUser?.email) {
    email = actualUser.email
  }

  return {
    id: actualUser?.email ? btoa(actualUser.email).slice(0, 8) : '1', // Generate consistent ID from email
    firstName,
    lastName,
    email,
    phone: actualUser?.user_metadata?.phone || actualUser?.phone || '',
    bvn: '12345678901',
    nin: '12345678901234567890',
    address: {
      street: '15 Admiralty Way',
      city: 'Lekki',
      state: 'Lagos',
      country: 'Nigeria'
    }
  }
}

// Function to generate user-specific cards
export const generateUserCards = (user: { id: string; email: string }): Card[] => {
  return generateCardsForUser(user.id, user.email)
}

// Default mock user for fallback
export const mockUser: User = {
  id: '1',
  firstName: 'User',
  lastName: 'Name',
  email: 'user@example.com',
  phone: '',
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
    bank: 'PayMe Bank',
    expiryDate: '12/26',
    balance: 2500000,
    isActive: true,
    color: 'bg-blue-600'
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