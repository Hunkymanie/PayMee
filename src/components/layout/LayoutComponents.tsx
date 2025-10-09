import { ReactNode } from 'react'

interface GridLayoutProps {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: 2 | 3 | 4 | 6 | 8
  className?: string
}

export function GridLayout({ 
  children, 
  cols = 2, 
  gap = 6, 
  className = '' 
}: GridLayoutProps) {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
  }

  const gapClass = {
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8'
  }

  return (
    <div className={`grid ${colsClass[cols]} ${gapClass[gap]} ${className}`}>
      {children}
    </div>
  )
}