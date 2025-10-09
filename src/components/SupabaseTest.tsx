'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function SupabaseTest() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [error, setError] = useState<string>('')
  
  useEffect(() => {
    async function testConnection() {
      try {
        const supabase = createClient()
        
        // Test basic connection
        const { data, error } = await supabase.auth.getSession()
        
        if (error) {
          setError(`Auth error: ${error.message}`)
          setStatus('error')
        } else {
          setStatus('success')
        }
      } catch (err) {
        setError(`Connection error: ${err instanceof Error ? err.message : 'Unknown error'}`)
        setStatus('error')
      }
    }
    
    testConnection()
  }, [])
  
  if (status === 'loading') {
    return <div className="p-4 bg-blue-100 text-blue-800 rounded">Testing Supabase connection...</div>
  }
  
  if (status === 'error') {
    return (
      <div className="p-4 bg-red-100 text-red-800 rounded">
        <h3 className="font-bold">Supabase Connection Error:</h3>
        <p>{error}</p>
      </div>
    )
  }
  
  return <div className="p-4 bg-green-100 text-green-800 rounded">✅ Supabase connection successful!</div>
}