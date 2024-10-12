
export default function Spin({height,width}) {
    return (
      <>
        <div className="loader" style={{height:`${height?height:50}px`,width:`${width?width:50}px`}}></div>
      </>
    );
  }
  