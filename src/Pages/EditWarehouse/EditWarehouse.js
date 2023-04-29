import "./EditWarehouse.scss";
import { useState } from "react";
import AddIcon from '../../assets/Icons/arrow_back-24px.svg';
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

function EditWarehouse() {
  const [formData, setFormData] = useState({
    warehouseName: "",
    streetAddress: "",
    city: "",
    country: "",
    contactName: "",
    position: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/warehouse", {
        method: "PUT", // Change method to PUT
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      // handle successful response
      console.log("Warehouse edited successfully!");
    } catch (error) {
      console.error("Error editing warehouse:", error);
    }
  };

  return (
    <article className="editForm">
      <div className="editForm__tablet-header-box">
      <h1 className="editForm__header">Edit Warehouse</h1>
      <Link to="../warehouses">
        <img
          id="warehouse__btn--icon"
          className="btn--icon"
          src={AddIcon}
          alt="Add Icon"
        />
      </Link>
      </div>
      <div className="editForm__tablet-wrapper">
      <div className="editForm__tablet-form-box">
      <div className="editForm__whd-border"></div>
      <div className="editForm__whd-container">
        <h2 className="editForm__subheader">Warehouse Details</h2>

        <form className="editForm__wh-form" onSubmit={handleSubmit} noValidate>
          <label className="editForm__label">Warehouse Name</label>
          <input
            type="text"
            name="warehouseName"
            placeholder="Warehouse Name"
            value={formData.warehouseName}
            onChange={handleInputChange}
            className="editForm__input"
          />

          <label className="editForm__label">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={handleInputChange}
            className="editForm__input"
          />

          <label className="editForm__label">City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            className="editForm__input"
          />

          <label className="editForm__label">Country</label>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleInputChange}
            className="editForm__input"
          />
        </form>
      </div>
      </div>
      <div className="editForm__tablet-form-contact-box">
        <div className="editForm__whd-border"></div>
        <div className="editForm__whd-container">
        <h2 className="editForm__subheader">Contact Details</h2>

        <form className="editForm__contact-form">
          <label className="editForm__label">Contact Name</label>
          <input
            type="text"
            name="contactName"
            placeholder="Contact Name"
            value={formData.contactName}
            onChange={handleInputChange}
            className="editForm__input"
          />

          <label className="editForm__label">Position</label>
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={formData.position}
            onChange={handleInputChange}
            className="editForm__input"
          />

          <label className="editForm__label">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="editForm__input"
          />

          <label className="editForm__label">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="editForm__input"
          />
        </form>
        </div>
      </div>
      </div>
      <div className="editForm__button-box">
        <button className="btn__cancel">Cancel</button>
        <button className="btn btn__submit" type="submit">
          Save
        </button>
      </div>
    </article>
);
}


export default EditWarehouse;