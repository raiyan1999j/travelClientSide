import { FaImage } from "react-icons/fa";

export default function RightSide(){
    return(
        <>
            <section className="mt-[20%]">
            <div>
                <label htmlFor="image">
                <input type="file" id="image" className="hidden" accept="image/*" />
                <div className="h-[250px] w-full rounded-xl border border-gray-300">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <span>
                            <FaImage className="text-2xl text-slate-900"/>
                        </span>
                        <div>
                            <h2 className="text-xl font-Helvetica font-medium capitalize">
                                choose your image
                            </h2>
                        </div>
                    </div>
                </div>
                </label>
                </div>

                <div className="flex flex-row justify-center gap-x-3 w-full mt-5">
                    <button className="py-2 px-8 rounded-xl text-base tracking-[2px] capitalize text-black cursor-pointer border-[3px] border-black shadow-[1px_1px_0px_0px,_2px_2px_0px_0px,_3px_3px_0px_0px,_4px_4px_0px_0px,_5px_5px_0px_0px] hover:shadow-[0px_0px_0px_0px] hover:top-[5px] hover:left-[5px] relative">Add</button>
                    <button className="py-2 px-8 rounded-xl text-base tracking-[2px] capitalize text-black cursor-pointer border-[3px] border-black shadow-[1px_1px_0px_0px,_2px_2px_0px_0px,_3px_3px_0px_0px,_4px_4px_0px_0px,_5px_5px_0px_0px] hover:shadow-[0px_0px_0px_0px] hover:top-[5px] hover:left-[5px] relative">Cancel</button>
                </div>
            </section>
        </>
    )
}