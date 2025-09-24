import {Header} from "./Header.tsx";
import {CircularProgress, Container, CssBaseline} from "@mui/material";
import {Outlet} from "react-router"
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {useEffect, useState} from "react";
import request from "../../api/requests.ts";
import {useCartContext} from "../Context/CartContext.tsx";

function App() {
    const {setCart} = useCartContext();
    const [loading,setLoading] =useState(true);
    
    useEffect(() => {
        request.Cart.get()
            .then(cart=>setCart(cart))
            .catch(e=>console.log(e))
            .finally(()=>setLoading(false));
    },[]);
    
    if (loading) {
        return  <CircularProgress />
    }
    
    return (
        <>
            <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
            

            <CssBaseline/>
            <Header/>
            <Container>
                <Outlet/>
            </Container>

        </>
    )
}


export default App
