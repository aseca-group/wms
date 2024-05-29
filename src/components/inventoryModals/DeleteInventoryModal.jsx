import './style.css'
import {useEffect, useRef} from "react";
import {deleteInventory} from "../../api/InventoryAPI";
import {useOutsideClick} from "../../commons/UseOutsideClick";

export default function DeleteInventoryModal({isModalOpen,setModalClose, productId}) {
    const modalRef = useOutsideClick(isModalOpen, setModalClose);

    const handleDelete = async () => {
        try {
            await deleteInventory(productId);
            setModalClose();
        } catch (error) {
            console.error("Error deleting inventory", error);
        }
    };

    return (
        <div
            ref={modalRef}
            className={'deleteModal'}
        >
            <p>Are you sure you want to delete this inventory?</p>
            <div className={'buttonsBox'}>
                <button
                    className={'stockButton'}
                    onClick={setModalClose}
                >
                    Cancel
                </button>
                <button
                    className={'deleteButton'}
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}