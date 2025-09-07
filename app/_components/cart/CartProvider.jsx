'use client';

import { createContext, useContext, useState } from "react";

const Context = createContext();

function CartProvider({children}) {
    const [items,setItems] = useState([]);
    const [isDeletingId,setIsDeletingId] = useState('');
    return (
        <Context.Provider value={{items,setItems,setIsDeletingId,isDeletingId}}>
            {children}
        </Context.Provider>
    )
}
 
export function useCartContext(){
    return useContext(Context);
}

export default CartProvider
