import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters(){
    const {filters, setFilters} = useContext(FiltersContext)

    const filterProducts = ({cards}) => {
        return (cards)
    }

    return {filters, setFilters, filterProducts}
}