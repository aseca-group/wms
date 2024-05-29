import './style.css'

export default function ProductItem({id, name, price}){
    return (
        <div className={'productContainer'}>
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
            </div>
        </div>
    )
}