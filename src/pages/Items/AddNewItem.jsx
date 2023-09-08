import moment from "moment";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import useStock from "../../hooks/useStock";

export default function AddNewItem () {
    const navigate = useNavigate();
    const {addItem} = useStock();

    function submitForm ({name, inStock, price, category, description}) {
        addItem({name, inStock, price, category, description});
        return navigate("/StockItems/Items");
    }

    return (
        <div className="p-12 max-sm:p-6 max-[410px]:px-2">
            <Form handleSubmit={submitForm}/>
        </div>
    )
}