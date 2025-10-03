import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {router} from "./Router/Routes.tsx";
import {CartContextProvider} from "./Context/CartContext.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
        <CartContextProvider>
            <RouterProvider router={router}/>
        </CartContextProvider>
        </Provider>
    </StrictMode>,
)
