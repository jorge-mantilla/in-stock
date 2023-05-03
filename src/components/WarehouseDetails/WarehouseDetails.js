import { Link } from 'react-router-dom';
import './WarehouseDetails.scss';
import EditIcon from '../../assets/Icons/edit-blue-24px.svg';
import BackIcon from '../../assets/Icons/arrow_back-24px.svg'

function WarehouseDetails(props) {

    const specificWarehouse = props.specificWarehouse

    // console.log("HELLLOOOOOO", specificWarehouse);

    return (
        <>
               <div className="inventory-item__sec">
                            <div className="inventory-item__header">
                                <Link className="inventory-item__link btn--return" to="/Warehouses">
                                    <img src={BackIcon} alt="" />
                                </Link>
                                <h1 className="inventory-item__title">{specificWarehouse.warehouse_name}</h1>
                            </div>

                            <Link to='/EditWarehouse/:WarehouseId' id="btn--edit" className="inventory-item__btn " type="submit">
                                <img id="btn--icon" src={EditIcon} alt="Edit Icon" />
                                <p id="btn--text">Edit</p>
                            </Link>

                        </div>
            <div className='warehousedetails'>

                <div className='warehousedetails__header'>
                    <h4>WAREHOUSE ADDRESS:</h4>
                    <p className='warehousedetails__location'>{specificWarehouse.address}, <br /> {specificWarehouse.city}, {specificWarehouse.country}</p>
                </div>
                <div className='warehousedetails__container'>
                    <div className='warehousedetails__contain'>
                        <div className='warehousedetails__containerleft'>
                            <h4>CONTACT NAME:</h4>
                            <p>{specificWarehouse.warehouse_name}<br />{specificWarehouse.contact_position}</p>
                        </div>
                        <div className='warehousedetails__containerright'>
                            <h4>CONTACT INFORMATION:</h4>
                            <p>{specificWarehouse.contact_phone} <br /> {specificWarehouse.contact_email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default WarehouseDetails;