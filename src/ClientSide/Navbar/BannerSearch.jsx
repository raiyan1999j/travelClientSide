import Search from '../../../public/search.png';
import Calender from '../../../public/calender.png';
import Person from '../../../public/person.png';

export default function BannerSearch(){
    return(
        <>
            <div className="w-[1246.515px] h-[66.421px] mx-auto mt-[44.05px]">
                <div className='w-full h-full grid grid-cols-[418.457px_162.733px_162.733px_162.733px_162.733px] gap-x-[35.42px] items-center bg-white/40 rounded-[17.712px] px-[17.71px] py-[8.86px]'>
                <div className='relative h-full w-full'>
                    <label htmlFor="search">
                        <div className='absolute h-full w-full left-0 top-0'>
                            <input type="text" id="search" className='h-full w-full bg-transparent pl-[39.861px] font-Helvetica text-[17.712px] font-normal leading-normal text-white placeholder:text-white' placeholder='Search destination, hotels'/>
                        </div>
                        <span className='absolute h-[22.141px] w-[22.141px] top-[13.28px] left-[8.86px]'>
                            <img src={Search} alt="search" className='h-full w-full object-contain' />
                        </span>
                    </label>
                </div>
                <div className='flex flex-row gap-x-[8.86px]'>
                    <span className='h-[22.141px] w-[22.141px]'>
                        <img src={Calender} alt="calender" className='h-full w-full object-cover' />
                    </span>
                    <p className='text-[17.712px] text-white font-Helvetica leading-normal font-normal'>
                        Check in
                    </p>
                </div>
                <div className='flex flex-row gap-x-[8.86px]'>
                    <span className='h-[22.141px] w-[22.141px]'>
                        <img src={Calender} alt="calender" className='h-full w-full object-cover' />
                    </span>
                    <p className='text-[17.712px] text-white font-Helvetica leading-normal font-normal'>
                        check out
                    </p>
                </div>
                <div className='flex flex-row gap-x-[8.86px]'>
                    <span className='h-[22.141px] w-[22.141px]'>
                        <img src={Person} alt="person" className='h-full w-full object-cover' />
                    </span>
                        <p className='text-[17.712px] text-white font-Helvetica leading-normal font-normal'>
                            1 room, 2 adults
                        </p>
                </div>
                <div>
                    <button className='h-[46.568px] w-full rounded-[35.425px] bg-white flex justify-center items-center text-[#2659C3] font-Helvetica text-[17.712px] font-bold leading-normal'>
                        Search
                    </button>
                </div>
                </div>
            </div>
        </>
    )
}