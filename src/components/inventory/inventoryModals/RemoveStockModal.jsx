import {useOutsideClick} from "../../../commons/UseOutsideClick";
import {useState} from "react";
import {removeStock} from "../../../api/InventoryAPI";

export default function RemoveStockModal({isModalOpen,setModalClose, productId}){
    const modalRef = useOutsideClick(isModalOpen, setModalClose);
    const [quantity, setQuantity] = useState(0);

    const handleRemoveStock = async() => {
        try{
            await removeStock(productId, quantity)
            setModalClose();
        } catch (error) {
            console.error("Error removing stock", error);
        }
    }

    return (
        <div
            ref={modalRef}
            className={'modifyModal'}
        >
            <p>How many items would you like to remove?</p>
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
                    onClick={handleRemoveStock}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}