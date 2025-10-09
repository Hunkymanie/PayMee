'use client'

import { useState, useEffect, useMemo } from 'react'
import { mockTransactions, mockDashboardStats } from '@/data/mock'
import { Transaction, DashboardStats } from '@/types'

// Hook for dashboard statistics
export function useDashboardStats() {
  const [stats, setStats] = useState<DashboardStats>(mockDashboardStats)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refreshStats = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API delay
      setStats(mockDashboardStats)
    } catch {
      setError('Failed to fetch dashboard statistics')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    refreshStats()
  }, [])

  return {
    stats,
    isLoading,
    error,
    refreshStats
  }
}

// Hook for transaction management
export function useTransactions() {
  const [transactions] = useState<Transaction[]>(mockTransactions)
  const [filter, setFilter] = useState<'all' | 'income' | 'expense' | 'transfer'>('all')
  const [sortBy, setSortBy] = useState<'date' | 'amount' | 'type'>('date')
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [status, setStatus] = useState('all')

  const filteredTransactions = useMemo(() => {
    let filtered = transactions

    // Apply type filter
    if (filter !== 'all') {
      filtered = filtered.filter(transaction => transaction.type === filter)
    }

    // Apply category filter
    if (category !== 'all') {
      filtered = filtered.filter(transaction => 
        transaction.category.toLowerCase() === category.toLowerCase()
      )
    }

    // Apply status filter
    if (status !== 'all') {
      filtered = filtered.filter(transaction => transaction.status === status)
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply sorting
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'amount':
          return b.amount - a.amount
        case 'type':
          return a.type.localeCompare(b.type)
        case 'date':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
    })

    return filtered
  }, [transactions, filter, sortBy, searchTerm, category, status])

  const recentTransactions = useMemo(() => {
    return transactions
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 10)
  }, [transactions])

  return {
    transactions: filteredTransactions,
    recentTransactions,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
    status,
    setStatus,
    totalCount: transactions.length,
    filteredCount: filteredTransactions.length,
    resetFilters: () => {
      setFilter('all')
      setCategory('all')
      setStatus('all')
      setSearchTerm('')
      setSortBy('date')
    }
  }
}

// Hook for local storage persistence
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window === 'undefined') {
        return initialValue
      }
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue] as const
}

// Hook for responsive design
export function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isMobile = windowSize.width < 768
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024
  const isDesktop = windowSize.width >= 1024

  return {
    windowSize,
    isMobile,
    isTablet,
    isDesktop
  }
}

// Hook for debounced values (useful for search)
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}