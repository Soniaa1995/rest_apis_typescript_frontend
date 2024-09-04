import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, {loader as productsLoader, action as updateAvailabilityAction} from "./pages/Products";
import NewProduct, {action as newProductAction} from "./pages/NewProduct";
import EditProduct, {loader as editProductLoader, action as editProductAction} from "./pages/EditProduct";
import { action as deleteProductAction } from "./components/ProductDetail";

//loader para obtener datos y los action para los formularios

export const router = createBrowserRouter([
    {
        path: '/',  //aqui le pasamos la pagina principal
        element: <Layout />, 
        children: [  //las paginas que se agreguen seran hijos de layout (que es la pag principal)
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path:'productos/:id/editar', // ROA Pattern - Resource-oriented desing
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path:'productos/:id/eliminar',
                action: deleteProductAction
            }
        ]
    }
])