import {useState} from "react";
import CreateProductModal from "../createModals/CreateProductModal";

export default function CreateProduct(){
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
                Create Product
            </button>
            {
                isModalOpen && <CreateProductModal isModalOpen={isModalOpen} setModalClose={setModalClose}/>
            }
        </div>
    )
}