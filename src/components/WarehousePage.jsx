import PageHeader from "./header/PageHeader";
import "./style.css";
import InventoryList from "./inventory/inventoryList/InventoryList";
import ProductList from "./product/productList/ProductList";
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