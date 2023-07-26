import { Outlet } from "react-router-dom"
import NavBar from "./components/Navbar"

export default function RootLayout () {
    return (
        <div className="bg-gray-900 min-h-screen">
          <NavBar/>
          <Outlet/>  
          <hr />
          <footer>
            Feito com React e React Router
          </footer>
        </div>
    )
}