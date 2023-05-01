// import InventoryItem from "../../components/InventoryItem/InventoryItem";
import StockNotif from '../../components/StockNotif/StockNotif.js';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";


import './InventoryDetailsPage.scss';

import BackIcon from '../../assets/Icons/arrow_back-24px.svg';
import EditIcon from '../../assets/Icons/edit-white-24px.svg';

function InventoryDetailsPage({ warehousesArray }) {

    const { inventoryId } = useParams();
    const [inventoryItem, setInventoryItem] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5051/inventories/${inventoryId}`).then((response) => {
            setInventoryItem(response.data);
        });
    }, [inventoryId]);

    console.log("inventoryItem state:", inventoryItem);

    const warehouse = inventoryItem && warehousesArray.find(
        (warehouse) => warehouse.id === inventoryItem.warehouse_id
    );

    console.log("warehousesArray prop:", warehousesArray);
    console.log("Found warehouse:", warehouse);


    return (
        inventoryItem && (
            <>
                <section className="inventory-item">
                    <div className="inventory-item__body">
                        <div className="inventory-item__sec">
                            <div className="inventory-item__header">
                                <Link className="inventory-item__link btn--return" to="/Inventories">
                                    <img src={BackIcon} alt="" />
                                </Link>
                                <h1 className="inventory-item__title">{inventoryItem.item_name}</h1>
                            </div>

                            <Link to={'/EditInventoryForm'} id="btn--edit" className="inventory-item__btn " type="submit">
                                <img id="btn--icon" src={EditIcon} alt="Edit Icon" />
                                <p id="btn--text">Edit</p>
                            </Link>

                        </div>
                        <div className="inventory-item__sec">
                            <div className="inventory-item__info">
                                <div className="inventory-item__info--data">
                                    <div className="inventory-item__info--sec">
                                        <div className="inventory-item__info--opt">
                                            <h4 className="inventory-item__subtitle">ITEM DESCRIPTION:</h4>
                                            <p className="inventory-item__text">{inventoryItem.description}</p>
                                        </div>
                                    </div>
                                    <div className="inventory-item__info--sec">
                                        <div className="inventory-item__info--opt">
                                            <h4 className="inventory-item__subtitle">CATEGORY:</h4>
                                            <p className="inventory-item__text">{inventoryItem.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="inventory-item__info--data">
                                    <div className="inventory-item__info--sec">
                                        <div className="inventory-item__info--opt">
                                            <h4 className="inventory-item__subtitle">STATUS:</h4>
                                            <StockNotif quantity={inventoryItem.quantity} />
                                        </div>
                                        <div className="inventory-item__info--opt">
                                            <h4 className="inventory-item__subtitle">QUANTITY:</h4>
                                            <p className="inventory-item__text">{inventoryItem.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="inventory-item__info--sec">
                                        <div className="inventory-item__info--opt">
                                            <h4 className="inventory-item__subtitle">WAREHOUSE:</h4>
                                            <p className="inventory-item__text">{warehouse && warehouse.warehouse_name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    );
}
export default InventoryDetailsPage;