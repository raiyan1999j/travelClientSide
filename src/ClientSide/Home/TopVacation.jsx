import Indonesia from '../../../public/indonesia.png';
import Ireland from '../../../public/ireland.png';
import Australia from '../../../public/australia.png';
import Paris from '../../../public/paris.png';

export default function TopVacation(){
    return(
        <>
            <section className=' translate-y-[-200px]'>
                <div className="w-[441px] ml-[132.84px] mb-[35.42px]">
                    <h2 className='capitalize text-[35.425px] font-Helvetica font-bold leading-normal text-white'>
                        top vacation destination
                    </h2>
                </div>
                <div className="w-[1372.72px] ml-[139.49px] overflow-hidden">
                    <div className="w-full grid grid-cols-[repeat(4,343.179px)] gap-x-[26.57px]">
                        <div className="h-[221.406px] w-full rounded-lg relative">
                            <div className="h-full w-full top-0 left-0 rounded-lg absolute before:absolute before:content-'' before:h-full before:w-full before:bg-blurImg">
                                <img src={Indonesia} alt="indonesia" className="h-full w-full object-cover rounded-lg" />
                            </div>
                            <div className="absolute left-[26.57px] bottom-[25.78px]">
                                <p className='text-white font-netflix text-[26.569px] font-medium leading-normal capitalize'>
                                    bali, indonesia
                                </p>
                            </div>
                        </div>
                        <div className="h-[221.406px] w-full rounded-lg relative">
                            <div className="h-full w-full top-0 left-0 rounded-lg absolute before:absolute before:content-'' before:h-full before:w-full before:bg-blurImg">
                                <img src={Ireland} alt="Ireland" className="h-full w-full object-cover rounded-lg" />
                            </div>
                            <div className="absolute left-[26.57px] bottom-[25.78px]">
                                <p className='text-white font-netflix text-[26.569px] font-medium leading-normal capitalize'>
                                    kerry, ireland
                                </p>
                            </div>
                        </div>
                        <div className="h-[221.406px] w-full rounded-lg relative">
                            <div className="h-full w-full top-0 left-0 rounded-lg absolute before:absolute before:content-'' before:h-full before:w-full before:bg-blurImg">
                                <img src={Australia} alt="Australia" className="h-full w-full object-cover rounded-lg" />
                            </div>
                            <div className="absolute left-[26.57px] bottom-[25.78px]">
                                <p className='text-white font-netflix text-[26.569px] font-medium leading-normal capitalize'>
                                    sydney, australia
                                </p>
                            </div>
                        </div>
                        <div className="h-[221.406px] w-full rounded-lg relative">
                            <div className="h-full w-full top-0 left-0 rounded-lg absolute before:absolute before:content-'' before:h-full before:w-full before:bg-blurImg">
                                <img src={Paris} alt="Paris" className="h-full w-full object-cover rounded-lg" />
                            </div>
                            <div className="absolute left-[26.57px] bottom-[25.78px]">
                                <p className='text-white font-netflix text-[26.569px] font-medium leading-normal capitalize'>
                                    paris, france
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}