import { Link, useNavigate, useLoaderData } from "react-router-dom";
import ItemInfo from "../../components/ItemInfo";
import Button from "../../components/Button";
import useStock from "../../hooks/useStock";

export default function ViewItem () {
    const {removeItem} = useStock();
    const navigate = useNavigate();
    const item = useLoaderData();

    function handleButtonRemove () {
        removeItem(item.id);
        return navigate("/StockItems/Items");
    }

    if(!item) {
        return <h2 className="mt-10 text-3xl">Ops! Item não encontrado</h2>
    }

    return (
        <div>
            <div className="flex align-center  gap-10 mt-3">
                <h2 className="font-light text-2xl">
                    {item.name}
                </h2>
                <div className="flex align-center gap-3">
                    <Link to={`/StockItems/update/${item.id}`}><Button content="Atualizar" className="bg-slate-50 text-black"/></Link>
                    <Button content="Excluir" onClick={handleButtonRemove} className="bg-red-600"/>
                </div>
            </div>
            <div>
                <div className="mx-4 my-10 flex align-center gap-12">
                    <ItemInfo content={`Categoria: ${item.category}`}/>
                    <ItemInfo content={`Quantidade em estoque: ${item.amount}`}/>
                    <ItemInfo content={`Preço: R$${item.price}`}/>
                </div>
            </div>
            <div>
                <p>{item.description}</p>
            </div>
        </div>
    )
}