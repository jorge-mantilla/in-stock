import InventoryDelete from "../../components/InventoryDelete/InventoryDelete";
import InventoryList from "../../components/InventoryList/InventoryList";
import { Link } from 'react-router-dom';
import { useState } from "react";

function InventoryPage(props) {

    const warehousesArray = props.warehousesArray;
    const [showInventoryDelete, setShowInventoryDelete] = useState(false);

    function deleteHandler(item) {
        console.log("clicked:", item);
        setShowInventoryDelete(!showInventoryDelete);
    }

    return (
        <>
            <div>
                <h1>INVENTORY</h1>
                <form id="upload__form-input" className="upload__form-input" novalidate>
                    <div className="upload__div">
                        {/* <label className="upload__name__type" for="title">TITLE YOUR VIDEO</label> */}
                        <input className="upload__name__text" type="text" name="title" placeholder="Search..." required />
                    </div>
                    <div>
                        <Link className='link' to={'/'}>
                            <button type="submit">Add New Item</button>
                        </Link>
                    </div>
                </form>
            </div>
            <InventoryList  warehousesArray={warehousesArray}/>
            {showInventoryDelete && <InventoryDelete deleteHandler={deleteHandler}/>}
        </>
    )
}

export default InventoryPage;