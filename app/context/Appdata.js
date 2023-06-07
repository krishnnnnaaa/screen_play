"use client"
import { createContext, useEffect, useState } from "react";
import { getData } from "../api/hello/route";

export const AppDataContext = createContext()

export function AppDataProvider({ children }) {
    const [data, setData] = useState([])   // defining global state for storing api data 
    const [userLogged, setUserLogged] = useState(false);   // defining global state to set wheather the user is logged or not

    useEffect(() => {
        getData().then(response => setData(response));  // setting api data 
      }, [])
    return (
        <AppDataContext.Provider value={{data, userLogged, setUserLogged}}>
            {children}
        </AppDataContext.Provider>
    )
}