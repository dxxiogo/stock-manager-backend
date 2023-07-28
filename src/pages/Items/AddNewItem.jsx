import moment from "moment";
import { useContext} from "react"
import { ItemsContext } from "../../contexts/ItemsContext";
import Form from "../../components/Form";

export default function AddNewItem () {
    const {addItem} = useContext(ItemsContext);

    function submitForm ({name, amount, price, category, description}) {
        const id = Math.floor(Math.random() * 5000);
        const date = moment().format("YYYY-MM-DD");
        addItem({id, name, amount, price, category, description, date});
    }

    return (
        <div className="p-12">
            <Form handleSubmit={submitForm}/>
        </div>
    )
}