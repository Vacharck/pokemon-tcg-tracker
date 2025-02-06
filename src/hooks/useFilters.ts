import { useContext } from "react";
import { FiltersContext } from "../context/filters";
import { CardT } from "../types";

export function useFilters(){
    const {filters, setFilters} = useContext(FiltersContext)

    const filterProducts = ({cards}:{cards:CardT[]}) => {
        return (cards)
    }

    return {filters, setFilters, filterProducts}
}