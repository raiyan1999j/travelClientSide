import LoginImg from '../../../public/loginImg.png';
import GoogleImg from '../../../public/googleImg.png';
import { VscEyeClosed } from 'react-icons/vsc';

export default function LogInSignUp(){
    return(
        <>
            <section>
                <div className="w-[1080px] mx-auto">
                    <div className="w-full grid grid-cols-[521px_559px]">
                        <div>
                            <div className="w-[313.967px] py-[100px]">
                                <div>
                                    <h2 className='text-[#030303] font-poppins text-[34px] font-medium leading-normal tracking-[1.02px] uppercase'>
                                        welcome back
                                    </h2>
                                    <p className='text-[#636364] font-poppins text-sm font-normal leading-normal tracking-[0.42px]'>
                                    Welcome back! Please enter your details.
                                    </p>
                                </div>

                                <div className='mt-[37.18px]'>
                                    <div>
                                    <label htmlFor="email" className='text-[#181818] font-poppins text-sm font-medium leading-normal tracking-[0.42px]'>
                                    Email
                                    </label>
                                    <div className='w-full h-[41.311px] mt-[6.2px]'>
                                        <input type="email" id="email" className='h-full w-full border border-[#00000040] rounded-xl text-[#636364] font-poppins text-sm font-light leading-normal tracking-[0.42px] pl-4 placeholder:text-[#636364]' placeholder='Enter your email' />
                                    </div>
                                    </div>
                                    <div className='mt-[21.69px]'>
                                        <div className='w-full flex flex-row justify-between items-center'>
                                        <label htmlFor="password" className='text-[#181818] font-poppins text-sm font-medium leading-normal tracking-[0.42px]'>Password</label>
                                        <span>
                                        <VscEyeClosed />
                                        </span>
                                        </div>
                                        <div className='w-full h-[41.311px] mt-[6.2px]'>
                                            <input type="text" className='h-full w-full border border-[#00000040] rounded-xl text-[#636364] font-poppins text-sm font-light leading-normal tracking-[0.42px] pl-4 placeholder:text-[#636364]' placeholder='Enter your password'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-y-[11.36px] mt-[51.64px]'>
                                    <button className='h-[41.311px] w-[313.967px] rounded-xl border border-[#EA454C] transition-all duration-200 ease-in hover:bg-[#EA454C] hover:text-white text-sm font-medium leading-normal tracking-[0.42px] font-poppins text-[#636364]'>
                                        Log in
                                    </button>
                                    <button className='flex flex-row justify-center items-center h-[41.311px] w-[313.967px] text-[#000000] font-poppins text-sm font-medium leading-normal tracking-[0.42px] border border-[#00000040] rounded-xl transition-all ease-in duration-100 hover:bg-[#EA454C] hover:border-[#EA454C]'>
                                    <span className='h-[28.918px] w-[28.918px] mr-[6.2px] '>
                                        <img src={GoogleImg} alt="google" className='h-full w-full object-cover' />
                                    </span>
                                        Log in with Google
                                    </button>
                                </div>

                                <div className='w-full text-center mt-[15.72px]'>
                                    <h5 className='text-[#595959] font-poppins text-[10px] font-medium leading-normal tracking-[0.3px]'>
                                    Don’t have an account? 
                                    <span className='text-[#EA454C] hover:underline'>
                                    Sign up fo free!
                                    </span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={LoginImg} alt="loginImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}