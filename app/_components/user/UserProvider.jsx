'use client';

import { getUser } from "@/actions/user";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

function UserProvider({children}) {
    const {data:user} = useQuery({
        queryKey:['user'],
        queryFn:getUser,
        refetchOnWindowFocus:false
    })
    return (
        <Context.Provider value={{user}}>
            {children}
        </Context.Provider>
    )
}
 
export function useUserContext(){
    return useContext(Context);
}

export default UserProvider
