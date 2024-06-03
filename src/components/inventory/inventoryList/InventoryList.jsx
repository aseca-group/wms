import { getAllInventory } from "../../../api/InventoryAPI";
import { useEffect, useState } from "react";
import InventoryItem from "./InventoryItem";
import "./style.css"

export default function InventoryList({inventories, fetchInventories}) {

    return (
        <div className={'inventories'}>
            {inventories.length > 0 ? (
                inventories.map((inventory, index) => (
                    <div className={'inventoryMap'} key={index}>
                        <InventoryItem
                            productId={inventory.productId}
                            stock={inventory.stock}
                            reservedStock={inventory.reservedStock}
                            refetchInventory={fetchInventories}
                        />
                    </div>
                ))
            ) : (
                <></>
            )}
        </div>
    );
}