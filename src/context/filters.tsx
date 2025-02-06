import { createContext, useState } from "react";
import { FiltersT } from "../types";

export const FiltersContext = createContext<FiltersT | null>(null)

export function FiltersProvider({children}:React.PropsWithChildren){
    const [filters, setFilters] = useState({minPrice: 0})

    return(
        <FiltersContext.Provider value={{filters, setFilters}}>
            {children}
        </FiltersContext.Provider>
    )
}