import { useContext } from "react"
import { ItemsContext } from "../../contexts/ItemsContext"
import { useParams } from "react-router-dom";

export default function ViewItem () {
    const {items} = useContext(ItemsContext);
    const itemId = useParams();
    const {name, description, price, amount, category } = items.find(({id}) => id === +itemId );

    return (
        <div>
            <div>
                <span>
                    {name}
                </span>
                <span>
                    <button>Atualizar</button>
                    <button>Excluir</button>
                </span>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}