import { Link } from "react-router-dom"

export default function NavBar () {
    return (
        <header className="w-full  h-16 flex items-center justify-between p-5 text-zinc-50">
            <h1 className="font-medium text-[1.5rem]">REACT STOCK</h1>
            <nav>
                <ul className="flex items-center gap-10">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/StockItems/Items">Itens</Link></li>
                </ul>
            </nav>
        </header>
    )
}