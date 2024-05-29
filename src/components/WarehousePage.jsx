import PageHeader from "./header/PageHeader";
import "./style.css";
import InventoryList from "./inventory/inventoryList/InventoryList";

export default function WarehousePage(){
    return (
        <div className={'boxPage'}>
            <PageHeader/>
            <InventoryList/>
        </div>
    )
}