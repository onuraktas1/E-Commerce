import {useState} from "react";

function App() {
    return (
        <>
            <Header/>
            <ProductList/>
        </>
    )
}

function Header() {
    return (
        <h1>Header</h1>
    );
}

function ProductList() {
    const [products, setProducts] = useState([
        {
            id: 1, name: "Product 1", price: 1000, is_active: true
        },
        {
            id: 2, name: "Product 2", price: 200, is_active: false
        },
        {
            id: 3, name: "Product 3", price: 600, is_active: true
        }])

    function addProduct() {
        setProducts([...products, {id: 4, name: "Product 4", price: 690, is_active: true}])
    }
    
    console.log("Render...")

    return (
        <div>
            <h2>ProductList</h2>
            {
                products.map(p =>
                    (<Product key={p.id} product={p}/>))
            }

            <button onClick={addProduct}>Add Product</button>
        </div>
    );
}

function Product(props: any) {
    return (
        <>
            {
                props.product.is_active ? (
                    <div>
                        <h3>{props.product.name}</h3>
                        <p>{props.product.price}</p>
                    </div>
                ) : <p>Ürün satışta değil</p>
            }
        </>

    );
}

export default App
