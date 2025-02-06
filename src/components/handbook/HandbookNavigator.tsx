'use client'

import { useState, useEffect } from 'react'

interface HandbookFilter {
  theme?: string
  generation?: string
  subtheme?: string
}

export default function HandbookNavigator() {
  const [filters, setFilters] = useState<HandbookFilter>(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('handbook-filters') || '{}')
    }
    return {}
  })

  useEffect(() => {
    localStorage.setItem('handbook-filters', JSON.stringify(filters))
  }, [filters])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] min-h-screen">
      <aside className="p-6 border-r">
        {/* Filters coming soon */}
      </aside>
      <main className="p-6">
        {/* Content coming soon */}
        GRANDISSI CAZZI NEGRI
      </main>
    </div>
  )
}