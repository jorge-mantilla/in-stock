import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';

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
                    <Link to={'/WarehouseDetails'}>
                    <li>{warehouse.warehouse}</li>
                    </Link>
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