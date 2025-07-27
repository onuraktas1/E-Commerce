const products = [
    {
        id: 1, name: "Product 1", price: 1000, is_active: true
    },
    {
        id: 2, name: "Product 2", price: 200, is_active: false
    },
    {
        id: 3, name: "Product 3", price: 600, is_active: true
    }
]

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
    return (
        <div>
            <h2>ProductList</h2>
            {
                products.map(p =>
                    (<Product key={p.id} product={p}/>))
            }
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
