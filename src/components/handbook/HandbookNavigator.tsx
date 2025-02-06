'use client'

import { useState } from 'react'
import { useTheme } from '@/components/providers/theme-provider'
import { SunIcon, MoonIcon } from 'lucide-react'

// Definiamo i tipi per i nostri step
type FilterStep = 'theme' | 'subtheme' | 'generation' | 'variant'

// Dati statici per il prototype
const THEMES = [
  'Communication between generations',
  'Generational diversity from an intersectional point of view',
  'How to bridge digital inequality',
  'Generational diversity from an intercultural point of view',
  'Differences in approach to work'
]

export default function HandbookNavigator() {
  const { theme, toggleTheme } = useTheme()
  const [currentStep, setCurrentStep] = useState<FilterStep>('theme')
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null)
  
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 relative">
      {/* Area contenuti principale con padding-bottom aumentato */}
      <main className="pb-[30vh] p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Generational Handbook
          </h1>
          
          {/* Qui andrà il contenuto filtrato */}
        </div>
      </main>

      {/* Footer aumentato al 30vh */}
      <nav className="fixed bottom-0 left-0 right-0 h-[30vh] bg-white dark:bg-slate-800 
                     shadow-lg border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto h-full p-4">
          <div className="flex flex-col h-full">
            {/* Header del footer con step e theme toggle */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                {currentStep === 'theme' && 'Select Theme'}
                {currentStep === 'subtheme' && 'Select Subtheme'}
                {currentStep === 'generation' && 'Select Generation'}
                {currentStep === 'variant' && 'Select Variant'}
              </h2>
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
                aria-label={theme === 'dark' ? 'Activate light mode' : 'Activate dark mode'}
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                ) : (
                  <MoonIcon className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                )}
              </button>
            </div>

            {/* Area filtri */}
            <div className="flex-1 overflow-auto">
              {currentStep === 'theme' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {THEMES.map((theme) => (
                    <button
                      key={theme}
                      onClick={() => {
                        setSelectedTheme(theme)
                        setCurrentStep('subtheme')
                      }}
                      className="p-4 rounded-lg bg-slate-100 dark:bg-slate-700 
                               text-slate-700 dark:text-slate-200 
                               hover:bg-slate-200 dark:hover:bg-slate-600 
                               transition-colors text-left"
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}