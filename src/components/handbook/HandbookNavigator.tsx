'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/components/providers/theme-provider'
import { SunIcon, MoonIcon } from 'lucide-react'

// Definiamo l'interfaccia per i filtri attivi
interface HandbookFilter {
 theme?: string
 generation?: string
 subtheme?: string
}

export default function HandbookNavigator() {
 // Inizializziamo i filtri recuperandoli dal localStorage se esistono
 const [filters, setFilters] = useState<HandbookFilter>(() => {
   if (typeof window !== 'undefined') {
     return JSON.parse(localStorage.getItem('handbook-filters') || '{}')
   }
   return {}
 })

 // Hook per gestire il tema dall'app-level provider
 const { theme, toggleTheme } = useTheme()

 // Salva i filtri nel localStorage quando cambiano
 useEffect(() => {
   localStorage.setItem('handbook-filters', JSON.stringify(filters))
 }, [filters])

 return (
   // Container principale con sfondo responsive al tema
   <div className="min-h-screen bg-slate-50 dark:bg-slate-900 relative">
     {/* Area contenuti principale con padding-bottom per il menu fisso */}
     <main className="pb-24 p-4 md:p-6">
       <div className="max-w-7xl mx-auto">
         <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
           Generational Handbook
         </h1>
         
         {/* Grid responsiva per le cards dei contenuti */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* Cards verranno inserite qui */}
         </div>
       </div>
     </main>

     {/* Menu fisso in basso stile gaming UI */}
     <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 shadow-lg border-t border-slate-200 dark:border-slate-700">
       <div className="max-w-7xl mx-auto px-4">
         {/* Container flex per allineare filtri e toggle tema */}
         <div className="h-20 flex items-center justify-between">
           {/* Area filtri scrollabile orizzontalmente */}
           <div className="flex space-x-4 overflow-x-auto pb-2 flex-grow">
             {/* Bottoni filtro con stile gaming */}
             <button className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-700 
                              text-slate-700 dark:text-slate-200 
                              hover:bg-slate-200 dark:hover:bg-slate-600 
                              transition-colors whitespace-nowrap">
               Themes
             </button>
             <button className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-700 
                              text-slate-700 dark:text-slate-200 
                              hover:bg-slate-200 dark:hover:bg-slate-600 
                              transition-colors whitespace-nowrap">
               Generations
             </button>
             <button className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-700 
                              text-slate-700 dark:text-slate-200 
                              hover:bg-slate-200 dark:hover:bg-slate-600 
                              transition-colors whitespace-nowrap">
               Subthemes
             </button>
           </div>

           {/* Toggle tema dark/light */}
           <button 
             onClick={toggleTheme}
             className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 ml-4"
             aria-label={theme === 'dark' ? 'Attiva tema chiaro' : 'Attiva tema scuro'}
           >
             {theme === 'dark' ? (
               <SunIcon className="w-6 h-6 text-slate-700 dark:text-slate-200" />
             ) : (
               <MoonIcon className="w-6 h-6 text-slate-700 dark:text-slate-200" />
             )}
           </button>
         </div>
       </div>
     </nav>
   </div>
 )
}