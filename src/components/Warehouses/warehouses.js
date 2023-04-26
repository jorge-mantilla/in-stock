import axios from "axios";
import { useState } from "react";

function Warehouses() {
    const [warehousesArray, setWarehousesArray] = useState([])

    useEffect(() => {
        axios.get(``).then((response) => {
        setWarehousesArray(response.data)
        })
    }, []);
    return (
    <>
        <div>
            {warehousesArray.map((warehouse) => {
                <ul>
                    <li>{warehouse.warehouse}</li>
                    <li>{warehouse.address}</li>
                    <li>{warehouse.contactName}</li>
                    <li>{warehouse.contactInformation}</li>
                    <li>ACTIONS</li>
                </ul>
            })
            }
        </div>
    </>
);
}
export default Warehouses;