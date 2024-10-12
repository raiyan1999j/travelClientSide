import LoginImg from "../../../public/loginImg.png";
import { useContext, useEffect, useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { InfoProvider } from "../../AuthProvider/AuthProvider";
import Spin from "../../Loader/Spin";
import { useNavigate } from "react-router-dom";

export default function LogInSignUp() {
    const [loginOrSignup,setLoginSignup] = useState(false);
    const {loading,userInfo} = useContext(InfoProvider);
    const navigate = useNavigate();

    useEffect(()=>{
      if(userInfo){
        navigate('/home')
      }
    },[userInfo])
  return (
    <>
      <section>
        <div className="w-[1080px] mx-auto">
        {
          loading?
          <div className="absolute translate-x-[24vw] translate-y-[13vw]">
            <Spin height={200} width={200}/>
          </div>:null
        }
          <div className={`w-full grid grid-cols-[521px_559px] ${loading?"opacity-50":"opacity-100"}`}>
            {
                loginOrSignup?
                <Signup changeCondition={(value)=>{setLoginSignup(value)}}/>:
                <Login changeCondition={(value)=>{setLoginSignup(value)}}/>
            }
            <div>
              <div>
                <img src={LoginImg} alt="loginImg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
