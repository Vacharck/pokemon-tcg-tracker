import { Filters } from "./Filters"

export function Header({ refreshCards }){

    const handleSubmit = (event) => {
        event.preventDefault()
        const fields = new FormData(event.target)
        const query = fields.get('query')
        refreshCards({search: query})
    }

    return(
        <header className=''>
            <h1>
                Pokemon TCG Tracker
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" placeholder='Charizard, Blastoise, Venusaur...'/>
                <input type="submit" value='Search'/>
            </form>

            <Filters/>
        </header>
    )
}