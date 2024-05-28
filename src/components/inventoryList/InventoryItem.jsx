import {getProductById} from "../../api/ProductAPI";
import {useEffect, useState} from "react";
import "./style.css"

export default function InventoryItem({productId, stock, reservedStock}) {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        getProductById(productId)
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product', error));
    }, [productId]);
    return (
        <div className={'inventoryContainer'}>
            <div className={'idContainer'}>
                <p>Id</p>
                <p>{productId}</p>

            </div>
            <div className={'dataContainer'}>
                <p>
                    Product: {product ? product.name : 'Loading...'}
                </p>
                <p>
                    Price: {product ? product.price : 'Loading...'}
                </p>
                <p>
                    Stock: {stock}
                </p>
                <p>
                    Reserved Stock: {reservedStock}
                </p>
            </div>
        </div>
    )
}