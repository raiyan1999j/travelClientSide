import { Outlet } from "react-router-dom";
import Navbar from "./ClientSide/Navbar/Navbar";

export default function App(){
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