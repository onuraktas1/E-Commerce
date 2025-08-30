import {useEffect, useState} from "react";
import type {IProduct} from "../../Model/IProduct.ts";
import ProductList from "./ProductList.tsx";
import {CircularProgress} from "@mui/material";
import request from "../../../api/requests.ts";

export default function CatalogPage() {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        request.Catalog.list()
            .then(data => setProducts(data))
            .finally(() => setLoading(false));
    }, [])

    if (loading) return <CircularProgress/>;
return (
    <ProductList products={products}/>
);
}