import {AddShoppingCart} from "@mui/icons-material";
import type {IProduct} from "../Model/IProduct.ts";
import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
interface Props {
    product: IProduct;
}

export default function Product({product}: Props) {
    return (
        <Card>
            <CardMedia sx={{height: 160, backgroundSize: "contain"}}
                       image={`http://localhost:5278/images/${product.ImageUrl}`}/>
            <CardContent>
                <Typography gutterBottom variant="h6" component="h2" color="text.secondary">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="secondary"></Typography>
                {(product.price / 10).toFixed(2)} ₺
            </CardContent>
            <CardActions>
                <Button variant="outlined" size="small" startIcon={<AddShoppingCart/>} color="success">Add to card</Button>
                <Button variant="outlined" size="small" startIcon={<SearchIcon/>} color="primary">View</Button>
            </CardActions>
        </Card>

    );
}