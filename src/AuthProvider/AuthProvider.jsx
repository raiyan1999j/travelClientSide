import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react"
import auth from "../Firebase/Firebase";

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