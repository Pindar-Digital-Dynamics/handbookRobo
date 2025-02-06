'use client'

import { useState } from 'react'
import { useTheme } from '@/components/providers/theme-provider'
import { SunIcon, MoonIcon } from 'lucide-react'
import { handbookData, Theme, SubTheme } from '@/data/handbook-data'

type FilterStep = 'theme' | 'subtheme' | 'generation' | 'variant'

export default function HandbookNavigator() {
  const { theme, toggleTheme } = useTheme()
  const [currentStep, setCurrentStep] = useState<FilterStep>('theme')
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null)
  const [selectedSubTheme, setSelectedSubTheme] = useState<SubTheme | null>(null)

  const handleBack = () => {
    switch (currentStep) {
      case 'subtheme':
        setCurrentStep('theme')
        setSelectedTheme(null)
        setSelectedSubTheme(null)
        break
      case 'generation':
        setCurrentStep('subtheme')
        setSelectedSubTheme(null)
        break
      case 'variant':
        setCurrentStep('generation')
        break
    }
  }

  // Componente per il contenuto introduttivo
  const IntroContent = ({ theme }: { theme: Theme }) => (
    <div className="animate-fadeIn">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          {theme.title}
        </h2>
        <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
          <p className="text-slate-500 dark:text-slate-400">
            Future character/graphic placeholder
          </p>
        </div>
        <p className="text-slate-600 dark:text-slate-300">
          Placeholder introduction text for {theme.title}. This will be replaced with actual content from the API.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 relative">
      <main className="pb-[30vh] p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Generational Handbook
          </h1>

          {selectedTheme ? (
            <IntroContent theme={selectedTheme} />
          ) : (
            <div className="text-center text-slate-600 dark:text-slate-400 py-12">
              Select a theme to see its introduction
            </div>
          )}
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 h-[30vh] bg-white dark:bg-slate-800 
                     shadow-lg border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto h-full p-4">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                {currentStep !== 'theme' && (
                  <button
                    onClick={handleBack}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 
                             dark:hover:text-white transition-colors"
                  >
                    ← Back
                  </button>
                )}
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {selectedTheme && currentStep !== 'theme' 
                    ? `${selectedTheme.title} > ${currentStep === 'subtheme' ? 'Select Subtheme' : ''}` 
                    : 'Select Theme'}
                </h2>
              </div>
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                ) : (
                  <MoonIcon className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                )}
              </button>
            </div>

            <div className="flex-1 overflow-auto">
              {currentStep === 'theme' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {handbookData.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => {
                        setSelectedTheme(theme)
                        setCurrentStep('subtheme')
                      }}
                      className="p-4 rounded-lg bg-slate-100 dark:bg-slate-700 
                               text-slate-700 dark:text-slate-200 
                               hover:bg-slate-200 dark:hover:bg-slate-600 
                               transition-colors text-left"
                    >
                      {theme.title}
                    </button>
                  ))}
                </div>
              )}

              {currentStep === 'subtheme' && selectedTheme && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedTheme.subThemes.map((subTheme) => (
                    <button
                      key={subTheme.id}
                      onClick={() => {
                        setSelectedSubTheme(subTheme)
                        setCurrentStep('generation')
                      }}
                      className="p-4 rounded-lg bg-slate-100 dark:bg-slate-700 
                               text-slate-700 dark:text-slate-200 
                               hover:bg-slate-200 dark:hover:bg-slate-600 
                               transition-colors text-left"
                    >
                      {subTheme.title}
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