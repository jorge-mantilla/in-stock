import "./EditWarehouse.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditWarehouse() {
  const [warehouseData, setWarehouseData] = useState({});
  const { WarehouseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5051/warehouses/${WarehouseId}`)
      .then((response) => setWarehouseData(response.data));
  }, [WarehouseId]);

  if (Object.keys(warehouseData).length === 0) {
    return <p>Loading ... </p>;
  }

  const handleInputChange = (e) => {
    setWarehouseData({ ...warehouseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateFix = "2023-04-26 13:45:04";

    const newWarehouseData = {
      ...warehouseData,
      updated_at: updateFix,
      created_at: updateFix,
    };

    try {
      const response = await axios.put(
        `http://localhost:5051/warehouses/${WarehouseId}`,
        JSON.stringify(newWarehouseData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check for successful response
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      console.log("Warehouse edited successfully!");
      navigate("/warehouses");
    } catch (error) {
      console.error("Error editing warehouse:", error);
      console.log("Response data:", error.response.data);
    }
  };

  return (
    <article className="editForm">
      <div className="editForm__tablet-header-box">
        <h1 className="editForm__header">Edit Warehouse</h1>
        <Link to="../warehouses">
          <img
            className="btn__arrow"
            src={arrow}
            alt="Add Icon"
          />
        </Link>
      </div>
      <div className="editForm__whd-border"></div>
      <div className="editForm__tablet-wrapper">
        <form
          className="editForm__wh-form"
          onSubmit={handleSubmit}
          // noValidate
        >
          <div className="editForm__whd-container">
            <h2 className="editForm__subheader">Warehouse Details</h2>
            <label className="editForm__label">Warehouse Name</label>
            <input
              type="text"
              name="warehouse_name"
              placeholder="Warehouse Name"
              value={warehouseData.warehouse_name}
              onChange={handleInputChange}
              className="editForm__input"
            />
            <label className="editForm__label">Street Address</label>
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={warehouseData.address}
              onChange={handleInputChange}
              className="editForm__input"
            />
            <label className="editForm__label">City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={warehouseData.city}
              onChange={handleInputChange}
              className="editForm__input"
            />
            <label className="editForm__label">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={warehouseData.country}
              onChange={handleInputChange}
              className="editForm__input"
            />
          </div>
          <div className="editForm__whd-border"></div>

          <div className="editForm__whc-container">
            <h2 className="editForm__subheader">Contact Details</h2>

            <label className="editForm__label">Contact Name</label>
            <input
              type="text"
              name="contact_name"
              placeholder="Contact Name"
              value={warehouseData.contact_name}
              onChange={handleInputChange}
              className="editForm__input"
            />
            <label className="editForm__label">Position</label>
            <input
              type="text"
              name="contact_position"
              placeholder="Position"
              value={warehouseData.contact_position}
              onChange={handleInputChange}
              className="editForm__input"
            />
            <label className="editForm__label">Phone Number</label>
            <input
              type="text"
              name="contact_phone"
              placeholder="Phone Number"
              value={warehouseData.contact_phone}
              onChange={handleInputChange}
              className="editForm__input"
            />
            <label className="editForm__label">Email</label>
            <input
              type="text"
              name="contact_email"
              placeholder="Email"
              value={warehouseData.contact_email}
              onChange={handleInputChange}
              className="editForm__input"
            />
          </div>
        </form>
      </div>
      <div className="editForm__button-box">
            <button className="btn btn__submit" type="submit" onClick={handleSubmit}>
              Save
            </button>
            
            <button  className="btn__cancelee">
              <Link to="/">
              Cancel
              </Link>
            </button>
            </div>
    </article>
  );
}

export default EditWarehouse;
