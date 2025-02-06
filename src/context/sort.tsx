import { createContext, useState } from "react";

export const SortContext = createContext()

export function SortProvider({children}:React.PropsWithChildren){
    //null should be a better state
    //work with text and not magic strings
    const [sort, setSort] = useState('')
    return(
        <SortContext.Provider value={{sort, setSort}}>
            {children}
        </SortContext.Provider>
    )
}