'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
}

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children, defaultTheme = 'dark' }: ThemeProviderProps) {
  // Inizializza con un valore costante per evitare mismatch server/client
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  
  // Carica le preferenze dal localStorage solo dopo il primo render
  useEffect(() => {
    try {
      const stored = localStorage.getItem('handbook-theme') as Theme
      if (stored && (stored === 'dark' || stored === 'light')) {
        setTheme(stored)
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      }
    } catch (error) {
      console.error('Failed to load theme from localStorage:', error)
    }
  }, [])

  // Applica il tema e salva in localStorage quando cambia
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('handbook-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}