import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/Firebase";

export const InfoProvider = createContext(null);

export default function AuthProvider({children}){
    const [loading,setLoading] = useState(false);
    const [userInfo,setUserInfo]= useState(null);
    const [errorMessage,setError]= useState("");
    
    const createAccount=(value)=>{
        setLoading(true);
        createUserWithEmailAndPassword(auth,value.email,value.password)
        .then((credential)=>{
            updateProfile(auth.currentUser,{
                displayName:value.name
            }).then(()=>{
                setUserInfo(credential);
                setLoading(false)
            }) 
        })
    }
    const usualLogin=(value)=>{
        setLoading(true);

        signInWithEmailAndPassword(auth,value.email,value.password)
        .then((credential)=>{
            setUserInfo(credential.user);
            setLoading(false)
        }).catch((error)=>{
            setLoading(false);
            setError("Email or password mismatch")
        })
    }

    const googleLogin=()=>{
        setLoading(true)
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth,provider)
        .then((credential)=>{
            console.log(credential)
            setLoading(false)
        })
    }

    useEffect(()=>{
        setLoading(true);
        onAuthStateChanged(auth,(credential)=>{
            if(credential){
                setUserInfo(credential)
                setLoading(false)
                console.log(credential)
            }
        })
    },[])
    const info = {createAccount,googleLogin,usualLogin,userInfo,loading,errorMessage};
    return(
        <>
            <InfoProvider.Provider value={info}>
                {children}
            </InfoProvider.Provider>
        </>
    )
}