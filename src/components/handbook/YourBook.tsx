// src/components/handbook/YourBook.tsx
'use client'

import { useBook } from '@/components/providers/book-provider'
import { Trash2Icon } from 'lucide-react'

export const YourBook = () => {
  const { pages, removePage, clearBook } = useBook()

  if (pages.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg mb-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          Your Custom Handbook
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Add pages to your handbook by clicking the + button when viewing content.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Your Custom Handbook
        </h2>
        <button
          onClick={clearBook}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Clear All
        </button>
      </div>
      
      <ul className="space-y-2 max-h-60 overflow-y-auto">
        {pages.map((page) => (
          <li 
            key={page.id}
            className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700 rounded"
          >
            <span className="text-slate-800 dark:text-slate-200 text-sm">{page.title}</span>
            <button
              onClick={() => removePage(page.id)}
              className="text-slate-500 hover:text-red-500"
            >
              <Trash2Icon size={16} />
            </button>
          </li>
        ))}
      </ul>
      
      <button
        className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
      >
        Export Handbook PDF
      </button>
    </div>
  )
}