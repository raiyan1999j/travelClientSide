import { Form, Formik } from "formik";
import LeftSide from "../ServiceForm/LeftSide";
import RightSide from "../ServiceForm/RightSide";
import { useMutation } from "@tanstack/react-query";
import { publicRoute } from "../../PublicRoute/PublicRoute";
import {getStorage, ref, uploadBytes} from 'firebase/storage';


export default function CreateOffers(){
    const createEvent=useMutation({
        mutationFn:(value)=>{
            const objWrap=value;

            return publicRoute.post(`/createEvent?serviceTitle=offers`,{objWrap})
        }
    })
    const dataCollector={
        description:"",
        addCoupon:"",
        title:"",
        place:"",
        image:""
    }

    const finalValue=(value)=>{
        const copy = {...value};
        const name = copy?.image?.name;
        const file = copy?.image;
        const storage = getStorage();
        const storageRef = ref(storage,`image/${name}`);

        uploadBytes(storageRef,file);
        
        copy.image = name;

        createEvent.mutate(copy);
    }
    return(
        <>
            <section className="w-[80%] float-right">
                <Formik initialValues={dataCollector} onSubmit={(value)=>{finalValue(value)}}>
                <Form>
                <div className="w-full px-4 py-4 grid grid-cols-[65%_30%] gap-x-4">
                <LeftSide purpose="offers"/>
                <RightSide/>
                </div>
                </Form>
                </Formik>
            </section>
        </>
    )
}