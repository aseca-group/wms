import PageHeader from "./header/PageHeader";
import "./style.css";
import InventoryList from "./inventory/inventoryList/InventoryList";
import ProductList from "./product/productList/ProductList";

export default function WarehousePage(){
    return (
        <div className={'boxPage'}>
            <PageHeader/>
            <div className={'listContainers'}>
                <div className={'container'}>
                    <p className={'titleContainer'}>
                        Product list
                    </p>
                    <ProductList/>
                </div>
                <div className={'container'}>
                    <p className={'titleContainer'}>
                        Inventory list
                    </p>
                    <InventoryList/>
                </div>
            </div>
        </div>
    )
}