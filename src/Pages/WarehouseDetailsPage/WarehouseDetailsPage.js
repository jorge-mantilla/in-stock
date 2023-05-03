import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { Link, useParams } from 'react-router-dom';
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";

import BackIcon from '../../assets/Icons/arrow_back-24px.svg';

import '../WarehouseDetailsPage/WarehouseDetailsPage.scss';

//Gabi's ticket
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import axios from 'axios';
import {useState} from 'react';

function WarehouseDetailsPage(props) {
    const warehousesArray = props.warehousesArray
    const inventoriesArray = props.inventoriesArray
    const { WarehouseId } = useParams()

    const specificWarehouse = warehousesArray.filter((warehouse) => {
        return warehouse.id === WarehouseId
    })

    //state variables for delete modal
    const [showDelete, setShowDelete] = useState(false);
    const [selectedInventory, setSelectedInventory] = useState(null);

    //click handler for show/hide delete modal AND to grab inventory item
    function deleteClickHandler(item) {
        console.log("clicked:", item);
        setSelectedInventory(item);
        setShowDelete(!showDelete);
    }

    //used in delete modal component to actually delete inventory item AND then hide delete modal
    function handleConfirmDelete(inventory) {
        axios.delete(`http://localhost:5051/inventories/${inventory.id}`)
            .then(() => {
                console.log(`Inventory with id: ${inventory.item_name} has been deleted`);
                setShowDelete(false);
                // navigate("/inventories");
            })
            .catch((err) => {
                console.error(`Error deleting Inventory ${inventory.item_name}: ${err}`);
            });
    }

    return (
        <>
            <section className="warehouse-inventory">
                <Link className="inventory-item__link btn--return" to={`/Warehouses/`}>
                    <img src={BackIcon} alt="Return Arrow Icon" />
                </Link>
                {warehousesArray.length > 0 &&
                    <WarehouseDetails specificWarehouse={specificWarehouse[0]} />
                }
                <WarehouseInventoryList inventoriesArray={inventoriesArray} specificWarehouse={specificWarehouse[0]} deleteClickHandler={deleteClickHandler}/>

                {showDelete && <DeleteModal 
                    deleteClickHandler={deleteClickHandler} 
                    handleConfirmDelete={handleConfirmDelete} 
                    inventory={selectedInventory} 
                    context="inventory"
                />}

            </section>
        </>
    );
}
export default WarehouseDetailsPage;