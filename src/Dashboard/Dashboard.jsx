import { Outlet } from "react-router-dom";
import Footer from "../ClientSide/Footer/Footer";
import Navbar from "./Navbar/Navbar";

export default function Dashboard(){
    return(
        <>
            <header>
                <Navbar/>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                
            </footer>
        </>
    )
}