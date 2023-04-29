import { Link } from 'react-router-dom';

import '../Warehouses/Warehouses.scss';

import ArrowRightIcon from '../../assets/Icons/chevron_right-24px.svg';
import DeleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import EditIcon from '../../assets/Icons/edit-blue-24px.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';



function Warehouses() {
    const [warehousesArray, setWarehousesArray] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5051/warehouses`).then((response) => {
            setWarehousesArray(response.data)
        })
    }, []);

    return (
        <>
            {warehousesArray.map((warehouse) => {
                return (

                    <article className="warehouse-data">
                        <div className="warehouse-data__body">
                            <div className="warehouse-data__header">
                                <div className="warehouse-data__opt">
                                    <div className="warehouse-data__sec">
                                        <h4 className="warehouse-data__title">WAREHOUSE</h4>
                                        <Link className="warehouse-data__link" to={`/warehouseDetails/${warehouse.id}`}>
                                            <p className="warehouse-data__link--text">{warehouse.warehouse_name}</p>
                                            <img className="warehourse-data__link--arrow-icon btn--goto" src={ArrowRightIcon} alt="More Details Arrow Icon" />
                                        </Link>
                                    </div>
                                    <div className="warehouse-data__sec">
                                        <h4 className="warehouse-data__title">ADDRESS</h4>
                                        <p className="warehouse-data--text">{warehouse.address}</p>
                                    </div>
                                </div>
                                <div className="warehouse-data__opt">
                                    <div className="warehouse-data__sec">
                                        <h4 className="warehouse-data__title">CONTACT NAME</h4>
                                        <p className="warehouse-data--text">{warehouse.contact_name}</p>
                                    </div>
                                    <div className="warehouse-data__sec">
                                        <h4 className="warehouse-data__title">CONTACT INFORMATION</h4>
                                        <p className="warehouse-data--text">{warehouse.contact_phone}</p>
                                        <p className="warehouse-data--text">{warehouse.contact_email}</p>
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
            })
            }
        </>
    );
}
export default Warehouses;