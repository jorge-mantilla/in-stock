import "./AddWarehouse.scss";
import { useState } from "react";
import axios from "axios";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import PlusIcon from "../../assets/Icons/add-24px.svg";
import { Link, useNavigate } from "react-router-dom";
const { v4: uuidv4 } = require("uuid");

function AddWarehouse() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: uuidv4(),
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the request body for required data
    if (
      formData.warehouse_name === "" ||
      formData.address === "" ||
      formData.city === "" ||
      formData.country === "" ||
      formData.contact_name === "" ||
      formData.contact_position === "" ||
      formData.contact_phone === "" ||
      formData.contact_email === ""
    ) {
      console.log("error");
      // return res.status(400).send('Please make sure to provide name, manager, address, phone and email fields in a request');
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5051/warehouses",
          formData
        );
        // handle successful response
        console.log("Warehouse added successfully!");
        navigate("/warehouses");
      } catch (error) {
        console.error("Error adding warehouse:", error);
      }
    }
  };

  return (
    <article className="addForm">
      <div className="addForm__tablet-header-box">
      <Link to="../warehouses">
          <img
            className="btn__arrow"
            src={arrow}
            alt="Add Icon"
          />
        </Link>
        <h1 className="addForm__header">Add New Warehouse</h1>
      </div>
      <div className="addForm__tablet-wrapper">
        <div className="addForm__tablet-form-box">

            <form
              className="addForm__wh-form"
              onSubmit={handleSubmit}
              noValidate
            >
          <div className="addForm__whd-border"></div>
          <div className="addForm__whd-container">
            <h2 className="addForm__subheader">Warehouse Details</h2>
              <label className="addForm__label">Warehouse Name</label>
              <input
                type="text"
                name="warehouse_name"
                placeholder="Warehouse Name"
                value={formData.warehouse_name}
                onChange={handleInputChange}
                className="addForm__input"
              />

              <label className="addForm__label">Street Address</label>
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleInputChange}
                className="addForm__input"
              />

              <label className="addForm__label">City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="addForm__input"
              />

                <label className="addForm__label">Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="addForm__input"
                />
              </div>
              <div className="addForm__whd-border"></div>
              <div className="addForm__whc-container">
              <h2 className="addForm__subheader">Contact Details</h2>

                <label className="addForm__label">Contact Name</label>
                <input
                  type="text"
                  name="contact_name"
                  placeholder="Contact Name"
                  value={formData.contact_name}
                  onChange={handleInputChange}
                  className="addForm__input"
                />

                <label className="addForm__label">Position</label>
                <input
                  type="text"
                  name="contact_position"
                  placeholder="Position"
                  value={formData.contact_position}
                  onChange={handleInputChange}
                  className="addForm__input"
                />

                <label className="addForm__label">Phone Number</label>
                <input
                  type="text"
                  name="contact_phone"
                  placeholder="Phone Number"
                  value={formData.contact_phone}
                  onChange={handleInputChange}
                  className="addForm__input"
                />

                <label className="addForm__label">Email</label>
                <input
                  type="text"
                  name="contact_email"
                  placeholder="Email"
                  value={formData.contact_email}
                  onChange={handleInputChange}
                  className="addForm__input"
                />
              </div>
              
            </form>
          </div>
        </div>
            <div className="addForm__button-box">
                <button className="btn__submiter" onClick={handleSubmit}>
                  Add Warehouse
                </button>
                <img className="btn__plus" src={PlusIcon} alt="Add Icon" />
                <Link to="/warehouses"><button type="click" className="btn__canceler">
                  Cancel
                </button>
                </Link>
          </div>
    </article>
  );
}

export default AddWarehouse;
