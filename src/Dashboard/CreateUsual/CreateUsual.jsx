import LeftSide from "../ServiceForm/LeftSide";
import RightSide from "../ServiceForm/RightSide";

export default function CreateUsual(){
    return(
        <>
            <section className="w-[80%] float-right">
                <div className="w-full px-4 py-4 grid grid-cols-[65%_30%] gap-x-4">
                <LeftSide purpose="usual"/>
                <RightSide/>
                </div>
            </section>
        </>
    )
}