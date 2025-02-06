import { CardT } from "../types";

export function Card( {id, name, url, prices, set} : CardT ):React.JSX.Element  {
    
    const tcgPrices = Object.entries(prices ?? {})

    const handleWishCollected = () => {
        return id
    }

    return(
        <li className="card">
            <div>
                <img className="card-img" src={url} alt={name} />
                <div className="buttons">
                    <button onClick={handleWishCollected}>
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
                
                <h4>
                    {set}
                </h4>

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