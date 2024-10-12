
export default function Spin({size}) {
    return (
      <>
        <div className="rounded-full relative flex justify-center items-center" style={{height:`${size?size:100}px`,width:`${size?size:100}px`}}>
          <div className="absolute h-full w-full border-[4px] border-gray-500 rounded-full border-solid border-l-transparent border-r-transparent animate-spin-one"></div>
          <div className="absolute h-[80%] w-[80%] border-2 border-black rounded-full border-solid border-t-transparent border-b-transparent animate-spin-two"></div>
          <div className="absolute h-[60%] w-[60%] border-2 border-gray-500 rounded-full border-solid border-l-transparent border-r-transparent animate-spin-three"></div>
          <div className="absolute h-[40%] w-[40%] border-2 border-black rounded-full border-solid border-b-transparent border-t-transparent animate-spin-four"></div>
        </div>
      </>
    );
  }
  