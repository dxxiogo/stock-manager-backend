import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import StockItemsLayout from "./StockItemsLayout";
import Dashboard from "./pages/Dashboard";
import Items from "./pages/Items/Items";
import AddNewItem from "./pages/Items/AddNewItem";
import UpdateItem from "./pages/Items/UpdateItem";
import ViewItem from "./pages/Items/ViewItem";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children:[
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: 'StockItems',
                element: <StockItemsLayout/>,
                children: [
                    {
                        path: "view/:itemId",
                        element: <ViewItem/>
                    },
                    {
                        path: "addNewItem",
                        element: <AddNewItem/>
                    },      
                    {
                        path: "Items",
                        element: <Items/>,
                    },
                    {
                        path: "update/:itemId",
                        element: <UpdateItem/>,
                    }
                ]
            }
        ]
    }       
]);

export default router;