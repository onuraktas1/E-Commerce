import {useEffect, useState} from "react";
import type {IProduct} from "../Model/IProduct.ts";
import Header from "./Header.tsx";
import ProductList from "./ProductList.tsx";

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch("http://localhost:5278/api/products")
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])

    function addProduct() {
        setProducts([...products, {id: Date.now(), name: "Product 4", price: 690, isActive: true}])
    }

    console.log("Render...")
    return (
        <>
            <Header products={products}/>
            <ProductList products={products} addProduct={addProduct} />
        </>
    )
}




export default App
