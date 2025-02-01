import './App.css'
import { CardsList } from './components/CardsList'
import { Header } from './components/Header'
import { useCards } from './hooks/useCards'
import { useFilters } from './hooks/useFilters'
import { BinderProvider } from './context/binder'

import { useState } from 'react'

function App() {
  const { cards, refreshCards } = useCards()
  const { filterProducts } = useFilters()

  //sorting shouldn't be on the main app, move it elsewhere
  const [sort, setSort] = useState('')
  //useId for sorting select

  const filteredProducts = filterProducts({cards})

  const handleChange = (event) => {
    const value = event.target.value
    setSort(value)
  }

  return (
    <>
      <Header refreshCards={refreshCards}/>

      <section>
        <h3>
          Sort by
        </h3>
        <select name="sort" id="sort-select" onChange={handleChange}>
          <option value="">
            Sort by
          </option>
          <option value="ascending-alphabetical">
            A to Z
          </option>
          <option value="descending-alphabetical">
            Z to A
          </option>
          <option value="ascending-price">
            Lowest to highest
          </option>
          <option value="descending-price">
            Highest to lowest
          </option>
        </select>
      </section>

      <BinderProvider>
        <main>
          <CardsList sort={sort} cards={filteredProducts}/>
        </main>
      </BinderProvider>    
      
      <footer>

      </footer>
    </>
  )
}

export default App
