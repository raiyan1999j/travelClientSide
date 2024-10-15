import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import Transport from '../../../public/transport.png';
import Hotel from '../../../public/hotelIcon.png';
import Persons from '../../../public/persons.png';
import { useNavigate } from "react-router-dom";

export default function PackageContainer({allInfo}){
    const [imageContainer,setImgContainer] = useState();
    const navigate = useNavigate();
    const {from,to,hotel,stayDay,stayNight,transport,person,description,totalPrice,image} = allInfo;

    useEffect(()=>{
        const storage = getStorage();

        getDownloadURL(ref(storage,`/image/${image}`))
        .then((url)=>{setImgContainer(url)})
    },[])
    return(
        <>
            <div className="w-[378.603px] rounded-lg p-[17.71px] bg-white shadow-md shadow-black/50" onClick={()=>{navigate("/payment",{state:totalPrice})}}>
                <div className="h-[221.405px] w-[346.633px] rounded-lg mb-[26.57px]">
                    <img src={imageContainer} alt="" className="h-full w-full object-cover rounded-xl" />
                </div>

                <div>
                    <h2 className="text-black text-[26.569px] font-netflix font-normal leading-normal capitalize mb-[26.57px]">
                        {hotel}
                    </h2>
                    <p className="text-black text-[20px] font-netflix font-normal leading-normal capitalize mb-[26.57px]">
                        {from} - {to}
                    </p>
                    <p className="text-black/50 text-[17.512px] font-netflix font-normal leading-normal capitalize mb-[26.57px]">
                        {stayDay} days {stayNight} nights
                    </p>

                    <div className="flex flex-row justify-between mb-[26.57px]">
                        <div className="w-[66.421px] flex flex-col items-center justify-center gap-y-[8.86px]">
                            <div className="h-[26.558px] w-[26.558px]">
                                <img src={Hotel} alt="hotel" className="h-full w-full object-cover"/>
                            </div>
                            <p className="text-black/50 text-[13.284px] font-normal leading-normal capitalize">
                                1 hotel
                            </p>
                        </div>
                        <div className="w-[66.421px] flex flex-col items-center justify-center gap-y-[8.86px]">
                            <div className="h-[26.558px] w-[26.558px]">
                                <img src={Transport} alt="transport" />
                            </div>
                            <div>
                            <p className="text-black/50 text-[13.284px] font-normal leading-normal capitalize">
                                {transport} transfers
                            </p>
                            </div>
                            
                        </div>
                        <div className="w-[66.421px] flex flex-col items-center justify-center gap-y-[8.86px]">
                            <div className="h-[26.558px] w-[26.558px]">
                                <img src={Persons} alt="" />
                            </div>
                            <p className="text-black/50 text-[13.284px] font-normal leading-normal capitalize">
                                {person} person
                            </p>
                        </div>
                    </div>

                    <div className="mb-[26.57px]">
                        <p className="text-[17.712px] text-black/50 font-netflix leading-normal font-normal capitalize">
                            {description}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-black/50 text-[15.284px] font-normal leading-normal capitalize mb-[26.57px]">total amount</h4>
                        <h2 className="text-black text-[26.569px] font-bold leading-normal">
                            {totalPrice}
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}