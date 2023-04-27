import Warehouses from "../../components/Warehouses/Warehouses";
// import { useEffect } from "react";
import { Link } from 'react-router-dom';


function WarehousePage(props) {
    const warehousesArray = props.warehousesArray

    return (
    <>
        <div>
            <h1>WAREHOUSES</h1>
            <form id="upload__form-input" className="upload__form-input" novalidate>
                <div className="upload__div">
                    {/* <label className="upload__name__type" for="title">TITLE YOUR VIDEO</label> */}
                    <input className="upload__name__text" type="text" name="title" placeholder="Search..." required />
                </div>
                <div>
                    <Link className='link' to={'/'}>
                        <button type="submit">Add New Warehouse</button>
                    </Link>
                </div>
            </form>
        </div>
        <Warehouses warehousesArray={warehousesArray} />
    </>
);
}
export default WarehousePage;