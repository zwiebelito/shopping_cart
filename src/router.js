import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {ProductsPage} from "./pages/ProductsPage/ProductsPage";
import {CartPage} from "./pages/CartPage/CartPage";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        path: '',
        children: [
            {
                index: true,
                element: <Navigate to={'/products'}/>
            },
            {
                path: '/products',
                element: <ProductsPage />
            },
            {
                path: '/cart',
                element: <CartPage />
            },
        ]
    }
])

export {router}