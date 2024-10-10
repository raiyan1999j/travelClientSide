import Beach from '../../../public/beach.png';
import Deserts from '../../../public/deserts.png';
import Mountains from '../../../public/mountains.png';
import Cities from '../../../public/cities.png';
import House from '../../../public/house.png';
import Country from '../../../public/country.png';
import Camping from '../../../public/camping.png';
import Castle from '../../../public/castle.png';
import skiing from '../../../public/skiing.png';
import Tropical from '../../../public/tropical.png';

export default function BannerCategory(){
    return(
        <>
            <div className="w-[1246.515px] mx-auto mt-[44.28px]">
                <h2 className='text-white font-Helvetica text-[35.425px] font-bold leading-normal'>
                    Top categories
                </h2>
            </div>
            <div className="w-[1246.515px] mx-auto mt-[35.39px]">
                <div className="w-full grid grid-cols-[repeat(10,86.348px)] gap-x-[45.46px]">
                    <div className='w-full flex flex-col items-center gap-y-[17.71px]'>
                        <div className='h-[35.425px] w-[35.425px]'>
                            <img src={Beach} alt="beach" className='h-full w-full object-cover' />
                        </div>
                        <div>
                            <h4 className='capitalize text-white/40 font-Helvetica text-[17.412px] font-normal leading-normal'>
                                beaches
                            </h4>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center gap-y-[17.71px]'>
                        <div className='h-[35.425px] w-[35.425px]'>
                            <img src={Deserts} alt="desert" className='h-full w-full object-cover' />
                        </div>
                        <div>
                            <h4 className='capitalize text-white/40 font-Helvetica text-[17.412px] font-normal leading-normal'>
                                Deserts
                            </h4>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center gap-y-[17.71px]'>
                        <div className='h-[35.425px] w-[35.425px]'>
                            <img src={Mountains} alt="Mountains" className='h-full w-full object-cover' />
                        </div>
                        <div>
                            <h4 className='capitalize text-white/40 font-Helvetica text-[17.412px] font-normal leading-normal'>
                                Mountains
                            </h4>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center gap-y-[17.71px]'>
                        <div className='h-[35.425px] w-[35.425px]'>
                            <img src={Cities} alt="Cities" className='h-full w-full object-cover' />
                        </div>
                        <div>
                            <h4 className='capitalize text-white/40 font-Helvetica text-[17.412px] font-normal leading-normal'>
                                Cities
                            </h4>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center gap-y-[17.71px]'>
                        <div className='h-[35.425px] w-[35.425px]'>
                            <img src={House} alt="House" className='h-full w-full object-cover' />
                        </div>
                        <div>
                            <h4 className='capitalize text-white/40 font-Helvetica text-[17.412px] font-normal leading-normal'>
                                House
                            </h4>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center gap-y-[17.71px]'>
                        <div className='h-[35.425px] w-[35.425px]'>
                            <img src={Country} alt="Country" className='h-full w-full object-cover' />
                        </div>
                        <div>
                            <h4 className='capitalize text-white/40 font-Helvetica text-[17.412px] font-normal leading-normal'>
                                Country
                            </h4>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center gap-y-[17.71px]'>
                        <div className='h-[35.425px] w-[35.425px]'>
                            <img src={Camping} alt="Camping" className='h-full w-full object-cover' />
                        </div>
                        <div>
                            <h4 className='capitalize text-white/40 font-Helvetica text-[17.412px] font-normal leading-normal'>
                                Camping
                            </h4>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center gap-y-[17.71px]'>
                        <div className='h-[35.425px] w-[35.425px]'>
                            <img src={Castle} alt="Castle" className='h-full w-full object-cover' />
                        </div>
                        <div>
                            <h4 className='capitalize text-white/40 font-Helvetica text-[17.412px] font-normal leading-normal'>
                                Castle
                            </h4>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center gap-y-[17.71px]'>
                        <div className='h-[35.425px] w-[35.425px]'>
                            <img src={skiing} alt="skiing" className='h-full w-full object-cover' />
                        </div>
                        <div>
                            <h4 className='capitalize text-white/40 font-Helvetica text-[17.412px] font-normal leading-normal'>
                                skiing
                            </h4>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center gap-y-[17.71px]'>
                        <div className='h-[35.425px] w-[35.425px]'>
                            <img src={Tropical} alt="Tropical" className='h-full w-full object-cover' />
                        </div>
                        <div>
                            <h4 className='capitalize text-white/40 font-Helvetica text-[17.412px] font-normal leading-normal'>
                                Tropical
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}