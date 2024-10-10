import Offers1 from '../../../public/offers1.png';
import Offers2 from '../../../public/offers2.png';

export default function Offers(){
    return(
        <>
            <section className="mt-[79.71px]">
                <div className="ml-[132.84px] mb-[35.42px]">
                    <h2 className="text-black text-[35.425px] font-Helvetica font-bold leading-normal capitalize">
                        offers
                    </h2>
                </div>
                <div className="w-[1379.36px] ml-[132.84px] overflow-hidden">
                    <div className="w-full grid grid-cols-[repeat(2,761.637px)] gap-x-[26.57px]">
                        <div className="flex flex-row gap-x-[26.57px]">
                            <div className="w-[351.526px]">
                                <div className="w-full h-[234.35px]">
                                    <img src={Offers1} alt="offers1" className="h-full w-full object-cover rounded-xl" />
                                </div>
                            </div>
                            <div>
                                <h4 className=" text-black/50 capitalize font-netflix text-[17.712px] font-normal leading-normal">
                                    domestic flights
                                </h4>
                                <h2 className=" font-netflix font-medium leading-normal text-[26.569px] text-black mt-[4.43px] mb-[17.71px]">
                                Huge savings on flight with trxvl.
                                </h2>
                                <p className="text-black/50 text-[17.712px] font-netflix font-normal leading-normal mb-[17.71px]">
                                Book domestic flights starting @ just 1459BDT
                                </p>
                                <button className="w-[154.849px] h-[58.424px] rounded-[35.425px] bg-[#2659C3] flex justify-center items-center text-white font-normal text-[17.412px] leading-normal font-netflix capitalize">
                                    book now
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-[26.57px]">
                            <div className="w-[351.526px]">
                                <div className="w-full h-[234.35px]">
                                    <img src={Offers2} alt="offers1" className="h-full w-full object-cover rounded-xl" />
                                </div>
                            </div>
                            <div>
                                <h4 className=" text-black/50 capitalize font-netflix text-[17.712px] font-normal leading-normal">
                                International Hotels
                                </h4>
                                <h2 className=" font-netflix font-medium leading-normal text-[26.569px] text-black mt-[4.43px] mb-[17.71px]">
                                Enjoy upto 20% off on International Hotels
                                </h2>
                                <p className="text-black/50 text-[17.712px] font-netflix font-normal leading-normal mb-[17.71px]">
                                Make the most of  this deal on your first booking with trxvl.
                                </p>
                                <button className="w-[154.849px] h-[58.424px] rounded-[35.425px] bg-[#2659C3] flex justify-center items-center text-white font-normal text-[17.412px] leading-normal font-netflix capitalize">
                                    book now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}