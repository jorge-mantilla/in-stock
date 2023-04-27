import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function InventoryList() {
    const [inventoriesArray, setInventoriesArray] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5051/inventories`).then((response) => {
            setInventoriesArray(response.data)
        })
    }, []);

    // const warehouse = inventoriesArray.filter((inventory) => { 
    //     return inventory.warehouse_id == videoToDisplay
    // })
    
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
                    <li>{inventory.warehouse_id}</li>
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