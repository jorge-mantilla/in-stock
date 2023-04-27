import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function InventoryList(props) {
    const warehousesArray = props.warehousesArray

    const [inventoriesArray, setInventoriesArray] = useState([])

    useEffect(() => {
        if (warehousesArray) {
            axios.get(`http://localhost:5051/inventories`).then((response) => {
                const inventories = response.data.map((inventory) => {
                    const inventoryWarehouse = warehousesArray.find((warehouse) => {
                        console.log("this is my WAREHOUSE", warehouse)
                        return inventory.warehouse_id === warehouse.id
                    })
                    return {...inventory, warehouse_name: inventoryWarehouse.warehouse_name}
                })
                setInventoriesArray(inventories)
            })
        }
    }, [warehousesArray]);
    
    return (
    <>
        <div>
            {inventoriesArray.map((inventory) => {
                return (
                <ul>
                    <Link to={'/InventoryDetails'}>
                    <li>{inventory.item_name}</li>
                    </Link>
                    <li>{inventory.category}</li>
                    <li>{inventory.status}</li>
                    <li>{inventory.quantity}</li>
                    <li>{inventory.warehouse_name}</li>
                    <li>ACTIONS</li>
                </ul>
                )
            })
            }
        </div>
    </>
);
}
export default InventoryList;