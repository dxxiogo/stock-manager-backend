import { Outlet } from "react-router-dom"
import NavBar from "./components/Navbar"

export default function RootLayout () {
    return (
        <div className="bg-gray-900 min-h-screen text-zinc-50">
          <NavBar/>
          <Outlet/>  
          <footer className="p-3">
            Feito com React, React Router e Tailwind
          </footer>
        </div>
    )
}