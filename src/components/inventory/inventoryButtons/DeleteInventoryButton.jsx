import {useState} from "react";
import "./style.css"
import DeleteInventoryModal from "../inventoryModals/DeleteInventoryModal";

export default function DeleteInventory({productId, refetchInventory}){
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const setModalOpen = () => {
        setIsDeleteModalOpen(true);
    }
    const setModalClose = () => {
        setIsDeleteModalOpen(false);
    }

    return (
        <div>
            <button
                className={'deleteButton'}
                onClick={setModalOpen}
            >
                Delete
            </button>
            {
                isDeleteModalOpen &&
                <DeleteInventoryModal
                    isModalOpen={isDeleteModalOpen}
                    setModalClose={setModalClose}
                    productId={productId}
                    refetchInventory={refetchInventory}
                />
            }
        </div>
    )
}