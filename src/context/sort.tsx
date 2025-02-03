import { createContext, useState } from "react";

export const SortContext = createContext()

export function SortProvider({children}){
    const [sort, setSort] = useState('')
    return(
        <SortContext.Provider value={{sort, setSort}}>
            {children}
        </SortContext.Provider>
    )
}