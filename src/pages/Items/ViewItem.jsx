import { useContext } from "react"
import { ItemsContext } from "../../contexts/ItemsContext"
import { useParams, Link } from "react-router-dom";

export default function ViewItem () {
    const {items} = useContext(ItemsContext);
    const {itemId} = useParams();
    const item  = items.find(({id}) => id === +itemId )

    if(!item) {
        return <h2>Ops! Item não encontrado</h2>
    }

    return (
        <div>
            <div>
                <span>
                    {item.name}
                </span>
                <span>
                    <Link to={`/StockItems/view/${item.id}`}><button>Ver</button></Link>
                    <Link to={`/StockItems/update/${item.id}`}><button>Atualizar</button></Link>
                </span>
            </div>
            <div>
                <p>{item.description}</p>
            </div>
        </div>
    )
}