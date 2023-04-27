import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Warehouses(props) {
    // const [warehousesArray, setWarehousesArray] = useState([])

    // useEffect(() => {
    //     axios.get(`http://localhost:5051/warehouses`).then((response) => {
    //         setWarehousesArray(response.data)
    //     })
    // }, []);
    
    const warehousesArray = props.warehousesArray

    return (
    <>
        <div>
            {warehousesArray.map((warehouse) => {
                return (
                <ul>
                    <Link to={'/WarehouseDetails'}>
                    <li>{warehouse.warehouse_name}</li>
                    </Link>
                    <li>{warehouse.address}</li>
                    <li>{warehouse.contact_name}</li>
                    <li>{warehouse.contact_phone} <br /> {warehouse.contact_email}</li>
                    <li>ACTIONS</li>
                </ul>
                )
            })
            }
        </div>
    </>
);
}
export default Warehouses;