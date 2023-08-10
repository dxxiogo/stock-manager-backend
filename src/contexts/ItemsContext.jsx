/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const ItemsContext = createContext();

export function ItemsProvider ({children}) {
    const [items, setItems] = useState( () => {
      const itemsStored = JSON.parse(localStorage.getItem('items'));
      if(itemsStored) {
        return itemsStored;
      } 
      return [];
    });

    function addItem (item) {
        setItems((state) => { 
           const newState = [item, ...state]
           localStorage.setItem("items", JSON.stringify(newState));
           return newState;
        });
    }

    function removeItem (id) {
        setItems(state => {
          state = state.filter(item => item.id != id);
          localStorage.setItem("items", JSON.stringify(state));
          return state;
        }) 
    }

    function updateItem(value) {
      setItems(state => {
        const newState = state.map(item => (item.id === value.id ? { ...item, ...value } : item));
        localStorage.setItem("items", JSON.stringify(newState));
        return newState;
      });
      }

    return <ItemsContext.Provider value={{items, addItem, removeItem, updateItem}}>{children}</ItemsContext.Provider>
}