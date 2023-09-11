/* eslint-disable react/prop-types */
import { createContext, useEffect, useState, useContext } from "react";



export const ItemsContext = createContext();

export function ItemsProvider ({children}) {
    const [items, setItems] = useState([]);

    async function addItem (item) {
      try {
        const response = await fetch(`http://localhost:3333/product`, {
          method: 'POST',
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify(item)
      });
      const addedItem = await response.json();
        setItems((state) => { 
           const newState = [addedItem, ...state]
           return newState;
        });
        return addedItem;
      } catch (err) {
        console.log(typeof err)
        return err
      }
    }

    async function removeItem (id) {
      try {
        await fetch(`http://localhost:3333/product/${id}`, {
          method: 'DELETE'
        })
        setItems(state => {
          state = state.filter(item => item.id != id);
          return state;
        }) 
      } catch(err) {
        console.log(err);
      }
    }

    async function updateItem(value) {
      try {
        console.log(value);
        const response = await fetch(`http://localhost:3333/product/${value.id}`,  {
          method: 'PUT',
          headers : {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify(value)
        });
        setItems(state => {
          const newState = state.map(item => (item.id === value.id ? { ...item, ...value } : item));
          return newState;
        });    


      } catch(err) {
        console.log(err);
      }
    }

    async function fetchItems () {
      try {
        const response =  await fetch('http://localhost:3333/products');
        const products = await response.json();
        setItems(products);
      } catch(err) {
        console.log(err)
      }
    }

    return <ItemsContext.Provider value={{items, addItem, removeItem, updateItem, setItems, fetchItems}}>{children}</ItemsContext.Provider>
}