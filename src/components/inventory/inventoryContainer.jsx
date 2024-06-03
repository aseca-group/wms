import InventoryList from "./inventoryList/InventoryList";
import './inventoryStyle.css'
import {useEffect, useState} from "react";
import {getAllInventory} from "../../api/InventoryAPI";
import CreateInventory from "./inventoryButtons/CreateInventoryButton";

export default function Inventory(){
    const [inventories, setInventories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchInventories = async () => {
        setIsLoading(true);
        try {
            const data = await getAllInventory();
            setInventories(data);
        } catch (error) {
            console.error('Error fetching inventories', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchInventories().then(r => console.log("inventory fetched")); // Initial fetch

        const intervalId = setInterval(fetchInventories, 30000); // Fetch every 30 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return(
        <div className={'container'}>
            <div className={'inventoryHeaderContainer'}>
                <p className={'textContainer'}>
                    Inventory list
                </p>
                <CreateInventory fetchInventories={fetchInventories}/>
            </div>
            <div className={'inventoryListContainer'}>
                <InventoryList inventories={inventories} fetchInventories={fetchInventories}/>
            </div>

        </div>
    )
}