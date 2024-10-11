import LoginImg from "../../../public/loginImg.png";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

export default function LogInSignUp() {
    const [loginOrSignup,setLoginSignup] = useState(false);
  return (
    <>
      <section>
        <div className="w-[1080px] mx-auto">
          <div className="w-full grid grid-cols-[521px_559px]">
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
