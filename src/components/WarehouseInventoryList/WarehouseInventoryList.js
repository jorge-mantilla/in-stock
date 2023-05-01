import ArrowRightIcon from '../../assets/Icons/chevron_right-24px.svg';
import DeleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import EditIcon from '../../assets/Icons/edit-blue-24px.svg';
import { Link } from 'react-router-dom';

import '../WarehouseInventoryList/WarehouseInventoryList.scss';

function WarehouseInventoryList(props) {

    const inventoriesArray = props.inventoriesArray
    const specificWarehouse = props.specificWarehouse

    const specificWarehouseInventory = inventoriesArray.filter((warehouseInventory) => {
        return warehouseInventory.warehouse_name === specificWarehouse.warehouse_name
    })

    return (
        <>
            {specificWarehouseInventory.map((inventory) => {
                return (
                    <article className="warehouse-data" key={inventory.id} >
                        <div className="warehouse-data__body">
                            <div className="warehouse-data__header">
                                <div className="warehouse-data__opt">
                                    <div className="warehouse-data__sec">
                                        <h4 className="warehouse-data__title">INVENTORY ITEM</h4>
                                        <Link to={`/inventoryDetails/${inventory.id}`}>
                                            <p className="warehouse-data--text">{inventory.item_name}</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="warehouse-data__opt">
                                    <div className="warehouse-data__sec">
                                        <h4 className="warehouse-data__title">CATEGORY</h4>
                                        <p className="warehouse-data--text">{inventory.category}</p>
                                    </div>
                                    <div className="warehouse-data__sec">
                                        <h4 className="warehouse-data__title">STATUS</h4>
                                        <p className="warehouse-data--text">{inventory.status}</p>
                                    </div>
                                    <div className="warehouse-data__sec">
                                        <h4 className="warehouse-data__title">QUANTITY</h4>
                                        <p className="warehouse-data--text">{inventory.quantity}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="warehouse-data__footer">
                                <img src={DeleteIcon} alt="Delete Icon" />
                                <Link className="warehouse-data__footer--icon" to={'/EditWarehouse'}>
                                    < img src={EditIcon} alt="Edit Icon" />
                                </Link>
                            </div>
                        </div>
                    </article>
                )
            }
            )}
        </>
    );
}
export default WarehouseInventoryList;