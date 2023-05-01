import { Link } from 'react-router-dom';
import './WarehouseDetails.scss';
import ArrowRightIcon from '../../assets/Icons/chevron_right-24px.svg';
import DeleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import EditIcon from '../../assets/Icons/edit-blue-24px.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

function WarehouseDetails(props) {

    const specificWarehouse = props.specificWarehouse

    // console.log("HELLLOOOOOO", specificWarehouse);

    return (
    <>
        <div>
            <div>
                <h3>Warehouse Address</h3>
                <div>{specificWarehouse.address}</div>
            </div>
            <div>
                <h3>Contact Name</h3>
                <div>{specificWarehouse.warehouse_name}</div>
            </div>
            <div>
                <h3>Contact Information</h3>
                <div>{specificWarehouse.contact_phone} <br/> {specificWarehouse.contact_email}</div>
            </div>
        </div>
    </>
);
}
export default WarehouseDetails;