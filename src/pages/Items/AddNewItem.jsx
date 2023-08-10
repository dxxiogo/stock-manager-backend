import moment from "moment";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import useStock from "../../hooks/useStock";

export default function AddNewItem () {
    const navigate = useNavigate();
    const {addItem} = useStock();

    function submitForm ({name, amount, price, category, description}) {
        const id = Math.floor(Math.random() * 5000);
        const date = moment().format("YYYY-MM-DD");
        addItem({id, name, amount, price, category, description, date});
        return navigate("/StockItems/Items");
    }

    return (
        <div className="p-12">
            <Form handleSubmit={submitForm}/>
        </div>
    )
}