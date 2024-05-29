import {useOutsideClick} from "../../commons/UseOutsideClick";
import {useState} from "react";
import {createProduct} from "../../api/ProductAPI";

export default function CreateProductModal({isModalOpen,setModalClose}){
    const modalRef = useOutsideClick(isModalOpen, setModalClose);
    const [price, setPrice] = useState(1);
    const [name, setName] = useState("product");

    const handleCreateProduct = async() => {
        try{
            await createProduct(price, name);
            setModalClose();
        } catch (error) {
            console.error("Error creating product", error);
        }
    }

    return (
        <div
            ref={modalRef}
            className={'modifyModal'}
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