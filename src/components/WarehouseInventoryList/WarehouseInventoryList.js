import ArrowRightIcon from '../../assets/Icons/chevron_right-24px.svg';
import DeleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import EditIcon from '../../assets/Icons/edit-blue-24px.svg';
import { Link } from 'react-router-dom';

function WarehouseInventoryList(props) {

    const inventoriesArray = props.inventoriesArray
    const specificWarehouse = props.specificWarehouse

    const specificWarehouseInventory = inventoriesArray.filter((warehouseInventory) => {
        return warehouseInventory.warehouse_name === specificWarehouse.warehouse_name
})

// console.log(specificWarehouseInventory[0]);

    return (
        <>
            {specificWarehouseInventory.map((inventory) => {
                return (
                    <article className="warehouse-data" >
                        <div className="warehouse-data__body">
                            <div className="warehouse-data__header">
                                <div className="warehouse-data__opt">
                                    <div className="warehouse-data__sec">
                                        <h4 className="warehouse-data__title">IVENTORY ITEM</h4>
                                        <p className="warehouse-data--text">{inventory.item_name}</p>
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
            )}
            )}
        </>
    );
}
export default WarehouseInventoryList;

{/* //                  <div>
                //         <div>{inventory.item_name}</div>
                //         <div>{inventory.category}</div>
                //         <div>{inventory.status}</div>
                //         <div>{inventory.quantity}</div>
                //     </div>
                //  */}