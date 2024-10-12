import GoogleImg from "../../../public/googleImg.png";
import { VscEyeClosed } from "react-icons/vsc";
import { RxEyeOpen } from "react-icons/rx";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import { InfoProvider } from "../../AuthProvider/AuthProvider";

const validate=(value)=>{
  const errors ={};
  const emailVerification = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passVerification = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if(!value.name){
    errors.name = "Required!"
  }else if(value.name.length < 3){
    errors.name = "Name should be at least 3 characters"
  }

  if(!value.email){
    errors.email = "Required!"
  }else if(!emailVerification.test(value.email)){
    errors.email = "Email is invalid"
  }

  if(!value.password){
    errors.password = "Required!"
  }else if(!passVerification.test(value.password)){
    errors.password = "Must contain at least one uppercase letter, one number, and one special character."
  }

  return errors;
}

export default function Signup({changeCondition}){
    const [txtPass,setTxtPass] = useState(false);
    const [fadeCondition,setFadeCondition] = useState(true);
    const {createAccount} = useContext(InfoProvider);

    const conditionChange=()=>{
        setFadeCondition(!fadeCondition);

        setTimeout(()=>{
            changeCondition(false)
        },250)
    }

    const formHandler=useFormik({
      initialValues:{
        name:"",
        email:"",
        password:""
      },
      validate,
      onSubmit:value=>{
        createAccount(value)
      }
    })
    return(
        <>
            <section className={`transition-all duration-200 ${fadeCondition?"opacity-100 ease-in":"opacity-0 ease-out"}`}>
            <div>
              <div className="w-[313.967px] py-[100px]">
                <div className="text-center">
                  <h2 className="text-[#030303] font-poppins text-[34px] font-medium leading-normal tracking-[1.02px] uppercase">
                    New account
                  </h2>
                  <p className="text-[#636364] font-poppins text-sm font-normal leading-normal tracking-[0.42px]">
                    Create a free account
                  </p>
                </div>
                <form onSubmit={formHandler.handleSubmit}>
                <div className="mt-[37.18px]">
                <div>
                    <label
                      htmlFor="name"
                      className="text-[#181818] font-poppins text-sm font-medium leading-normal tracking-[0.42px]"
                    >
                      Name
                    </label>
                    <div className="w-full h-[41.311px] mt-[6.2px]">
                      <input
                        type="text"
                        id="name"
                        className="h-full w-full border border-[#00000040] rounded-xl text-[#636364] font-poppins text-sm font-light leading-normal tracking-[0.42px] pl-4 placeholder:text-[#636364]"
                        placeholder="Enter your email"
                        {...formHandler.getFieldProps("name")}
                      />
                      {formHandler.touched.name && formHandler.errors.name?(
                      <p className="font-poppins text-sm font-light leading-normal text-rose-600">
                        {formHandler.errors.name}
                      </p>):null
                      }
                    </div>
                  </div>
                  <div className="mt-[21.69px]">
                    <label
                      htmlFor="email"
                      className="text-[#181818] font-poppins text-sm font-medium leading-normal tracking-[0.42px]"
                    >
                      Email
                    </label>
                    <div className="w-full h-[41.311px] mt-[6.2px]">
                      <input
                        type="email"
                        id="email"
                        className="h-full w-full border border-[#00000040] rounded-xl text-[#636364] font-poppins text-sm font-light leading-normal tracking-[0.42px] pl-4 placeholder:text-[#636364]"
                        placeholder="Enter your email"
                        {...formHandler.getFieldProps("email")}
                      />
                      {formHandler.touched.email && formHandler.errors.email?(
                      <p className="font-poppins text-sm font-light leading-normal text-rose-600">
                        {formHandler.errors.email}
                      </p>):null
                      }
                    </div>
                  </div>
                  <div className="mt-[21.69px]">
                    <div className="w-full flex flex-row justify-between items-center">
                      <label
                        htmlFor="password"
                        className="text-[#181818] font-poppins text-sm font-medium leading-normal tracking-[0.42px]"
                      >
                        Password
                      </label>
                      <span onClick={()=>{setTxtPass(!txtPass)}}>
                        {
                            txtPass?<RxEyeOpen />:<VscEyeClosed />
                        }
                      </span>
                    </div>
                    <div className="w-full h-[41.311px] mt-[6.2px]">
                      <input
                        type={txtPass?"text":"password"}
                        className="h-full w-full border border-[#00000040] rounded-xl text-[#636364] font-poppins text-sm font-light leading-normal tracking-[0.42px] pl-4 placeholder:text-[#636364]"
                        placeholder="Enter your password"
                        {...formHandler.getFieldProps("password")}
                      />
                      {formHandler.touched.password && formHandler.errors.password?(
                      <p className="font-poppins text-sm font-light leading-normal text-rose-600">
                        {formHandler.errors.password}
                      </p>):null
                      }
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-[11.36px] mt-[51.64px]">
                  <button className="h-[41.311px] w-[313.967px] rounded-xl border border-[#EA454C] transition-all duration-200 ease-in hover:bg-[#EA454C] hover:text-white text-sm font-medium leading-normal tracking-[0.42px] font-poppins text-[#636364]" type="submit">
                    Create
                  </button>
                  <button className="flex flex-row justify-center items-center h-[41.311px] w-[313.967px] text-[#000000] font-poppins text-sm font-medium leading-normal tracking-[0.42px] border border-[#00000040] rounded-xl transition-all ease-in duration-100 hover:bg-[#EA454C] hover:border-[#EA454C]">
                    <span className="h-[28.918px] w-[28.918px] mr-[6.2px] ">
                      <img
                        src={GoogleImg}
                        alt="google"
                        className="h-full w-full object-cover"
                      />
                    </span>
                    Sign up with Google
                  </button>
                </div>

                <div className="w-full text-center mt-[15.72px]">
                  <h5 className="text-[#595959] font-poppins text-[10px] font-medium leading-normal tracking-[0.3px]">
                    Already have an account?
                    <span className="text-[#EA454C] hover:underline" onClick={()=>{conditionChange()}}>
                      Go to login!
                    </span>
                  </h5>
                </div>
                </form>
              </div>
            </div>
            </section>
        </>
    )
}