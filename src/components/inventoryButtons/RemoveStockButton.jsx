import {useState} from "react";
import "./style.css"

export default function RemoveStock(){
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
        </div>
    )
}