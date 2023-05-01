import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { Link, useParams } from 'react-router-dom';
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";

import BackIcon from '../../assets/Icons/arrow_back-24px.svg';

import '../WarehouseDetailsPage/WarehouseDetailsPage.scss';

function WarehouseDetailsPage(props) {
    const warehousesArray = props.warehousesArray
    const inventoriesArray = props.inventoriesArray
    const { WarehouseId } = useParams()

    const specificWarehouse = warehousesArray.filter((warehouse) => {
        return warehouse.id === WarehouseId
    })
    return (
        <>
            <section className="warehouse-inventory">
                <Link className="inventory-item__link btn--return" to={`/Warehouse/`}>
                    <img src={BackIcon} alt="Return Arrow Icon" />
                </Link>
                {warehousesArray.length > 0 &&
                    <WarehouseDetails specificWarehouse={specificWarehouse[0]} />
                }
                <WarehouseInventoryList inventoriesArray={inventoriesArray} specificWarehouse={specificWarehouse[0]} />
            </section>
        </>
    );
}
export default WarehouseDetailsPage;