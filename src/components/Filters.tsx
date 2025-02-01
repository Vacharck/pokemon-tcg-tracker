import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters(){
    const {filters, setFilters} = useFilters()
    const minPriceId = useId()

    const handlePriceChange = (event) => {
        const value = event.target.value
        setFilters(prevState => ({...prevState, minPrice:value}))
    }

    return(
        <section>
            <h3>
                Filters
            </h3>
            <div>    
                <input id={minPriceId} type="range" min={0} max={100000} onChange={handlePriceChange}/>
                <label htmlFor={minPriceId}>
                    Price: ${filters.minPrice}
                </label>
            </div>
        </section>
    )
}