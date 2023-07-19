import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Dashboard from "./pages/Dashboard";
import StockItems from "./pages/StockItems";
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
                path: "StockItems",
                element: <StockItems/>,
                children: [
                    {
                        path: "Items",
                        element: <Items/>,
                        children: [
                            {
                                path: "uptade/:id",
                                element: <UpdateItem/>
                            },
                            {
                                path: "view/:id",
                                element: <ViewItem/>
                            }
                        ]
                    },
                    {
                        path: "addNewItem",
                        element: <AddNewItem/>
                    }
                    
                ]
            }
        ]
    }
]);

export default router;