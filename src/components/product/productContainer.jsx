import ProductList from "./productList/ProductList";
import CreateProduct from "./productButtons/CreateProductButton";
import {useEffect, useState} from "react";
import {getAllProducts} from "../../api/ProductAPI";
import './productStyle.css'

export default function Product(){

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        getAllProducts()
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products', error));
    };

    useEffect(() => {
        getAllProducts()
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products', error));
    }, []);
    return (
        <div className={'container'}>
            <div className={'productHeaderContainer'}>
                <p className={'productTextContainer'}>
                    Product list
                </p>
                <CreateProduct refetchProducts={fetchProducts}/>
            </div>
            <ProductList products={products}/>
        </div>
    )
}