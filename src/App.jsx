import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./ClientSide/Navbar/Navbar";
import { useEffect } from "react";
import Footer from "./ClientSide/Footer/Footer";

export default function App(){
  const navigate = useNavigate();

  useEffect(()=>{
    navigate('/home')
  },[])
  return(
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <Outlet/>
      </main>
      
      <footer>
        <Footer/>
      </footer>
    </>
  )
}