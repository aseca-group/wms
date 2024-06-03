import {useState} from "react";
import "../../product/productButtons/style.css"
import CreateInventoryModal from "../inventoryModals/CreateInventoryModal";

export default function CreateInventory({fetchInventories}){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const setModalOpen = () => {
        setIsModalOpen(true);
    }
    const setModalClose = () => {
        setIsModalOpen(false);
    }

    return(
        <div>
            <button
                onClick={setModalOpen}
                className={'createButton'}
            >
                Create Inventory
            </button>
            {
                isModalOpen &&
                <CreateInventoryModal
                    isModalOpen={isModalOpen}
                    setModalClose={setModalClose}
                    refetchInventory={fetchInventories}
                />
            }
        </div>
    )
}