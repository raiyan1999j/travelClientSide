import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import Transport from '../../../public/transport.png';
import Hotel from '../../../public/hotelIcon.png';
import Persons from '../../../public/persons.png';
import { useNavigate } from "react-router-dom";

export default function UsualContainer({allInfo}){
    const [imageContainer,setImgContainer] = useState();
    const navigate = useNavigate();
    const {from,to,description,perSeat,image} = allInfo;

    useEffect(()=>{
        const storage = getStorage();

        getDownloadURL(ref(storage,`/image/${image}`))
        .then((url)=>{setImgContainer(url)})
    },[])
    return(
        <>
            <div className="w-[378.603px] rounded-lg p-[17.71px] bg-white shadow-md shadow-black/50" onClick={()=>{navigate("/payment",{state:perSeat})}}>
                <div className="h-[221.405px] w-[346.633px] rounded-lg mb-[26.57px]">
                    <img src={imageContainer} alt="" className="h-full w-full object-cover rounded-xl" />
                </div>

                <div>
                    <p className="text-black text-[20px] font-netflix font-normal leading-normal capitalize mb-[26.57px]">
                        {from} - {to}
                    </p>

                    <div className="mb-[26.57px]">
                        <p className="text-[17.712px] text-black/50 font-netflix leading-normal font-normal capitalize">
                            {description}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-black/50 text-[15.284px] font-normal leading-normal capitalize mb-[26.57px]">per person</h4>
                        <h2 className="text-black text-[26.569px] font-bold leading-normal">
                            {perSeat} tk
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}