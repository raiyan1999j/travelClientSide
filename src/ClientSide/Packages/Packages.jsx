import { useQuery } from "@tanstack/react-query"
import { publicRoute } from "../../PublicRoute/PublicRoute"
import Spin from "../../Loader/Spin"
import PackageContainer from "./PackageContainer"
import UsualContainer from "./UsualContainer"

export default function Packages(){
    const {isPending:packagePending,isError:packageError,data:packageData} = useQuery({
        queryKey:["retrieveAllPackage"],
        queryFn:()=>{
            return publicRoute('/retrieveEvent?serviceTitle=packages')
            .then(res=>res.data)
        }
    })

    const {isPending:usualPending,isError:usualError,data:usualData} = useQuery({
        queryKey:["retrieveAllUsual"],
        queryFn:()=>{
            return publicRoute('retrieveEvent?serviceTitle=usual')
            .then(res=>res.data)
        }
    })

    return(
        <>
            <section className="mt-[-200px] mb-[200px]">
            <div className="w-[441px] ml-[132.84px] mb-[35.42px]">
                    <h2 className='capitalize text-[35.425px] font-Helvetica font-bold leading-normal text-white'>
                        All Packages
                    </h2>
                </div>
                <div className="max-w-[1372.72px] ml-[139.49px] overflow-hidden">
                    <div className="w-full flex flex-row gap-x-[26.57px]">
                        {
                            packagePending?
                            <div>
                                <Spin/>
                            </div>:
                            packageError?
                            <p>something went wrong</p>:
                            packageData.map((items,index)=>{
                                return <PackageContainer 
                                allInfo={items.objWrap}
                                key={index}/>
                            })
                        }
                    </div>
                </div>

                <div className="w-[441px] ml-[132.84px] mb-[35.42px] mt-10">
                    <h2 className='capitalize text-[35.425px] font-Helvetica font-bold leading-normal text-black'>
                        Usual service
                    </h2>
                </div>
                <div className="max-w-[1372.72px] ml-[139.49px] overflow-hidden">
                    <div className="w-full flex flex-row gap-x-[26.57px]">
                        {
                            usualPending?
                            <div>
                                <Spin/>
                            </div>:
                            usualError?
                            <p>something went wrong</p>:
                            usualData.map((items,index)=>{
                                return <UsualContainer 
                                allInfo={items.objWrap}
                                key={index}/>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}