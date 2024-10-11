import Facebook from '../../../public/facebook.png';
import Instagram from '../../../public/instagram.png';
import Twitter from '../../../public/twitter.png';
import Youtube from '../../../public/youtube.png';

export default function Footer(){
    return(
        <>
        <section className="bg-[#141414]">
            <div className="w-[1246.51px] mx-auto">
                <div className="w-full flex flex-row pt-[48.13px] pb-[45.99px]">
                    <div className="mr-[138.37px]">
                        <h2 className="text-white font-Helvetica text-[35.425px] font-bold leading-normal">
                        Trxvl.
                        </h2>
                    </div>

                    <div className="flex flex-col w-[1015.15px]">
                        <div className="flex flex-row justify-between w-full">
                        <div>
                            <ul className="text-[#808080] text-[14.391px] font-netflix font-normal leading-normal flex flex-col gap-y-[16.61px]">
                                <li>
                                Seslendirme ve Alt Jazz
                                </li>
                                <li>
                                Media Market
                                </li>
                                <li>
                                Gillie
                                </li>
                                <li>
                                Gillie
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-[#808080] text-[14.391px] font-netflix font-normal leading-normal flex flex-col gap-y-[16.61px]">
                                <li>Self Betimes</li>
                                <li>Yatırımcı İlişkileri</li>
                                <li>Basal Himmler</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-[#808080] text-[14.391px] font-netflix font-normal leading-normal flex flex-col gap-y-[16.61px]">
                                <li>Yard Market</li>
                                <li>Is İmkanları</li>
                                <li>Car Tercihleri</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-[#808080] text-[14.391px] font-netflix font-normal leading-normal flex flex-col gap-y-[16.61px]">
                                <li>Hedge Karla</li>
                                <li>Mullein Koşulları</li>
                                <li>Autumnal Bulgier</li>
                            </ul>
                        </div>
                        </div>

                        <div className="flex flex-row w-full justify-between mt-[23.78px]">
                        <div className="w-[115.210px] h-[40.140px] border border-[#808080] flex justify-center items-center">
                            <h2 className="text-[#808080] font-netflix text-[14.391px] font-normal leading-normal">
                                Helmet KOD
                            </h2>
                        </div>
                        <div className='flex flex-row gap-x-[22.14px]'>
                            <div className='h-[26.568px] w-[26.568px]'>
                                <img src={Facebook} alt="facebook" className='h-full w-full object-cover' />
                            </div>
                            <div className='h-[26.568px] w-[26.568px]'>
                                <img src={Twitter} alt="twitter" className='h-full w-full object-cover' />
                            </div>
                            <div className='h-[26.568px] w-[26.568px]'>
                                <img src={Instagram} alt="Instagram" className='h-full w-full object-cover' />
                            </div>
                            <div className='h-[26.568px] w-[26.568px]'>
                                <img src={Youtube} alt="facebook" className='h-full w-full object-cover' />
                            </div>
                        </div>
                        </div>

                        <div className='mt-[22.96px]'>
                            <h4 className='text-[#808080] text-[12.177px] font-netflix font-light leading-normal'>
                            © 1997-2021 Netflix, Inc.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}