import {useOutsideClick} from "../../../commons/UseOutsideClick";
import {useState} from "react";
import {createProduct} from "../../../api/ProductAPI";
import './productModalsStyle.css'

export default function CreateProductModal({isModalOpen,setModalClose, refetchProduct}){
    const modalRef = useOutsideClick(isModalOpen, setModalClose);
    const [price, setPrice] = useState(1);
    const [name, setName] = useState("product");

    const handleCreateProduct = async() => {
        try{
            await createProduct(price, name);
            await refetchProduct();
            setModalClose();

        } catch (error) {
            console.error("Error creating product", error);
        }
    }

    return (
        <div
            ref={modalRef}
            className={'createModal'}
        >
            <p>Enter the product name:</p>
            <input
                type={'text'}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Enter the product price:</p>
            <input
                type={'number'}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
                    onClick={handleCreateProduct}
                >
                    Create
                </button>
            </div>
        </div>
    )
}