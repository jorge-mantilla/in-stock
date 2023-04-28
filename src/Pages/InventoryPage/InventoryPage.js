import InventoryList from "../../components/InventoryList/InventoryList";
import { Link } from 'react-router-dom';
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import axios from "axios";

function InventoryPage(props) {

    const warehousesArray = props.warehousesArray

    const [showDelete, setShowDelete] = useState(false);
    const [selectedInventory, setSelectedInventory] = useState(null);

    function deleteHandler(item) {
        console.log("clicked:", item);
        setSelectedInventory(item);
        setShowDelete(!showDelete);
    }

    function handleDelete(inventory) {
        axios.delete(`http://localhost:5051/inventories/${inventory.id}`)
            .then(() => {
                console.log(`Inventory with id: ${inventory.item_name} has been deleted`);
                setShowDelete(false);
            })
            .catch((err) => {
                console.error(`Error deleting Inventory ${inventory.item_name}: ${err}`);
            });
    }

    return (
    <>
        <div>
            <h1>INVENTORY</h1>
            <form id="upload__form-input" className="upload__form-input" novalidate>
                <div className="upload__div">
                    <input className="upload__name__text" type="text" name="title" placeholder="Search..." required />
                </div>
                <div>
                    <Link className='link' to={'/'}>
                        <button type="submit">Add New Item</button>
                    </Link>
                </div>
            </form>
        </div>
        <InventoryList warehousesArray={warehousesArray} deleteHandler={deleteHandler} />
        {showDelete && <DeleteModal deleteHandler={deleteHandler} inventory={selectedInventory} handleDelete={handleDelete} context="inventory"/>}
    </>
);
}
export default InventoryPage;
