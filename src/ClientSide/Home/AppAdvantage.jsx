import MobileView from '../../../public/mobileView.png';
import PlayStore from '../../../public/playStore.png';
import AppleStore from '../../../public/appleStore.png';

export default function AppAdvantage(){
    return(
        <>
            <section className="bg-appAdvantageImg bg-cover w-full mt-[153.06px]">
                <div className="w-[1230px] mx-auto pt-[83.43px]">
                    <div className="w-full flex flex-row justify-between">
                        <div className="h-[514.85px] w-[258.107px] overflow-hidden">
                            <img src={MobileView} alt="MobileView" className='h-full w-full object-fill' />
                        </div>
                        <div className='w-[854.548px]'>
                            <div>
                                <h2 className='text-white text-[53.137px] font-Helvetica font-bold leading-normal'>
                                Your all-in-one travel app.
                                </h2>
                                <p className='text-white text-[26.569px] font-Helvetica font-normal leading-normal mt-[26.57px]'>
                                Book flights, hotels, trains & rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!
                                </p>
                            </div>

                            <div className='flex flex-row gap-x-[55.59px] mt-[35.3px]'>
                                <div className='flex flex-row gap-x-[55.9px]'>
                                    <div>
                                        <div>
                                            <button className='text-white font-Helvetica text-[22.141px] font-normal leading-normal rounded-[17.71px] py-[8.86px] px-[17.71px] capitalize transition-all ease-in duration-200 hover:bg-[#ffffff66]'> 
                                                mobile
                                            </button>
                                            <button className='text-white font-Helvetica text-[22.141px] font-normal leading-normal rounded-[17.71px] py-[8.86px] px-[17.71px] capitalize transition-all ease-in duration-200 hover:bg-[#ffffff66]'>
                                                email
                                            </button>
                                        </div>
                                        <div className='mt-[17.71px]'>
                                            <h4 className='text-white text-[15.498px] font-Helvetica font-normal leading-normal'>
                                            Enter your phone number to receive a text with a link to download the app.
                                            </h4>
                                        </div>
                                        <div className='w-[511.447px] h-[64.281px] bg-[#ffffff66] rounded-[17.712px] py-[8.86px] px-[17.71px] flex flex-row justify-between mt-[17.71px]'>
                                            <div className='h-full w-[232.476px]'>
                                                <input type="text" className='w-full h-full bg-transparent text-white/70 text-[17.712px] font-Helvetica font-normal leading-normal placeholder:text-white/70' placeholder='Mobile number' />
                                            </div>
                                            <div className='w-[208.121px] h-[46.568px]'>
                                                <button className='h-full w-full rounded-[35.425px] bg-white flex justify-center items-center capitalize text-[#2659C3] text-[17.712px] font-Helvetica font-bold leading-normal'>
                                                    search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center before:content-"" before:w-[1.107px] before:h-[56.838px] before:bg-white/[0.2] before:mb-[17.712px] after:content-"" after:h-[56.838px] after:w-[1.107px] after:bg-white/[0.2] after:mt-[17.712px] text-[17.712px] font-normal leading-normal font-Helvetica text-white'>
                                        or
                                    </div>
                                </div>
                                <div className='flex flex-col gap-y-[30.12px]'>
                                    <div className='h-[67.358px] w-[224.526px]'>
                                        <img src={PlayStore} alt="playStore" className='h-full w-full object-cover'/>
                                    </div>
                                    <div className='h-[67.358px] w-[224.526px]'>
                                        <img src={AppleStore} alt="appleStore" className='h-full w-full object-cover' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}