import India from '../../../public/india.png';
import Travel from '../../../public/travel.png';
import BeachImg from '../../../public/beachImg.png';
import MountainImg from '../../../public/mountainImg.png';

export default function Connect(){
    return(
        <>
            <section className='mt-[79.71px]'>
                <div className="ml-[132.84px]">
                    <h2 className="text-black font-Helvetica text-[35.425px] font-bold leading-normal">
                    Connect with other travelers in our community
                    </h2>
                </div>

                <div className="w-[1379.36px] overflow-hidden mt-[17.67px] ml-[132.84px] pl-[17.71px]">
                    <div className="w-full grid grid-cols-[repeat(4,378.603px)] gap-x-[17.71px]">
                        <div>
                            <div className='h-[221.406px] w-full'>
                                <img src={India} alt="india" className='h-full w-full object-cover rounded-lg' />
                            </div>
                            <div className='mt-[26.57px]'>
                                <h3 className='text-black font-netflix text-[26.569px] font-normal leading-normal'>
                                    India
                                </h3>
                                <p className='text-black/50 text-[17.712px] font-netflix font-normal leading-normal capitalize my-[8.86px]'>
                                    travel community
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className='h-[221.406px] w-full'>
                                <img src={Travel} alt="Travel" className='h-full w-full object-cover rounded-lg' />
                            </div>
                            <div className='mt-[26.57px]'>
                                <h3 className='text-black font-netflix text-[26.569px] font-normal leading-normal'>
                                    Travel talk
                                </h3>
                                <p className='text-black/50 text-[17.712px] font-netflix font-normal leading-normal capitalize my-[8.86px]'>
                                    travel community
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className='h-[221.406px] w-full'>
                                <img src={BeachImg} alt="BeachImg" className='h-full w-full object-cover rounded-lg' />
                            </div>
                            <div className='mt-[26.57px]'>
                                <h3 className='text-black font-netflix text-[26.569px] font-normal leading-normal'>
                                    Beach
                                </h3>
                                <p className='text-black/50 text-[17.712px] font-netflix font-normal leading-normal capitalize my-[8.86px]'>
                                    travel community
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className='h-[221.406px] w-full'>
                                <img src={MountainImg} alt="MountainImg" className='h-full w-full object-cover rounded-lg' />
                            </div>
                            <div className='mt-[26.57px]'>
                                <h3 className='text-black font-netflix text-[26.569px] font-normal leading-normal'>
                                    Mountain
                                </h3>
                                <p className='text-black/50 text-[17.712px] font-netflix font-normal leading-normal capitalize my-[8.86px]'>
                                    travel community
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}