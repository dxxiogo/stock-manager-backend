import { Link, Outlet } from "react-router-dom"


export default function StockItems () {
    return (
        <>
            <h1>Stock Items</h1>
            <Link to="Items" >Todos os Itens</Link>
            <Link to="addNewItem">Novo Item</Link>
            <hr />
            <Outlet/>
        </>
    )
}