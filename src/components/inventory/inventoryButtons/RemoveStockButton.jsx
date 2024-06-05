import {useState} from "react";
import "./style.css"
import RemoveStockModal from "../inventoryModals/RemoveStockModal";

export default function RemoveStock({productId, refetchInventory}){
    const [isRemoveStockModalOpen, setIsRemoveStockModalOpen] = useState(false);

    const setModalOpen = () => {
        setIsRemoveStockModalOpen(true);
    }
    const setModalClose = () => {
        setIsRemoveStockModalOpen(false);
    }

    return(
        <div>
            <button
                className={'stockButton'}
                onClick={setModalOpen}
            >
                Remove Stock
            </button>
            {
                isRemoveStockModalOpen &&
                <RemoveStockModal
                    isModalOpen={isRemoveStockModalOpen}
                    setModalClose={setModalClose}
                    productId={productId}
                    refetchInventory={refetchInventory}
                />
            }
        </div>
    )
}