import { useContext, useEffect, useState } from "react"
import { InfoProvider } from "../../AuthProvider/AuthProvider";

export default function TopBar(){
    const {userInfo} = useContext(InfoProvider)
    const [latterContainer,setLatterContainer] = useState();

    useEffect(()=>{
        if(userInfo?.photoUrl == null){
            const firstLatter = userInfo.displayName[0];

            setLatterContainer(firstLatter)
        }
    },[])

    console.log(userInfo);
    return(
        <>
            <section className=" w-[80%] h-[100px] border border-[#b2bec3] border-t-0 border-r-0 border-l-0 float-left before:table before:content-'' after:table after:content-'' after:clear-both">
                <div className="w-full h-full flex flex-row items-center">
                    <div className="w-[80%] relative">
                        
                    </div>
                    <div className="w-[20%] flex justify-center">
                        <div className="h-[50px] w-[50px] rounded-full">
                            {
                                userInfo?.photoUrl?
                                <img src={userInfo.photoUrl}/>:
                                <span className="h-full w-full rounded-full bg-sky-400 text-white text-xl flex justify-center items-center">
                                    {latterContainer}
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}