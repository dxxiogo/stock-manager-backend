import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";

export default function useStock () {
    return useContext(ItemsContext);
}