
export default function Dots({height,width,color}){
    return(
        <>
            <div className="dots" style={{height:`${height?height:60}px`,width:`${width?width:60}px`,background:`${color?`radial-gradient(circle closest-side,${color} 90%,#0000) 0/calc(100%/3) 100% space`:"radial-gradient(circle closest-side,#000 90%,#0000) 0/calc(100%/3) 100% space"}`}}></div>
        </>
    )
}