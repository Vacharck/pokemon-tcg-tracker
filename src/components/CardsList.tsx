import { Card } from "./Card.tsx"
import { useSort } from "../hooks/useSort.ts";

export function CardsList({ cards }){
  const {sortCards} = useSort()
  const sortedCards = sortCards({cards})

  return(
      <ul className="cards-list">
        {sortedCards.map(({id, name, url, prices}) => { 
          return (<Card 
                    key={id} 
                    id={id} 
                    name={name} 
                    url={url} 
                    prices={prices}/>) 
        })}
      </ul>
  )
}