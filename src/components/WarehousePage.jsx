import PageHeader from "./header/PageHeader";
import "./style.css";
import Inventory from "./inventory/inventoryContainer";
import Product from "./product/productContainer";

export default function WarehousePage(){
    return (
        <div className={'boxPage'}>
            <PageHeader/>
            <div className={'listContainers'}>
                <Product/>
                <Inventory/>
            </div>
        </div>
    )
}