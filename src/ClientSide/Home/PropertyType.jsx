import Hotels from "../../../public/hotels.png";
import Apartments from "../../../public/apartments.png";
import Resorts from "../../../public/resorts.png";
import Villas from "../../../public/villas.png";

export default function PropertyType(){
    return(
        <>
            <section className="mt-[79.71px]">
                <div className="ml-[132.84px] mb-[35.42px]">
                    <h2 className="text-black font-Helvetica text-[35.425px] font-bold leading-normal">
                        Browse by property type
                    </h2>
                </div>

                <div className="w-[1372.72px] ml-[132.84px]">
                    <div className="w-full grid grid-cols-[repeat(4,343.179px)] gap-x-[26.57px]">
                        <div className="relative h-[221.406px] w-full">
                            <div className="absolute h-full w-full top-0 left-0 before:content-'' before:h-full before:w-full before:absolute before:bg-blurImg">
                                <img src={Hotels} alt="hotels" className="h-full w-full object-cover rounded-lg" />
                            </div>
                            <div className="absolute left-[26.57px] bottom-[25.78px]">
                                <p className="text-[26.569px] font-netflix text-white font-medium leading-normal capitalize">
                                    hotels
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[221.406px] w-full">
                            <div className="absolute h-full w-full top-0 left-0 before:content-'' before:h-full before:w-full before:absolute before:bg-blurImg">
                                <img src={Apartments} alt="Apartments" className="h-full w-full object-cover rounded-lg" />
                            </div>
                            <div className="absolute left-[26.57px] bottom-[25.78px]">
                                <p className="text-[26.569px] font-netflix text-white font-medium leading-normal capitalize">
                                    Apartments
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[221.406px] w-full">
                            <div className="absolute h-full w-full top-0 left-0 before:content-'' before:h-full before:w-full before:absolute before:bg-blurImg">
                                <img src={Resorts} alt="Resorts" className="h-full w-full object-cover rounded-lg" />
                            </div>
                            <div className="absolute left-[26.57px] bottom-[25.78px]">
                                <p className="text-[26.569px] font-netflix text-white font-medium leading-normal capitalize">
                                    Resorts
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[221.406px] w-full">
                            <div className="absolute h-full w-full top-0 left-0 before:content-'' before:h-full before:w-full before:absolute before:bg-blurImg">
                                <img src={Villas} alt="Villas" className="h-full w-full object-cover rounded-lg" />
                            </div>
                            <div className="absolute left-[26.57px] bottom-[25.78px]">
                                <p className="text-[26.569px] font-netflix text-white font-medium leading-normal capitalize">
                                    Villas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}