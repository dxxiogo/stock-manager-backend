//import "./index.css"
import { RouterProvider } from "react-router-dom"
import router from "./router"
import "./index.css"

export default function App() {
  return <RouterProvider router={router}/>
}


