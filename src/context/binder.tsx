import { createContext, useState } from "react";
import { CardT } from "../types";

export const BinderContext = createContext()

export function BinderProvider({children}:React.PropsWithChildren) {
    const [binder, setBinder] = useState<CardT[]>([])

    return(
        <BinderContext.Provider value={{binder, setBinder}}>
            {children}
        </BinderContext.Provider>
    )
}