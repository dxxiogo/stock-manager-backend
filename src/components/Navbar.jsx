import { Link } from "react-router-dom"

export default function NavBar () {
    return (
        <header className="w-full  h-16 flex items-center justify-between p-5 text-white">
            <h1 className="font-normal text-3x1">REACT STOCK</h1>
            <nav>
                <ul className="flex items-center gap-10">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/StockItems">Itens</Link></li>
                </ul>
            </nav>
        </header>
    )
}