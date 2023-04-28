import { Link } from 'react-router-dom';

function Warehouses(props) {
    
    const warehousesArray = props.warehousesArray

    return (
    <>
        <div>
            {warehousesArray.map((warehouse) => {
                return (
                <ul key={warehouse.id}>
                    <Link to={`/WarehouseDetails/${warehouse.id}`}>
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