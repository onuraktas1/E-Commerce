import type {IProduct} from "../Model/IProduct.ts";
import Product from "./Product.tsx";

interface Props {
    products: IProduct[];
    addProduct: () => void;
}

export default function ProductList({products,addProduct}: Props) {
    return (
        <div>
            <h2>ProductList</h2>
            {
                products.map((p: IProduct) =>
                    (<Product key={p.id} product={p}/>))
            }

            <button onClick={addProduct}>Add Product</button>
        </div>
    );
}
