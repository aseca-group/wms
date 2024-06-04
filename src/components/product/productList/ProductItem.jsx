import './style.css'
import DeleteProduct from "../productButtons/DeleteProductButton";

export default function ProductItem({id, name, price, refetch}){
    return (
        <div
            className={'productContainer'}
        >
            <div className={'idContainer'}>
                <p>Id</p>
                <p>{id}</p>
            </div>
            <div className={'dataContainer'}>
                <p>
                    Product: {name}
                </p>
                <p>
                    Price: {price}
                </p>
                <DeleteProduct productId={id} refetchProduct={refetch}/>
            </div>
        </div>
    )
}