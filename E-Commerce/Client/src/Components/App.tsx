import {useEffect, useState} from "react";
import type {IProduct} from "../Model/IProduct.ts";
import Header from "./Header.tsx";
import ProductList from "./ProductList.tsx";
import {Container, CssBaseline} from "@mui/material";
import ButtonUsage from "./ButtonUsage.tsx";

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch("http://localhost:5278/api/products")
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])
    

    console.log("Render...")
    return (
        <>
            <CssBaseline/>
            <Header/>
            <Container>
                <ProductList products={products} />
                <ButtonUsage/>
            </Container>
            
        </>
    )
}


export default App
