import { createContext } from "react"

export const InfoProvider = createContext(null);

export default function AuthProvider({children}){
    const createAccount=(value)=>{
        console.log(value)
    }

    const info = {createAccount};
    return(
        <>
            <InfoProvider.Provider value={info}>
                {children}
            </InfoProvider.Provider>
        </>
    )
}