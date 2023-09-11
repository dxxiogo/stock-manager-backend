import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import useStock from "../../hooks/useStock";
import { useState } from "react";

export default function AddNewItem () {
    const navigate = useNavigate();
    const {addItem} = useStock();
    const [errors, setErrors] = useState({
        name: '',
        inStock: '', 
        category: '',
        description: '',
        price: '',
    });

    async function submitForm ({name, inStock, price, category, description}) {
        const addedItem = await addItem({name, inStock, price, category, description});
        if(!addedItem.errors) {
            return navigate("/StockItems/Items");
        } else {
            const {name, inStock, category, description, price} = addedItem.errors;
            setErrors({name, inStock, category, description, price});
        }
    }

    return (
        <div className="p-12 max-sm:p-6 max-[410px]:px-2">
            <Form handleSubmit={submitForm} errors={errors}/>
        </div>
    )
}