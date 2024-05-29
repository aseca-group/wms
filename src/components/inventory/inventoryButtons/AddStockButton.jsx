import {useState} from "react";
import "./style.css"
import AddStockModal from "../inventoryModals/AddStockModal";

export default function AddStock({productId}){
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const setModalOpen = () => {
        setIsAddModalOpen(true);
    }
    const setModalClose = () => {
        setIsAddModalOpen(false);
    }

    return(
        <div>
            <button
                className={'stockButton'}
                onClick={setModalOpen}
            >
                Add Stock
            </button>
            {
                isAddModalOpen && <AddStockModal isModalOpen={isAddModalOpen} setModalClose={setModalClose} productId={productId}/>
            }
        </div>
    )
}