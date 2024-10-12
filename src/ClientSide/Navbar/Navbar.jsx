import { NavLink, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import { useContext, useState } from "react";
import { InfoProvider } from "../../AuthProvider/AuthProvider";
import Spin from "../../Loader/Spin";
import { useQuery } from "@tanstack/react-query";
import { publicRoute } from "../../PublicRoute/PublicRoute";
import Dots from "../../Loader/Dots";

export default function Navbar() {
  const { loading, userInfo,logOutUser } = useContext(InfoProvider);
  const navigate = useNavigate();
  const {isPending,isError,data} = useQuery({
    queryKey:["userAuth",userInfo],
    queryFn:()=>{
      return publicRoute(`/userAuthority?email=${userInfo.email}`)
      .then(res=>res.data.author)
    }
  })
  
  return (
    <>
      {loading ? (
        <div className="absolute top-[50%] left-[50%]">
          <Spin height={100} width={100} />
        </div>
      ) : null}
      <section
        className={`w-full bg-bannerImg bg-cover bg-no-repeat pt-[26.57px] pb-[300px] ${
          loading ? " animate-pulse opacity-30" : " animate-none"
        }`}
      >
        <div className="max-w-[1408.141px] h-[41px] mx-auto">
          <nav className="h-full w-full flex flex-row items-center mx-auto">
            <div>
              <h1 className="text-white font-Helvetica font-bold text-[35.42px] leading-normal">
                trxvl.
              </h1>
            </div>
            <div className="ml-auto">
              <ul className="text-white font-Helvetica text-[17.71px] font-normal leading-normal capitalize flex flex-row gap-x-[26.57px]">
                <li>
                    <NavLink to="/home">
                        Home
                    </NavLink>
                </li>
                <li>stays</li>
                <li>flight</li>
                <li>packages</li>
                <li>
                  {
                    isPending?
                    <div>
                      <Dots height={30} width={30} color={"#34495e"}/>
                    </div>:
                    data?
                    <div className="relative group">
                      {data}

                      <div className="absolute w-[100px] hidden group-hover:block">
                        {
                          data=="user"?null:
                          <button className="py-3 px-2 shadow-inner shadow-gray-900 rounded-xl hover:bg-gray-900 hover:scale-110 capitalize" onClick={()=>{navigate("/dashboard")}}>
                            Dashboard
                          </button>
                        }
                        <button className="py-3 px-2 shadow-inner shadow-gray-900 rounded-xl hover:bg-gray-900 hover:scale-105 mt-2" onClick={()=>{logOutUser()}}>
                          Log out
                        </button>
                      </div>
                    </div>:
                    <NavLink to="/signup">
                      Sign up
                    </NavLink>
                  }
                </li>
              </ul>
            </div>
          </nav>
          
        </div>

        <Banner />
      </section>
    </>
  );
}
