import {PaymentElement,useStripe,useElements} from "@stripe/react-stripe-js";
import { useMutation } from "@tanstack/react-query";
import { publicRoute } from "../../PublicRoute/PublicRoute";
import { useNavigate } from "react-router-dom";

export default function Checkout({amount,mail}){
    const stripe = useStripe();
  const elements= useElements();
  const navigate = useNavigate();

  const confirmation=useMutation({
    mutationFn:()=>{
        return publicRoute.post(`/confirmation?amount=${amount}&&mail=${mail}`).then((res)=>{
            if(res.status == 200){
                navigate("/home")
            }
        })
    }
  })

  const formHandler=async (event)=>{
    event.preventDefault();

    if(!stripe || !elements){
      return;
    }

    const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
        //   return_url: "http://localhost:5173/home",
        },
        redirect: "if_required"
      });

      if(error){
        console.log(error)
      }

      confirmation.mutate()
    
  };

  const paymentOptions = {
    layout: "tabs"
  }
    return(
        <>
            <form className="px-8 py-8" onSubmit={formHandler}>
        <PaymentElement options={paymentOptions}/>
        <div className="flex flex-row justify-end mt-8">
        
        <button className="paymentBtnText shadow-inner shadow-[#143120] bg-[#27ae60] px-2 rounded-lg transition-all duration-300 ease-linear hover:bg-[#47524c] hover:shadow-[#52c281]">
          Pay Fees
        </button>
        </div>
        
      </form>
        </>
    )
}