import { useQuery } from '@tanstack/react-query';
import Offers1 from '../../../public/offers1.png';
import Offers2 from '../../../public/offers2.png';
import { publicRoute } from '../../PublicRoute/PublicRoute';
import Spin from '../../Loader/Spin';
import OffersContainer from './OffersContainer';

export default function Offers(){
    const {isPending,isError,data} = useQuery({
        queryKey:["offersDetails"],
        queryFn:()=>{
            return publicRoute('/retrieveEvent?serviceTitle=offers')
            .then(res=>res.data)
        }
    })
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
                        {
                            isPending?
                            <div className='flex w-full justify-center items-center'>
                                <Spin/>
                            </div>:
                            isError?
                            <p>Something went wrong please try again</p>:
                            data.map((items,index)=>{
                                return <OffersContainer
                                        key={index}
                                        allInfo={items.objWrap}
                                />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}