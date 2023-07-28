import { Link, Outlet } from "react-router-dom"


export default function StockItemsLayout () {
    return (
        <div className="p-5">
          <h1  className="font-light text-[2.5rem] text-zinc-50">Stock Items</h1>
          <nav className="flex gap-6 my-2">
            <Link to="Items" >Todos os Itens</Link>
            <Link to="addNewItem">Novo Item</Link>
          </nav>
          <div className="bg-zinc-200 h-[0.2px]"> </div> 
          <Outlet/>
        </div>
    )
}