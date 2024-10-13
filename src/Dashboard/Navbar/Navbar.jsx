import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TopBar from "./Topbar";

export default function Navbar(){
    const navigate = useNavigate();
    return(
        <>
            <section className="w-[20%] h-screen fixed top-0 left-0 border border-[#b2bec3] border-t-0 border-b-0 border-l-0">
                <nav className="w-full px-4 mx-auto">
                    <div className="pt-8" onClick={()=>{navigate("/home")}}>
                        <h1 className="text-gray-700 font-Helvetica font-bold text-[35px] leading-normal">
                            trxvl.
                        </h1>
                    </div>

                    <div className="mt-10">
                        <button className="flex flex-row items-center bg-sky-400 py-2 px-3 rounded-lg text-white font-medium font-netflix transition-all duration-150 ease-in hover:bg-transparent hover:shadow-inner hover:shadow-sky-300 hover:text-gray-900" onClick={()=>{navigate("/dashboard/createService")}}>
                        <FaPlus className="mr-1"/>
                            Create new service
                        </button>
                    </div>

                    <div className="mt-12">
                        <ul className="text-gray-700 font-Helvetica text-[17.71px] font-normal leading-normal capitalize flex flex-col gap-y-[26.57px]">
                            <li>
                                home
                            </li>
                            <li>
                                Events 
                            </li>
                            <li>
                                Offers
                            </li>
                            <li>
                                Usual service
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
            
            <TopBar/>
        </>
    )
}