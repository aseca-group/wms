import {useOutsideClick} from "../../../commons/UseOutsideClick";
import {useState} from "react";
import {createInventory} from "../../../api/InventoryAPI";

export default function CreateInventoryModal({isModalOpen, setModalClose, refetchInventory}) {
    const modalRef = useOutsideClick(isModalOpen, setModalClose);
    const [productId, setProductId] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleCreateInventory = async () => {
        try {
            await createInventory(productId, quantity);
            setModalClose();
            await refetchInventory();
        } catch (error) {
            console.error("Error creating inventory", error);
        }
    }

    return(
        <div
            ref={modalRef}
            className={'modifyModal'}
        >
            <p>Enter the product id:</p>
            <input
                type={'number'}
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
            />
            <p>Enter the quantity:</p>
            <input
                type={'number'}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <div className={'buttonsBox'}>
                <button
                    className={'stockButton'}
                    onClick={setModalClose}
                >
                    Cancel
                </button>
                <button
                    className={'stockButton'}
                    onClick={handleCreateInventory}
                >
                    Create
                </button>
            </div>
        </div>
    )
}