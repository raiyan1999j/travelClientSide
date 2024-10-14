import { useFormikContext } from "formik";
import { useState } from "react";
import { FaImage } from "react-icons/fa";

export default function RightSide(){
    const {submitForm,values} = useFormikContext();
    const [imgContainer,setImgContainer] = useState();
    const [fileContainer,setFileContainer] = useState();

    const imgHandler=(event)=>{
        const file = event.target.files[0];

        if(file){
            setImgContainer(URL.createObjectURL(file));
            setFileContainer(file);
        }
    }

    const addDetails=()=>{
        values.image = fileContainer;
        submitForm;
    }
    return(
        <>
            <section className="mt-[20%]">
            <div>
                <label htmlFor="image">
                <input type="file" id="image" className="hidden" accept="image/*" onChange={imgHandler} />
                <div className="h-[250px] w-full rounded-xl border border-gray-300 relative">
                {
                    imgContainer?
                    <div className="absolute h-full w-full top-0 left-0">
                    <img src={imgContainer} className="h-full w-full object-cover rounded-lg"/>
                    </div>
                    :null
                }
                    <div className={`w-full h-full flex flex-col justify-center items-center absolute ${imgContainer?"text-gray-500":"text-slate-900"}`}>
                        <span>
                            <FaImage className="text-2xl"/>
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
                    <button className="py-2 px-8 rounded-xl text-base tracking-[2px] capitalize text-black cursor-pointer border-[3px] border-black shadow-[1px_1px_0px_0px,_2px_2px_0px_0px,_3px_3px_0px_0px,_4px_4px_0px_0px,_5px_5px_0px_0px] hover:shadow-[0px_0px_0px_0px] hover:top-[5px] hover:left-[5px] relative" type="submit" onClick={()=>{addDetails()}}>Add</button>
                    <button className="py-2 px-8 rounded-xl text-base tracking-[2px] capitalize text-black cursor-pointer border-[3px] border-black shadow-[1px_1px_0px_0px,_2px_2px_0px_0px,_3px_3px_0px_0px,_4px_4px_0px_0px,_5px_5px_0px_0px] hover:shadow-[0px_0px_0px_0px] hover:top-[5px] hover:left-[5px] relative">Cancel</button>
                </div>
            </section>
        </>
    )
}