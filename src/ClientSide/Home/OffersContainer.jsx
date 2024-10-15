import { useEffect, useState } from "react";
import {getDownloadURL, getStorage, ref} from "firebase/storage";

export default function OffersContainer({allInfo}){
    const [imgContainer,setImgContainer] = useState();
    const {addCoupon,description,image,place,title} = allInfo;

    useEffect(()=>{
        const storage = getStorage();

        getDownloadURL(ref(storage,`image/${image}`))
        .then((url)=>{
            setImgContainer(url);
        })
    },[])
    return(
        <>
            <div className="flex flex-row gap-x-[26.57px]">
                            <div className="w-[351.526px]">
                                <div className="w-full h-[234.35px]">
                                    <img src={imgContainer} alt="offers1" className="h-full w-full object-cover rounded-xl" />
                                </div>
                            </div>
                            <div>
                                <h4 className=" text-black/50 capitalize font-netflix text-[17.712px] font-normal leading-normal">
                                    {title}
                                </h4>
                                <h2 className=" font-netflix font-medium leading-normal text-[26.569px] text-black mt-[4.43px] mb-[17.71px]">
                                {place}
                                </h2>
                                <p className="text-black/50 text-[17.712px] font-netflix font-normal leading-normal mb-[17.71px]">
                                {description}
                                
                                </p>
                                <p className=" opacity-50">{addCoupon}</p>
                                <button className="w-[154.849px] h-[58.424px] rounded-[35.425px] bg-[#2659C3] flex justify-center items-center text-white font-normal text-[17.412px] leading-normal font-netflix capitalize">
                                    book now
                                </button>
                            </div>
                        </div>
        </>
    )
}