import {useEffect, useRef, useState} from "react";
import {useOutsideClick} from "../../commons/UseOutsideClick";
import {addInventoryStock} from "../../api/InventoryAPI";

export default function AddStockModal({isModalOpen,setModalClose, productId}){
    const modalRef = useOutsideClick(isModalOpen, setModalClose);
    const [quantity, setQuantity] = useState(0);

    const handleAddStock = async () => {
        try {
            await addInventoryStock(productId,quantity)
            setModalClose();
        } catch (error) {
            console.error("Error adding stock", error);
        }
    }

    return (
        <div
            ref={modalRef}
            className={'modifyModal'}
        >
            <p>How many items would you like to add?</p>
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
                    onClick={handleAddStock}
                >
                    Add
                </button>
            </div>
        </div>
    )

}