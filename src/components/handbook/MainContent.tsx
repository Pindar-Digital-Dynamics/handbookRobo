// src/components/handbook/MainContent.tsx
import { Theme, SubTheme, Generation, Variant } from '@/data/handbook-data'

type FilterStep = 'theme' | 'subtheme' | 'generation' | 'variant'

interface MainContentProps {
 step: FilterStep
 selectedTheme: Theme | null
 selectedSubTheme: SubTheme | null
 selectedGeneration: Generation | null
 selectedVariant: Variant | null
}

export const MainContent = ({
 step,
 selectedTheme,
 selectedSubTheme,
 selectedGeneration,
 selectedVariant
}: MainContentProps) => {

 // Stato iniziale - nessuna selezione
 if (!selectedTheme) {
   return (
     <div className="text-center text-slate-600 dark:text-slate-400 py-12">
       <h2 className="text-xl font-semibold mb-4">Welcome to the Generational Handbook</h2>
       <p>Select a theme to begin exploring</p>
     </div>
   )
 }

 // Visualizzazione tema e sottotema
 if (step === 'theme' || step === 'subtheme') {
   return (
     <div className="animate-fadeIn">
       <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
         <div className="flex justify-between items-start mb-6">
           <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
             {selectedTheme.title}
           </h2>
         </div>
         
         <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg mb-6 flex items-center justify-center">
           <p className="text-slate-500 dark:text-slate-400">
             Theme visualization coming soon
           </p>
         </div>

         <div className="prose dark:prose-invert max-w-none">
           <p className="text-slate-600 dark:text-slate-300">
             {selectedTheme.introduction}
           </p>
         </div>
       </div>
     </div>
   )
 }

 // Visualizzazione generazione selezionata
 if (step === 'generation' && selectedSubTheme) {
   return (
     <div className="animate-fadeIn">
       <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
         <div className="flex flex-col mb-6">
           <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
             {selectedSubTheme.title}
           </h2>
           <div className="text-sm text-slate-500 dark:text-slate-400">
             Part of: {selectedTheme.title}
           </div>
         </div>

         <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg mb-6 flex items-center justify-center">
           <p className="text-slate-500 dark:text-slate-400">
             Subtheme visualization coming soon
           </p>
         </div>

         <div className="prose dark:prose-invert max-w-none">
           <p className="text-slate-600 dark:text-slate-300">
             Select a generation to explore specific approaches and methodologies.
           </p>
         </div>
       </div>
     </div>
   )
 }

 // Visualizzazione variante specifica per generazione
 if (step === 'variant' && selectedVariant && selectedGeneration) {
   return (
     <div className="animate-fadeIn">
       <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
         <div className="flex flex-col mb-6">
           <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
             {selectedVariant.title}
           </h2>
           <div className="flex items-center gap-3">
             <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-sm text-blue-800 dark:text-blue-100">
               {selectedGeneration.title}
             </span>
             <span className="text-sm text-slate-500 dark:text-slate-400">
               {selectedTheme.title} • {selectedSubTheme?.title}
             </span>
           </div>
         </div>

         <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg mb-6 flex items-center justify-center">
           <p className="text-slate-500 dark:text-slate-400">
             Generation-specific visualization coming soon
           </p>
         </div>

         <div className="prose dark:prose-invert max-w-none">
           <p className="text-slate-600 dark:text-slate-300 mb-4">
             {selectedVariant.description}
           </p>
           <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
             <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
               About this generation
             </h3>
             <p className="text-sm text-slate-600 dark:text-slate-300">
               {selectedGeneration.description}
             </p>
             <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
               Age range: {selectedGeneration.ageRange}
             </p>
           </div>
         </div>
       </div>
     </div>
   )
 }

 return null
}