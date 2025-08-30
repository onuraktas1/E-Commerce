import {
    CircularProgress,
    Divider,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from "@mui/material";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {IProduct} from "../../Model/IProduct.ts";
import request from "../../../api/requests.ts";

export default function ProductDetailsPage() {
    const {id} = useParams<{ id: string }>();
    const [product, setProducts] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        id && request.Catalog.details(parseInt(id))
            .then(data => setProducts(data))
            .catch(e => console.log(e))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <CircularProgress/>;
    if (!product) return 


    return (
        <Grid container spacing={6}>
            <Grid size={{xl: 3, lg: 4, md: 5, sm: 6, xs: 12}}>
                <img src={`http://localhost:5278/images/${product.imageUrl}`} style={{width: "100%"}}/>
            </Grid>
            <Grid size={{xl: 9, lg: 8, md: 7, sm: 6, xs: 12}}>
                <Typography variant="h3">{product.name}</Typography>
                <Divider sx={{mb: 2}}/>
                <Typography variant="h4" color="secondary"> {(product.price / 10).toFixed(2)}₺</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Descripton</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Stock</TableCell>
                                <TableCell>{product.stock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
};