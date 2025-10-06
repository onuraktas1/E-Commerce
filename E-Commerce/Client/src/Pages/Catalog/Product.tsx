import {AddShoppingCart} from "@mui/icons-material";
import type {IProduct} from "../../Model/IProduct.ts";
import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router";
import request from "../../../api/requests.ts";
import {useState} from "react";
import {LoadingButton} from "@mui/lab";
import {toast} from "react-toastify";
import {currencyTRY} from "../../utils/formatCurrency.ts";
import {useAppDispatch} from "../../hooks/hook.ts";
import {setCart} from "../Cart/cartSlice.ts";

interface Props {
    product: IProduct;
}

export default function Product({product}: Props) {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    function handleAddItem(productId: number) {
        setLoading(true);

        request.Cart.addItem(productId)
            .then(cart => {
                dispatch(setCart(cart));
                toast.success("Sepetinize eklendi ");
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
        // loading;
    }

    return (
        <Card>
            <CardMedia sx={{height: 160, backgroundSize: "contain"}}
                       image={`http://localhost:5278/images/${product.imageUrl}`}/>
            <CardContent>
                <Typography gutterBottom variant="h6" component="h2" color="text.secondary">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="secondary"></Typography>
                {currencyTRY.format(product.price)}
            </CardContent>
            <CardActions>

                <LoadingButton
                    variant="outlined"
                    loadingPosition={"start"}
                    size={"small"}
                    startIcon={<AddShoppingCart/>}
                    loading={loading}
                    onClick={() => handleAddItem(product.id)}>Sepete Ekle</LoadingButton>


                <Button component={Link} to={`/catalog/${product.id}`} variant="outlined" size="small"
                        startIcon={<SearchIcon/>} color="primary">View</Button>
            </CardActions>
        </Card>

    );
}