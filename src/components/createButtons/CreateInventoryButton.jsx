import {useState} from "react";
import "./style.css"
import CreateInventoryModal from "../createModals/CreateInventoryModal";

export default function CreateInventory(){
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
                isModalOpen && <CreateInventoryModal isModalOpen={isModalOpen} setModalClose={setModalClose}/>
            }
        </div>
    )
}