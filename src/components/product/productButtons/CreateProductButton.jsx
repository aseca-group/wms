import {useState} from "react";
import CreateProductModal from "../productModals/CreateProductModal";
import './style.css'

export default function CreateProduct({refetchProducts}){
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
                isModalOpen &&
                <CreateProductModal
                    isModalOpen={isModalOpen}
                    setModalClose={setModalClose}
                    refetchProduct={refetchProducts}
                />
            }
        </div>
    )
}