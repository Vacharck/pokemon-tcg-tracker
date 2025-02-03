import './App.css'
import { CardsList } from './components/CardsList'
import { Header } from './components/Header'
import { useCards } from './hooks/useCards'
import { useFilters } from './hooks/useFilters'
import { BinderProvider } from './context/binder'

function App() {
  const { cards, refreshCards } = useCards()
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts({cards})

  return (
    <>
      <Header refreshCards={refreshCards} />
      <div className="main-progress"/>
      <BinderProvider>
        <main>
          <CardsList cards={filteredProducts}/>
        </main>
      </BinderProvider>    
      
      <footer>

      </footer>
    </>
  )
}

export default App
