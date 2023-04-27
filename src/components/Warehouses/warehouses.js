import { Link } from 'react-router-dom';

function Warehouses(props) {
    
    const warehousesArray = props.warehousesArray

    console.log("this is my WAREARRAY at WAREHOUSES", warehousesArray);

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