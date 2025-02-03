import { Filters } from "./Filters"
import { Sort } from "./Sort";

export function Header({ refreshCards }){

    const handleSubmit = (event) => {
        event.preventDefault()
        const fields = new FormData(event.target)
        const query = fields.get('query')
        refreshCards({search: query})
    }


    return(
        <header className='header'>
            <h1>
                Pokemon TCG Tracker - Keeping up with your collection made easy!
            </h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="query" placeholder='Charizard, Blastoise, Venusaur...'/>
                <input type="submit" value='Search'/>
            </form>

            <div className="accordion">
                <Sort/>
                <Filters/>
            </div>    
        </header>
    )
}