import { createContext, useState } from "react";

export const BinderContext = createContext()

export function BinderProvider({children}) {
    const [binder, setBinder] = useState([])

    return(
        <BinderContext.Provider value={{binder, setBinder}}>
            {children}
        </BinderContext.Provider>
    )
}