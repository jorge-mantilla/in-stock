import "./EditWarehouse.scss";
import { useState } from "react";
import AddIcon from '../../assets/Icons/arrow_back-24px.svg';
import PlusIcon from '../../assets/Icons/add-24px.svg'
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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // handle successful response
      console.log("Warehouse eddited successfully!");
    } catch (error) {
      console.error("Error edditing warehouse:", error);
    }
  };

  return (
    <section className="addForm__container">
      <article className="addForm">
        <h1 className="addForm__header">Edit New Warehouse</h1>
        <img id='warehouse__btn--icon' className="btn--icon" src={AddIcon} alt="Add Icon" />

        <div className="addForm__whd-border"></div>
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
          <div className="addForm__whd-border"></div>
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
          <button className="btn__cancel">Cancel</button>
          <img className="btn--plus" src={PlusIcon} alt="Add Icon" />
          <button className="btn btn__submit" type="submit">
            Save
          </button>
        </div>
      </article>
    </section>
  );
}

export default EditWarehouse;