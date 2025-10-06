﻿import {
    Alert,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {AddCircleOutline, Delete, RemoveCircleOutline} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";
import {useState} from "react";
import request from "../../../api/requests.ts";
import {toast} from "react-toastify";
import CartSummary from "./Cartsummary.tsx";
import {currencyTRY} from "../../utils/formatCurrency.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/hook.ts";
import {setCart} from "./cartSlice.ts";

export default function ShoppingCartPage() {

    const {cart} = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();
    const [status, setStatus] = useState({loading: false, id: ""});

    function handleAddItem(productId: number, id: string) {
        setStatus({loading: true, id: id});
        request.Cart.addItem(productId)
            .then(cart => dispatch(setCart(cart)))
            .catch(e => console.error(e))
            .finally(() => setStatus({loading: false, id: ""}));
    }

    function handleDeleteItem(productId: number, id: string, quantity = 1) {
        setStatus({loading: true, id: id});

        request.Cart.deleteItem(productId, quantity)
            .then((cart)=>dispatch(setCart(cart)))
            .catch(e => console.error(e))
            .finally(() => setStatus({loading: false, id: ""}));
    }

    if (cart?.cartItems.length === 0) {
        return <Alert severity="warning"> Sepetinizde ürün yok </Alert>
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell align="right">Fiyat</TableCell>
                        <TableCell align="right">Adet</TableCell>
                        <TableCell align="right">Toplam</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart?.cartItems.map((item) => (
                        <TableRow
                            key={item.productId}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                <img src={`http://localhost:5278/images/${item.imageUrl}`} alt="Resim yüklenemedi"
                                     style={{height: 90}}/>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">{currencyTRY.format(item.price)} </TableCell>
                            <TableCell align="right">
                                <LoadingButton
                                    loading={status && status.id === "add" + item.productId}
                                    onClick={() => handleAddItem(item.productId, "add" + item.productId)}>
                                    <AddCircleOutline/>
                                </LoadingButton>
                                {item.quantity}
                                <LoadingButton
                                    loading={status && status.id === "del" + item.productId}
                                    onClick={() => handleDeleteItem(item.productId, "del" + item.productId)}>
                                    <RemoveCircleOutline/>
                                </LoadingButton>
                            </TableCell>
                            <TableCell align="right">{currencyTRY.format(item.quantity * item.price)} ₺</TableCell>
                            <TableCell align="right">
                                <LoadingButton color="error"
                                               loading={status && status.id === "dell_all" + item.productId}
                                               onClick={() => {
                                                   handleDeleteItem(item.productId, "del_all" + item.productId, item.quantity);
                                                   toast.error("Ürün sepetinizden silindi")
                                               }}>
                                    <Delete/>
                                </LoadingButton>
                            </TableCell>
                        </TableRow>
                    ))}
                    {/*// cart summary*/}
                    <CartSummary></CartSummary>
                </TableBody>
            </Table>
        </TableContainer>
    )
}