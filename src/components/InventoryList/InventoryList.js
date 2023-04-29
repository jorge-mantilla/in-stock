import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../InventoryList/InventoryList.scss';
import ArrowRightIcon from '../../assets/Icons/chevron_right-24px.svg';
import DeleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import EditIcon from '../../assets/Icons/edit-blue-24px.svg';

function InventoryList(props) {
    const [InventoryArray, setInventoryArray] = useState([])
    const deleteHandler = props.deleteHandler

    useEffect(() => {
        axios.get(`http://localhost:5051/inventories`).then((response) => {
            setInventoryArray(response.data)
        })
    }, []);

    return (
        <>
            {InventoryArray.map((inventory) => {
                return (
                    <article className="inventory-data">
                        <div className="inventory-data__body">
                            <div className="inventory-data__header">
                                <div className="inventory-data__opt">
                                    <div className="inventory-data__sec">
                                        <h4 className="inventory-data__title">inventory</h4>
                                        <Link className="inventory-data__link" to='/inventoryDetails'>
                                            <p className="inventory-data__link--text">{inventory.item_name}</p>
                                            <img className="warehouse-data__link--arrow-icon btn--goto" src={ArrowRightIcon} alt="More Details Arrow Icon" />
                                        </Link>
                                    </div>
                                    <div className="inventory-data__sec">
                                        <h4 className="inventory-data__title">CATEGORY</h4>
                                        <p className="inventory-data--text">{inventory.category}</p>
                                    </div>
                                </div>
                                <div className="inventory-data__opt">
                                    <div className="inventory-data__sec">
                                        <h4 className="inventory-data__title">STATUS</h4>
                                        <p className="inventory-data--text">{inventory.status}</p>
                                    </div>
                                    <div className="inventory-data__sec">
                                        <h4 className="inventory-data__title">QUANTITY</h4>
                                        <p className="inventory-data--text">{inventory.quantity}</p>
                                    </div>
                                    <div className="inventory-data__sec">
                                        <h4 className="inventory-data__title">WAREHOUSE</h4>
                                        <p className="inventory-data--text">{inventory.warehouse_name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="inventory-data__footer">
                                <button onClick={()=>deleteHandler(inventory)}>
                                    <img src={DeleteIcon} alt="Delete Icon" />
                                </button>

                                <Link className="inventory-data__footer--icon" to={'/EDIT THIS SPECIFIC inventory'}>
                                    < img src={EditIcon} alt="Edit Icon" />
                                </Link>
                            </div>
                        </div>
                    </article>
                )
            })
            }
        </>
    );
}
export default InventoryList;