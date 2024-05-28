import { getAllInventory } from "../../api/InventoryAPI";
import { useEffect, useState } from "react";
import InventoryItem from "./InventoryItem";

export default function InventoryList() {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        getAllInventory()
            .then(data => setInventories(data))
            .catch(error => console.error('Error fetching inventories', error));
    }, []);

    return (
        <div>
            {inventories.length > 0 ? (
                inventories.map((inventory, index) => (
                    <div className={'inventoryMap'} key={index}>
                        <InventoryItem productId={inventory.productId} stock={inventory.stock} reservedStock={inventory.reservedStock}/>
                    </div>
                ))
            ) : (
                <></>
            )}
        </div>
    );
}