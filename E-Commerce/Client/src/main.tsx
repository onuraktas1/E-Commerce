import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {router} from "./Router/Routes.tsx";
import {CartContextProvider} from "./Context/CartContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CartContextProvider>
            <RouterProvider router={router}/>
        </CartContextProvider>
    </StrictMode>,
)
