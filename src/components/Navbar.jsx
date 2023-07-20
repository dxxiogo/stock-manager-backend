import { Link } from "react-router-dom"

export default function NavBar () {
    return (
        <header>
            <h1>REACT STOCK</h1>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/StockItems">Itens</Link></li>
                </ul>
            </nav>
            <hr />
        </header>
    )
}