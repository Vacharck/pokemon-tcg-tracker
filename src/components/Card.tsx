export function Card({id, name, url, prices}){
    const tcgPrices = Object.entries(prices ?? {})

    return(
        <li className="card">
            <div>
                <img className="card-img" src={url} alt={name} />
                <div className="buttons">
                    <button>
                        wish
                    </button>
                    <button>
                        collected
                    </button>
                </div>   
            </div> 

            <div className="card-div">
                <h3>
                    {name}
                </h3>
                
                <ul>
                    {tcgPrices.map(prices => {
                        const [key, value] = prices

                        return (
                            <li className="prices" key={key}>
                                <h4>
                                    {key}:
                                </h4>
                                <small>
                                    Average price: ${value?.mid}
                                </small>
                                <small>
                                    Average market price: ${value?.market}
                                </small> 
                            </li>
                        )
                    })}
                </ul>
                 
            </div>
        </li>
    )
}