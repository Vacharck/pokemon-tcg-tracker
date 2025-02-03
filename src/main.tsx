import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './context/filters'
import './index.css'
import App from './App.tsx'
import { SortProvider } from './context/sort.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FiltersProvider>
      <SortProvider>
        <App/>  
      </SortProvider>  
    </FiltersProvider>
  </StrictMode>,
)
