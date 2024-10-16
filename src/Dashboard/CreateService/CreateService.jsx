import { useNavigate } from "react-router-dom"

export default function CreateService(){
    const navigate = useNavigate();
    return(
        <>
        <section className="float-right w-[80%] h-screen">
            <div className="text-center mt-8">
                <h2 className="header text-7xl font-Helvetica">
                    Select your option to create service
                </h2>
            </div>
            <div className="w-full flex flex-row gap-x-8 mt-20 justify-center bg-[#e8e8e8]/30">
                <div>
                    <button className="text-[#242424] bg-[#f0f0f0] py-3 px-4 font-semibold font-Helvetica text-xl rounded-xl shadow-[inset_0_0.0625em_0_0_#f4f4f4,_0_0.0625em_0_0_#efefef,_0_0.125em_0_0_#ececec,_0_0.25em_0_0_#e0e0e0,_0_0.3125em_0_0_#dedede,_0_0.375em_0_0_#dcdcdc,_0_0.425em_0_0_#cacaca,_0_0.425em_0.5em_0_#cecece] hover:translate-x-0 hover:translate-y-[3.6px] hover:shadow-[inset_0_0.03em_0_0_#f4f4f4,_0_0.03em_0_0_#efefef,_0_0.0625em_0_0_#ececec,_0_0.125em_0_0_#e0e0e0,_0_0.125em_0_0_#dedede,_0_0.2em_0_0_#dcdcdc,_0_0.225em_0_0_#cacaca,_0_0.225em_0.375em_0_#cecece] transition-all duration-150 ease-in" onClick={()=>{navigate('/dashboard/createEvent')}}>
                    
                        Event create
                    </button>
                </div>
                <div>
                    <button className="text-[#242424] bg-[#f0f0f0] py-3 px-4 font-semibold font-Helvetica text-xl rounded-xl shadow-[inset_0_0.0625em_0_0_#f4f4f4,_0_0.0625em_0_0_#efefef,_0_0.125em_0_0_#ececec,_0_0.25em_0_0_#e0e0e0,_0_0.3125em_0_0_#dedede,_0_0.375em_0_0_#dcdcdc,_0_0.425em_0_0_#cacaca,_0_0.425em_0.5em_0_#cecece] hover:translate-x-0 hover:translate-y-[3.6px] hover:shadow-[inset_0_0.03em_0_0_#f4f4f4,_0_0.03em_0_0_#efefef,_0_0.0625em_0_0_#ececec,_0_0.125em_0_0_#e0e0e0,_0_0.125em_0_0_#dedede,_0_0.2em_0_0_#dcdcdc,_0_0.225em_0_0_#cacaca,_0_0.225em_0.375em_0_#cecece] transition-all duration-150 ease-in" onClick={()=>{navigate('/dashboard/createOffers')}}>
                        Offers create
                    </button>
                </div>
                <div>
                    <button className="text-[#242424] bg-[#f0f0f0] py-3 px-4 font-semibold font-Helvetica text-xl rounded-xl shadow-[inset_0_0.0625em_0_0_#f4f4f4,_0_0.0625em_0_0_#efefef,_0_0.125em_0_0_#ececec,_0_0.25em_0_0_#e0e0e0,_0_0.3125em_0_0_#dedede,_0_0.375em_0_0_#dcdcdc,_0_0.425em_0_0_#cacaca,_0_0.425em_0.5em_0_#cecece] hover:translate-x-0 hover:translate-y-[3.6px] hover:shadow-[inset_0_0.03em_0_0_#f4f4f4,_0_0.03em_0_0_#efefef,_0_0.0625em_0_0_#ececec,_0_0.125em_0_0_#e0e0e0,_0_0.125em_0_0_#dedede,_0_0.2em_0_0_#dcdcdc,_0_0.225em_0_0_#cacaca,_0_0.225em_0.375em_0_#cecece] transition-all duration-150 ease-in" onClick={()=>{navigate('/dashboard/createUsual')}}>
                        Usual service
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}