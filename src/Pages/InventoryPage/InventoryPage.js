import InventoryList from "../../components/InventoryList/InventoryList";
import { Link } from 'react-router-dom';
import '../InventoryPage/InventoryPage.scss';

// import inventory from "../../components/inventory/inventory.js";
import AddIcon from '../../assets/Icons/add-24px.svg';
import SortIcon from "../../assets/Icons/sort-24px.svg";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import axios from "axios";

function InventoryPage(props) {

    const inventoryArray = props.inventoryArray

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
            <section className="inventory">
                <div className="inventory__body">
                    <div className="inventory__nav">
                        <div className="inventory__cont">
                            <div className="inventory__header">
                                <h1 className="inventory__title">Inventory</h1>
                            </div>
                        </div>

                        <form className="inventory__form" noValidate>
                            <div className="inventory__sec">
                                <div className="inventory__search">
                                    <input className="inventory__textbox" type="text" name="title" placeholder="Search..." required />
                                </div>
                            </div>
                            <div className="inventory__sec">
                                <Link className="inventory__upload-link" to={'/AddInventoryForm'}>
                                    <button id='warehouse__btn' className="btn" type="submit">
                                        <img id='warehouse__btn--icon' className="btn--icon" src={AddIcon} alt="Add Icon" />
                                        <p className="btn--text">Add New Item</p>
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>

                    <section className="inventory__sort">
                        <ul className="inventory__sort--body">
                            <li className="inventory__sort--opt">
                                <h4 className="inventory__sort--text">INVENTORY ITEM</h4>
                                <img className="inventory__sort--icon" src={SortIcon} alt="Warehouse Sort Icon" />
                            </li>
                            <li className="inventory__sort--opt">
                                <h4 className="inventory__sort--text">CATEGORY</h4>
                                <img className="inventory__sort--icon" src={SortIcon} alt="Address Sort Icon" />
                            </li>
                            <li className="inventory__sort--opt">
                                <h4 className="inventory__sort--text">STATUS</h4>
                                <img className="inventory__sort--icon" src={SortIcon} alt=" Contact Name Sort Icon" />
                            </li>
                            <li className="inventory__sort--opt">
                                <h4 className="inventory__sort--text">QTY</h4>
                                <img className="inventory__sort--icon" src={SortIcon} alt="Contact Information Sort Icon" />
                            </li>
                            <li className="inventory__sort--opt">
                                <h4 className="inventory__sort--text">WAREHOUSE</h4>
                                <img className="inventory__sort--icon" src={SortIcon} alt="Contact Information Sort Icon" />
                            </li>
                            <li className="inventory__sort--opt">
                                <h4 className="inventory__sort--text">ACTIONS</h4>
                            </li>
                        </ul>
                    </section>
                    <InventoryList deleteHandler={deleteHandler} warehousesArray={props.warehousesArray} />
                    {showDelete && <DeleteModal deleteHandler={deleteHandler} inventory={selectedInventory} handleDelete={handleDelete} context="inventory" />}
                </div >
<<<<<<< HEAD

                <InventoryList deleteClickHandler={deleteClickHandler} />

                {showDelete && <DeleteModal 
                    deleteClickHandler={deleteClickHandler} 
                    handleDelete={handleDelete} 
                    inventory={selectedInventory} 
                    context="inventory"
                />}

=======
>>>>>>> develop
            </section >
        </>
    );
}
export default InventoryPage;

// warehousesArray={warehousesArray}
