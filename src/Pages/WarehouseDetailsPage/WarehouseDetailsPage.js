import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { Link, useParams } from 'react-router-dom';

function WarehouseDetailsPage(props) {
    const warehousesArray = props.warehousesArray
    const {WarehouseId} = useParams()

    const specificWarehouse = warehousesArray.filter((warehouse) => {
        return warehouse.id === WarehouseId
})
    console.log("THISTHISTHIS", warehousesArray);
    return (
    <>
        <Link to={`/Warehouse/`}>
            <img alt="back arrow" />
        </Link>
        {warehousesArray.length > 0 &&
            <WarehouseDetails specificWarehouse={specificWarehouse[0]} />
        }
    </>
);
}
export default WarehouseDetailsPage;