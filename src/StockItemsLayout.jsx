import { Link, Outlet, useLocation } from "react-router-dom"


export default function StockItemsLayout () {

  const {pathname} = useLocation();

    return (
        <div className="p-5 w-full grow">
          <h1  className="font-light text-[2.5rem] text-zinc-50 max-md:text-[2rem]">Stock Items</h1>
          <nav className="flex gap-6 mt-2">
            <Link to="Items" className={`${pathname === "/StockItems/Items" ? "border-b-2" : ""} pb-2`} >Todos os Itens</Link>
            <Link to="addNewItem" className={`${pathname === "/StockItems/addNewItem" ? "border-b-2" : ""} pb-2`}>Novo Item</Link>
          </nav>
          <div className="bg-zinc-200 h-[0.2px]"> </div> 
          <Outlet/>
        </div>
    )
}