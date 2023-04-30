import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { Link, useParams } from 'react-router-dom';
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";

function WarehouseDetailsPage(props) {
    const warehousesArray = props.warehousesArray
    const inventoriesArray = props.inventoriesArray
    const {WarehouseId} = useParams()

    const specificWarehouse = warehousesArray.filter((warehouse) => {
        return warehouse.id === WarehouseId
})
    return (
    <>
        <Link to={`/Warehouse/`}>
            <img alt="back arrow" />
        </Link>
        {warehousesArray.length > 0 &&
            <WarehouseDetails specificWarehouse={specificWarehouse[0]}/>
        }
        <WarehouseInventoryList inventoriesArray={inventoriesArray} specificWarehouse={specificWarehouse[0]} />
    </>
);
}
export default WarehouseDetailsPage;