import { MenuOutlined } from "@ant-design/icons";
import Product from "./product/Product";

function ProductList()
{
    return (
        <>
            <header>
                <div>
                    <MenuOutlined /> <span style={ { textAlign: "center", marginLeft: "45%", marginRight: "auto" } }>BEAUTILIFE</span>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2GzhJZAqWj7JqJztzn2xzsLqglxIfct9XQ&s" alt="image"
                    width={ "100%" } height={ "500px" } />
            </header>
            <body>
                <div style={ { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridTemplateRows: "repeat(3,1fr)" } }>
                    <Product productName={ "Product 1" } productDescription={ "Description 1" } productImage={ "Image 1" } productPrice={ 100000 } />
                    <Product productName={ "Product 2" } productDescription={ "Description 2" } productImage={ "Image 2" } productPrice={ 110000 } />
                    <Product productName={ "Product 3" } productDescription={ "Description 3" } productImage={ "Image 3" } productPrice={ 120000 } />
                    <Product productName={ "Product 4" } productDescription={ "Description 4" } productImage={ "Image 4" } productPrice={ 130000 } />
                    <Product productName={ "Product 5" } productDescription={ "Description 5" } productImage={ "Image 5" } productPrice={ 140000 } />
                    <Product productName={ "Product 6" } productDescription={ "Description 6" } productImage={ "Image 6" } productPrice={ 150000 } />
                    <Product productName={ "Product 7" } productDescription={ "Description 7" } productImage={ "Image 7" } productPrice={ 160000 } />
                    <Product productName={ "Product 8" } productDescription={ "Description 8" } productImage={ "Image 8" } productPrice={ 170000 } />
                    <Product productName={ "Product 9" } productDescription={ "Description 9" } productImage={ "Image 9" } productPrice={ 180000 } />
                    <Product productName={ "Product 10" } productDescription={ "Description 10" } productImage={ "Image 10" } productPrice={ 200000 } />
                    <Product productName={ "Product 11" } productDescription={ "Description 11" } productImage={ "Image 11" } productPrice={ 190000 } />
                </div>
            </body>
        </>
    );
}

export default ProductList;