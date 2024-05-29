import "./style.css"
import CreateInventory from "../createButtons/CreateInventoryButton";
import CreateProduct from "../createButtons/CreateProductButton";

export default function PageHeader() {
    return (
        <div className={'header'}>
            <div className={'headerBox'}>
                <p className={'headerTitle'}>Warehouse Management System</p>
            </div>
            <div className={'headerButtonsBox'}>
                <CreateProduct/>
                <CreateInventory/>
            </div>
        </div>
    )
}