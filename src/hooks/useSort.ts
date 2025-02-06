import { useContext } from "react";
import { SortContext } from "../context/sort";
import { CardT } from "../types";

export function useSort(){
    const {sort, setSort} = useContext(SortContext)

    function handleChange(event:React.ChangeEvent<HTMLSelectElement>):void{
        const value = event.target.value
        setSort(value)
    }

    function sortCards({cards}:{cards:CardT[]}):CardT[]{
        if (sort === '') return cards
    
        if (sort === 'ascending-alphabetical'){
          return cards.toSorted((a:CardT, b:CardT) => a.name.localeCompare(b.name))
        }
    
        if(sort === 'descending-alphabetical'){
          return cards.toSorted((a: CardT, b:CardT) => b.name.localeCompare(a.name))
        }
    
        //Implement sorting by average marketplace and not by holofoil
        if (sort === 'ascending-price'){
          return cards.toSorted((a: CardT, b:CardT) => {
            const valueA = a.prices?.holofoil?.mid
                            ? a.prices?.holofoil?.mid
                            : 0
            const valueB = b.prices?.holofoil?.mid
                            ? b.prices?.holofoil?.mid
                            : 0
    
            return valueA - valueB
          })
        }
    
        if(sort === 'descending-price'){
          return cards.toSorted((a: CardT, b:CardT) => {
            const valueA = a.prices?.holofoil?.mid
                            ? a.prices?.holofoil?.mid
                            : 0
            const valueB = b.prices?.holofoil?.mid
                            ? b.prices?.holofoil?.mid
                            : 0
    
            return valueB - valueA
          })
        }

        return cards
      }

    return { handleChange, sortCards }
}