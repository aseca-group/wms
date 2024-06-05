import {useOutsideClick} from "../../../commons/UseOutsideClick";
import {deleteProduct} from "../../../api/ProductAPI";
import './productModalsStyle.css';

export default function DeleteProductModal({productId, refetchProduct,isModalOpen, setModalClose}) {
    const modalRef = useOutsideClick(isModalOpen, setModalClose);

    const handleDelete = async () => {
        try {
            await deleteProduct(productId);
            setModalClose();
            await refetchProduct();
        } catch (error) {
            console.error("Error deleting product", error);
        }
    };

    return (
        <div
            ref={modalRef}
            className={'deleteModal'}
        >
            <p>Are you sure you want to delete this inventory?</p>
            <div className={'buttonsBox'}>
                <button
                    className={'stockButton'}
                    onClick={setModalClose}
                >
                    Cancel
                </button>
                <button
                    className={'deleteButton'}
                    onClick={handleDelete}
                >
                    Delete product
                </button>
            </div>
        </div>
    )
}