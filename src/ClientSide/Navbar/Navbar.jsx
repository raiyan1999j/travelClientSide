import Banner from "./Banner";

export default function Navbar(){
    return(
        <>
            <section className="w-full bg-bannerImg bg-cover bg-no-repeat py-[26.57px]">
                <div className="max-w-[1408.141px] h-[41px] mx-auto">
                    <nav className="h-full w-full flex flex-row items-center mx-auto">
                        <div>
                            <h1 className="text-white font-Helvetica font-bold text-[35.42px] leading-normal">
                                trxvl.
                            </h1>
                        </div>
                        <div className="ml-auto">
                            <ul className="text-white font-Helvetica text-[17.71px] font-normal leading-normal capitalize flex flex-row gap-x-[26.57px]">
                                <li>home</li>
                                <li>stays</li>
                                <li>flight</li>
                                <li>packages</li>
                                <li>sign up</li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <Banner/>
            </section>
        </>
    )
}