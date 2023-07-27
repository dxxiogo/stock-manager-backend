import { useContext } from "react"
import { ItemsContext } from "../../contexts/ItemsContext"
import { useParams, Link } from "react-router-dom";
import Button from "../../components/Button";

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
                    <Link to={`/StockItems/update/${item.id}`}><Button content="Atualizar"/></Link>
                    <Button content="Excluir" onClick={() => removeItem(item.id)}/>
                </span>
            </div>
            <div>
                <p>{item.description}</p>
            </div>
        </div>
    )
}