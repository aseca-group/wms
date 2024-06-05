import {useState} from "react";
import DeleteProductModal from "../productModals/DeleteProductModal";

export default function DeleteProduct({productId, refetchProduct}){
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const setModalOpen = () => {
        setIsDeleteModalOpen(true);
    }
    const setModalClose = () => {
        setIsDeleteModalOpen(false);
    }

    return (
        <div>
            <button
                className={'deleteButton'}
                onClick={setModalOpen}
            >
                Delete
            </button>
            {
                isDeleteModalOpen && (<DeleteProductModal productId={productId} isModalOpen={isDeleteModalOpen} refetchProduct={refetchProduct} setModalClose={setModalClose}/>)
            }
        </div>
    )
}