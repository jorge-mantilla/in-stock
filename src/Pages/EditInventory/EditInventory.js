import "./EditInventory.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import AddIcon from "../../assets/Icons/arrow_back-24px.svg";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditInventory() {
    const [inventoryData, setInventoryData] = useState({});
    const { InventoryId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:5051/inventorys/${InventoryId}`)
            .then((response) => setInventoryData(response.data));
    }, [InventoryId]);

    if (Object.keys(inventoryData).length === 0) {
        return <p>Loading ... </p>;
    }

    const handleInputChange = (e) => {
        setInventoryData({ ...inventoryData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateFix = "2023-04-26 13:45:04";

        const newInventoryData = {
            ...inventoryData, updated_at: updateFix, created_at: updateFix
        }

        try {
            const response = await axios.put(
                `http://localhost:5051/inventorys/${InventoryId}`,
                JSON.stringify(newInventoryData),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )

            // Check for successful response
            if (response.status !== 200) {
                throw new Error("Network response was not ok");
            }

            console.log("Inventory edited successfully!");
        } catch (error) {
            console.error("Error editing inventory:", error);
            console.log("Response data:", error.response.data);
        }
    };

    return (
        <article className="addForm">
            <div className="addForm__tablet-header-box">
                <h1 className="addForm__header">Edit Inventory</h1>
                <Link to="../inventorys">
                    <img
                        id="inventory__btn--icon"
                        className="btn--icon"
                        src={AddIcon}
                        alt="Add Icon"
                    />
                </Link>
            </div>
            <div className="addForm__tablet-wrapper">
                <div className="addForm__tablet-form-box">
                    <div className="addForm__whd-border"></div>
                    <div className="addForm__whd-container">
                        <h2 className="addForm__subheader">Inventory Details</h2>
                        <form
                            className="addForm__wh-form"
                            onSubmit={handleSubmit}
                        // noValidate
                        >
                            <label className="addForm__label">Inventory Name</label>
                            <input
                                type="text"
                                name="inventory_name"
                                placeholder="Inventory Name"
                                value={inventoryData.inventory_name}
                                onChange={handleInputChange}
                                className="addForm__input"
                            />
                            <label className="addForm__label">Street Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Street Address"
                                value={inventoryData.address}
                                onChange={handleInputChange}
                                className="addForm__input"
                            />
                            <label className="addForm__label">City</label>
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={inventoryData.city}
                                onChange={handleInputChange}
                                className="addForm__input"
                            />
                            <label className="addForm__label">Country</label>
                            <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={inventoryData.country}
                                onChange={handleInputChange}
                                className="addForm__input"
                            />
                            <label className="addForm__label">Contact Name</label>
                            <input
                                type="text"
                                name="contact_name"
                                placeholder="Contact Name"
                                value={inventoryData.contact_name}
                                onChange={handleInputChange}
                                className="addForm__input"
                            />
                            <label className="addForm__label">Position</label>
                            <input
                                type="text"
                                name="contact_position"
                                placeholder="Position"
                                value={inventoryData.contact_position}
                                onChange={handleInputChange}
                                className="addForm__input"
                            />
                            <label className="addForm__label">Phone Number</label>
                            <input
                                type="text"
                                name="contact_phone"
                                placeholder="Phone Number"
                                value={inventoryData.contact_phone}
                                onChange={handleInputChange}
                                className="addForm__input"
                            />
                            <label className="addForm__label">Email</label>
                            <input
                                type="text"
                                name="contact_email"
                                placeholder="Email"
                                value={inventoryData.contact_email}
                                onChange={handleInputChange}
                                className="addForm__input"
                            />
                            <button className="btn btn__submit" type="submit">
                                Save
                            </button>
                            <button type="click" className="btn__cancel">
                                Cancel
                            </button>
                            {/* <img className="btn--plus" src={PlusIcon} alt="Add Icon" /> */}
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="addForm__button-box">
            </div> */}
        </article>
    );
}

export default EditInventory;