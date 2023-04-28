import "./AddWarehouse.scss";
import { useState } from "react";
// import { useParams } from "react-router-dom";

function AddWarehouse() {
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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // handle successful response
      console.log("Warehouse added successfully!");
    } catch (error) {
      console.error("Error adding warehouse:", error);
    }
  };

  return (
    <section className="addForm__container">
      <article className="addForm">
        <h1 className="addForm__header">Add New Warehouse</h1>

        <div className="addForm__whd-container">
          <h2 className="addForm__subheader">Warehouse Details</h2>

          <form className="addForm__wh-form" onSubmit={handleSubmit} noValidate>
            <label className="addForm__label">Warehouse Name</label>
            <input
              type="text"
              name="warehouseName"
              placeholder="Warehouse Name"
              value={formData.warehouseName}
              onChange={handleInputChange}
              className="addForm__input"
            />

            <label className="addForm__label">Street Address</label>
            <input
              type="text"
              name="streetAddress"
              placeholder="Street Address"
              value={formData.streetAddress}
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
            </form>
        </div>
        <div>
            <h2 className="addForm__subheader">Contact Details</h2>

        <form className="addForm__contact-form">

            <label className="addForm__label">Contact Name</label>
            <input
              type="text"
              name="contactName"
              placeholder="Contact Name"
              value={formData.contactName}
              onChange={handleInputChange}
              className="addForm__input"
            />

            <label className="addForm__label">Position</label>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={formData.position}
              onChange={handleInputChange}
              className="addForm__input"
            />

            <label className="addForm__label">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="addForm__input"
            />

            <label className="addForm__label">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="addForm__input"
            />
          </form>
        </div>
        <div className="addForm__button-box">
          <button className="addForm__cancel">Cancel</button>
          <button className="addForm__submit" type="submit">
            Add Warehouse
          </button>
        </div>
      </article>
    </section>
  );
}

export default AddWarehouse;
