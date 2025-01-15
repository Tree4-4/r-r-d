import Card from "./Card"

const Store =(props)=> {


    //map though props.products and create cardComponents
        const cardComponents = props.products.map(product => {
            return (
            <Card 
                key={product.id}
                id={product.id}
                product={product.product}
                price={product.price}
            />
            )
        })

    return (
        <main className="container">
            <h2 className="display-3 text-capitalize">our products</h2>
            <section className="section row row-cols-1 row-cols-2 row-cols-3 g-4">
                    { cardComponents }
            </section>
        </main>
    )

}

export default Store