export function Card({id, name, url, prices}){
    const tcgPrices = Object.entries(prices ?? {})

    const handleClick = () => {

    }

    return(
        <li className="card">
            <img src={url} alt={name} />

            <div className="card-div">
                <h3>
                    {name}
                </h3>
                
                <ul>
                    {tcgPrices.map(prices => {
                        const [key, value] = prices

                        return (
                            <li className="prices" key={key}>
                                <h3>
                                    {key} 
                                </h3>
                                <small>
                                    Lowest price: {value?.low}
                                </small>
                                <small>
                                    Average price: {value?.mid}
                                </small>
                                <small>
                                    Highest price: {value?.high}
                                </small>
                                <small>
                                    Average market price: {value?.market}
                                </small> 
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="card-buttons">
                <button onClick={handleClick}>
                    Add to binder
                </button>
                <button>
                    Wishlist
                </button>
            </div>
        </li>
    )
}