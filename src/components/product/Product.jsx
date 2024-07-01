function Product({ productName, productDescription, productImage, productPrice })
{
    const formatCurrency = (money) =>
    {
        return money.toLocaleString("it-IT", { style: "currency", currency: "VND" });
    };
    return (
        <>
            <div style={ { display: "flex", flexDirection: "column" } }>
                <h2>{ productName }</h2>
                <p>{ productDescription }</p>
                <img src={ productImage } />
                <div>
                    <button>Buy Now</button> <span>{ formatCurrency(productPrice) }</span>
                </div>
            </div>
        </>
    );
}

export default Product;