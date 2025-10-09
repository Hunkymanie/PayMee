'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Mail, CheckCircle, ArrowLeft } from 'lucide-react'

export default function CheckEmail() {
  const [email, setEmail] = useState('')

  useEffect(() => {
    // Get email from URL params or localStorage
    const urlParams = new URLSearchParams(window.location.search)
    const emailParam = urlParams.get('email')
    
    if (emailParam) {
      setEmail(emailParam)
    } else {
      // Try to get from localStorage (set during signup)
      const storedEmail = localStorage.getItem('pendingEmail')
      if (storedEmail) {
        setEmail(storedEmail)
        // Clean up
        localStorage.removeItem('pendingEmail')
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* Subtle logo in top-left */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
        <div className="flex items-center">
          <div className="h-6 w-6 sm:h-8 sm:w-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200">
            <span className="text-blue-600 font-bold text-xs sm:text-sm">P</span>
          </div>
          <span className="ml-2 text-gray-700 font-semibold text-base sm:text-lg">PayMee</span>
        </div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900">
            CHECK YOUR EMAIL
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We&apos;ve sent you a verification link
          </p>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 sm:py-8 px-4 sm:px-10 shadow-xl shadow-blue-100/50 sm:rounded-2xl border sm:border-0 border-gray-200">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-full">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email Verification Sent
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                We&apos;ve sent a verification link to:
              </p>
              {email && (
                <p className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-2 rounded-lg">
                  {email}
                </p>
              )}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 mb-3">
                <strong>What&apos;s next?</strong>
              </p>
              <ol className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">1</span>
                  Check your email inbox (and spam folder)
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">2</span>
                  Click the verification link in the email
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">3</span>
                  You&apos;ll be redirected back to sign in
                </li>
              </ol>
            </div>

            <div className="pt-4 space-y-4">
              <p className="text-xs text-gray-500">
                Didn&apos;t receive the email? Check your spam folder or contact support.
              </p>
              
              <Link
                href="/login"
                className="inline-flex items-center justify-center w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Sign In
              </Link>
            </div>
          </div>

          {/* Subtle footer branding */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              Powered by PayMee Financial Dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}