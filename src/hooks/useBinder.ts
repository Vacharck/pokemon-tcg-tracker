import { useContext } from 'react'
import { BinderContext } from '../context/binder'

export function useBinder(){
    const {binder, setBinder} = useContext(BinderContext)
    
    const addToBinder = ({id, title}) => {const newBinder = structuredClone(binder)}

    return {binder, addToBinder}
}