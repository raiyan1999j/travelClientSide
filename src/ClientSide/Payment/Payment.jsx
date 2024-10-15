import {loadStripe} from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';
import Checkout from "./Checkout";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { InfoProvider } from "../../AuthProvider/AuthProvider";
import Spin from "../../Loader/Spin";
import { useMutation } from "@tanstack/react-query";
import { publicRoute } from "../../PublicRoute/PublicRoute";

const stripePromise = loadStripe(import.meta.env.VITE_PUBSTRIPE)

export default function Payment(){
    const [clientSecret,setClient] = useState("");
    const location = useLocation();
    const {userInfo} = useContext(InfoProvider);

    const clientPayment = useMutation({
        mutationFn:(value)=>{
            return publicRoute.post(`/clientPayment`,value)
            .then(res=>setClient(res.data.clientSecret))
        }
    })
    useEffect(()=>{
        let wrap;
        if(location){
            wrap = {
                amount : parseInt(location?.state),
            }
        }
        clientPayment.mutate(wrap)
    },[location])

    const appearance = {
        theme: 'stripe'
    }
    const option ={
        clientSecret,
        appearance
    }
    return(
        <>
        <section>
        {
                        clientSecret?
                        <Elements stripe={stripePromise} options={option}>
                            <Checkout
                                amount={location?.state}
                                mail={userInfo?.email}
                            />
                        </Elements>:
                        <div className="flex w-full h-[300px] justify-center items-center">
                            <Spin/>
                        </div>
                    }
        </section>
        </>
    )
}