import BannerCategory from './BannerCategory';
import BannerSearch from './BannerSearch';

export default function Banner(){
    return(
        <>
            <div className="w-[840.23px] ml-[132.84px] mt-[44.28px]">
                <h2 className='text-white font-Helvetica text-[79.706px] font-bold leading-normal capitalize'>
                    the whole world awaits
                </h2>
            </div>
            <BannerSearch/>
            <BannerCategory/>
        </>
    )
}