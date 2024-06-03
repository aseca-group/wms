import "./style.css"
import CreateInventory from "../inventory/inventoryButtons/CreateInventoryButton";
import CreateProduct from "../product/productButtons/CreateProductButton";

export default function PageHeader() {
    return (
        <div className={'header'}>
            <div className={'headerBox'}>
                <p className={'headerTitle'}>Warehouse Management System</p>
            </div>
        </div>
    )
}