'use client'

import { useState } from 'react'
import { useTheme } from '@/components/providers/theme-provider'
import { SunIcon, MoonIcon } from 'lucide-react'
import { handbookData, Theme, SubTheme, Generation, generations, variants, Variant } from '@/data/handbook-data'
import { MainContent } from '@/components/handbook/MainContent'

type FilterStep = 'theme' | 'subtheme' | 'generation' | 'variant'

export default function HandbookNavigator() {
  const { theme, toggleTheme } = useTheme()
  const [currentStep, setCurrentStep] = useState<FilterStep>('theme')
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null)
  const [selectedSubTheme, setSelectedSubTheme] = useState<SubTheme | null>(null)
  const [selectedGeneration, setSelectedGeneration] = useState<Generation | null>(null)
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null)
  

  const steps = ['theme', 'subtheme', 'generation', 'variant'] as const
  const currentStepIndex = steps.indexOf(currentStep)

  const handleBack = () => {
    switch (currentStep) {
      case 'subtheme':
        setCurrentStep('theme')
        setSelectedTheme(null)
        setSelectedSubTheme(null)
        setSelectedGeneration(null)
        setSelectedVariant(null)
        break
      case 'generation':
        setCurrentStep('subtheme')
        setSelectedSubTheme(null)
        setSelectedGeneration(null)
        setSelectedVariant(null)
        break
      case 'variant':
        setCurrentStep('generation')
        setSelectedGeneration(null)
       setSelectedVariant(null)

        break
    }
  }

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
          {theme.introduction}
        </p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 relative">
      <main className="pb-[50vh] p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Generational Handbook
        </h1>

        <MainContent
          step={currentStep}
          selectedTheme={selectedTheme}
          selectedSubTheme={selectedSubTheme}
          selectedGeneration={selectedGeneration}
          selectedVariant={selectedVariant}
        />
      </div>
    </main>

      <nav className="fixed bottom-0 left-0 right-0 h-[30vh] bg-white dark:bg-slate-800 
                   shadow-lg border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto h-full flex flex-col">
          {/* Header statico */}
          <div className="flex-none p-4">
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
                    ? `${selectedTheme.title} > 
                       ${currentStep === 'subtheme' ? 'Select Subtheme' : 
                         currentStep === 'generation' ? `${selectedSubTheme?.title} > Select Generation` : 
                         currentStep === 'variant' ? `${selectedGeneration?.title} > Select Variant` : ''}`
                    : 'Select Theme'}
                </h2>
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="hidden md:flex p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                ) : (
                  <MoonIcon className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                )}
              </button>
            </div>
            

            <h3 className="hidden md:block text-lg font-medium text-slate-900 dark:text-white mb-4">
              Filter Handbook Content
            </h3>

            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-4 px-2">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center w-full">
                  <div 
                    className={`
                      w-6 h-6 rounded-full // da w-8 h-8
                      flex items-center justify-center 
                      ${index <= currentStepIndex 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}
                      transition-colors duration-300
                      text-sm // aggiunto per rendere i numeri più piccoli
                    `}
                  >
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 mx-2 h-1 rounded">
                      <div 
                        className={`
                          h-full rounded transition-all duration-300
                          ${index < currentStepIndex 
                            ? 'bg-blue-500' 
                            : 'bg-slate-200 dark:bg-slate-700'}
                        `}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
{/* Floating button per mobile */}
<button 
  type="button"
  onClick={toggleTheme}
  className="md:hidden fixed right-0 bottom-0 z-50 p-8 
             bg-white dark:bg-slate-800 
             shadow-lg
             hover:bg-slate-100 dark:hover:bg-slate-700
             transition-colors
             rounded-tl-lg" // solo l'angolo in alto a sinistra arrotondato
  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {theme === 'dark' ? (
    <SunIcon className="w-5 h-5 text-slate-700 dark:text-slate-200" />
  ) : (
    <MoonIcon className="w-5 h-5 text-slate-700 dark:text-slate-200" />
  )}
</button>

          {/* Contenuto scrollabile */}
          <div className="flex-1 overflow-y-auto p-4 pt-0">
            <div className="h-full">
              {currentStep === 'theme' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {handbookData.map((theme) => (
                    <button
                    type="button"
                      key={theme.id}
                      onClick={() => {
                        setSelectedTheme(theme)
                        setCurrentStep('subtheme')
                      }}
                      className="p-3 rounded-lg bg-slate-100 dark:bg-slate-700 
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
                    type="button"
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

              {currentStep === 'generation' && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {generations.map((generation) => (
                    <button
                    type="button"
                      key={generation.id}
                      onClick={() => {
                        setSelectedGeneration(generation)
                        setCurrentStep('variant')
                      }}
                      className="p-4 rounded-lg bg-slate-100 dark:bg-slate-700 
                               text-slate-700 dark:text-slate-200 
                               hover:bg-slate-200 dark:hover:bg-slate-600 
                               transition-colors"
                    >
                      <h3 className="font-bold mb-1">{generation.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                        Age: {generation.ageRange}
                      </p>
                      <p className="text-sm">
                        {generation.description}
                      </p>
                    </button>
                  ))}
                </div>
              )}

{currentStep === 'variant' && (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {variants
      .filter(variant => 
        variant.generationId === selectedGeneration.id && 
        variant.subThemeId === selectedSubTheme.id
      ).length === 0 ? (
        <div className="col-span-full flex flex-col items-center justify-center p-8 text-center">
          <p className="text-slate-500 dark:text-slate-400 mb-2">
            No variants available yet for:
          </p>
          <p className="text-slate-700 dark:text-slate-300 font-medium">
            {selectedSubTheme.title} × {selectedGeneration.title}
          </p>
        </div>
      ) : (
        variants
          .filter(variant => 
            variant.generationId === selectedGeneration.id && 
            variant.subThemeId === selectedSubTheme.id
          )
          .map((variant) => (
            <button
              type="button"
              key={variant.id}
              onClick={() => {
                setSelectedVariant(variant)  // Aggiungiamo questo
                console.log('Selected variant:', {
                  theme: selectedTheme.title,
                  subtheme: selectedSubTheme.title,
                  generation: selectedGeneration.title,
                  variant: variant.title
                })
              }}
             className={`
               p-4 rounded-lg text-left
               transition-all duration-300
               ${variant.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900' : ''}
               ${variant.color === 'green' ? 'bg-green-100 dark:bg-green-900' : ''}
               hover:scale-105
             `}
           >
             <h3 className="font-bold mb-2 text-slate-900 dark:text-white">
               {variant.title}
             </h3>
             <p className="text-sm text-slate-600 dark:text-slate-300">
               {variant.description}
             </p>
           </button>
         ))
   )}
 </div>
)}
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}