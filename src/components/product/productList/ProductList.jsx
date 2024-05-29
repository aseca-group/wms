import {useEffect, useState} from "react";
import {getAllProducts} from "../../../api/ProductAPI";
import ProductItem from "./ProductItem";
import './style.css'

export default function ProductList(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products', error));
    }, []);

    return (
        <div className={'products'}>
            {products.length > 0 ? (
                products.map((product, index) => (
                    <div className={'productMap'} key={index}>
                        <ProductItem id={product.id} name={product.name} price={product.price}/>
                    </div>
                ))
            ) : (
                <></>
            )}
        </div>
    );
}