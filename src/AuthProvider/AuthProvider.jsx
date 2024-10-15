import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/Firebase";
import { useMutation } from "@tanstack/react-query";
import { publicRoute } from "../PublicRoute/PublicRoute";

export const InfoProvider = createContext(null);

export default function AuthProvider({children}){
    const [loading,setLoading] = useState(false);
    const [userInfo,setUserInfo]= useState(null);
    const [errorMessage,setError]= useState("");
    const createUser = useMutation({
        mutationFn:(value)=>{
            const wrap = {
                email: value,
                author: "user"
            }
            return publicRoute.post('/createUser',wrap)
        }
    })
    
    const createAccount=(value)=>{
        setLoading(true);
        createUserWithEmailAndPassword(auth,value.email,value.password)
        .then((credential)=>{
            updateProfile(auth.currentUser,{
                displayName:value.name
            }).then(()=>{
                setUserInfo(credential);
                setLoading(false)
                createUser.mutate(credential.user.email);
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
            createUser.mutate(credential.user.email);
        })
    }

    const logOutUser=()=>{
        setLoading(true)
        signOut(auth)
        .then(()=>{
            setUserInfo(null)
            setLoading(false)
        })
    }
    useEffect(()=>{
        setLoading(true);
        onAuthStateChanged(auth,(credential)=>{
            if(credential){
                setUserInfo(credential)
                setLoading(false)
            }else{
                setLoading(false)
            }
        })
    },[])
    const info = {createAccount,googleLogin,usualLogin,logOutUser,userInfo,loading,errorMessage};
    return(
        <>
            <InfoProvider.Provider value={info}>
                {children}
            </InfoProvider.Provider>
        </>
    )
}