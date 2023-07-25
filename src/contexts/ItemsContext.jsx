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

    function updateItem(value) {
        setItems(state => {
          return state.map(item => {
            if (item.id === value.id) {
              return { ...item, ...value };
            } else {
              return item;
            }
          });
        });
      }

    return <ItemsContext.Provider value={{items, addItem, removeItem, updateItem}}>{children}</ItemsContext.Provider>
}