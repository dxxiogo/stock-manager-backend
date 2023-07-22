import { createContext, useState } from "react";


export const ItemsContext = createContext();

export function ItemsProvider ({children}) {
    const [items, setItems] = useState([]);

    function addItem (item) {
        setItems((state) => [item, ...state]);
    }

    function removeItem (id) {
        setItems(state => state.filter(item => item.id != id))
    }

    return <ItemsContext.Provider value={{items, addItem, removeItem}}>{children}</ItemsContext.Provider>
}