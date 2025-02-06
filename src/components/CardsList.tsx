import { Card } from "./Card.tsx"
import { useSort } from "../hooks/useSort.ts";
import { CardT } from "../types.ts";

export function CardsList( { cards } : { cards:CardT[]}   ):React.JSX.Element{
  const {sortCards} = useSort()
  const sortedCards = sortCards({cards})

  return(
      <ul className="cards-list">
        {sortedCards.map(({id, name, url, prices, set}:CardT) => { 
          return (<Card 
                    key={id} 
                    id={id} 
                    name={name} 
                    url={url} 
                    prices={prices}
                    set={set}/>) 
        })}
      </ul>
  )
}