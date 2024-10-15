import { Form, Formik } from "formik";
import LeftSide from "../ServiceForm/LeftSide";
import RightSide from "../ServiceForm/RightSide";
import {getStorage, ref, uploadBytes} from 'firebase/storage';
import { useMutation } from "@tanstack/react-query";
import { publicRoute } from "../../PublicRoute/PublicRoute";

export default function CreateEvent(){
    const createEvent=useMutation({
        mutationFn:(value)=>{
            const objWrap = value;
            return publicRoute.post(`/createEvent?serviceTitle=packages`,{objWrap})   
        }
    })
    const dataCollector={
        from:"",
        to:"",
        hotel:"",
        person:"",
        category:"",
        stayDay:"",
        stayNight:"",
        transport:"",
        description:"",
        eventDate:"",
        totalPrice:"",
        coupon:"",
        discount:"",
        image:""
    }

    const finalValue=(value)=>{
        const copy = {...value};
        const name = copy?.image?.name;
        const file = copy.image;
        const storage = getStorage();
        const storageRef = ref(storage,`image/${name}`);
        
        uploadBytes(storageRef,file);

        copy.image = name;
        
        createEvent.mutate(copy);
    }
    return(
        <>
            <section className="w-[80%] float-right">
            <Formik initialValues={dataCollector} onSubmit={(value,{resetForm})=>{
                finalValue(value)
                resetForm()
                }}>
                <Form>
                <div className="w-full px-4 py-4 grid grid-cols-[65%_30%] gap-x-4">
                <LeftSide purpose="event"/>
                <RightSide/>
                </div>
                </Form>
            </Formik>
            </section>
        </>
    )
}