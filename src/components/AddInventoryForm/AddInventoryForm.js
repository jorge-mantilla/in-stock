import "./AddInventoryForm.scss";
import Backarrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AddInventoryForm() {
  const [inventoryData, setInventoryData] = useState({
    id: "",
    warehouse_name: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
  });

  const { InventoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5051/inventories/`)
      .then((response) => setInventoryData(response.data));
  }, [InventoryId]);

  const handleInputChange = (e) => {
    setInventoryData({
      ...inventoryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateFix = "2023-04-26 13:45:04";

    const newInventoryData = {
      id: inventoryData.id,
      warehouse_name: inventoryData.warehouse_name,
      item_name: inventoryData.item_name,
      description: inventoryData.description,
      category: inventoryData.category,
      status: inventoryData.status,
      quantity: inventoryData.quantity,
      updated_at: updateFix,
      created_at: updateFix,
    };

    try {
      const response = await axios.put(
        `http://localhost:5051/inventories/${InventoryId}`,
        newInventoryData,
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

      console.log("Inventory edited successfully!");
    } catch (error) {
      console.error("Error editing inventory:", error);
      console.log("Response data:", error.response.data);
    }
  };

  return (
    <section className="inventoryForm">
      <div className="inventoryForm__tablet-header-box">
        <Link className="inventory-item__link btn--return" to="/Inventories">
          <img src={Backarrow} alt="" />
        </Link>
        <h1 className="inventoryForm__header">Add New Inventory Item</h1>
      </div>
      <div className="inventoryForm__tablet-wrapper">
        <div className="inventoryForm__tablet-form-box">
          <div className="inventoryForm__whd-border"></div>
          <div className="inventoryForm__whd-container">
            <h2 className="inventoryForm__subheader">Item Details</h2>
            
            <form className="inventoryForm__wh-form" noValidate>
              <label className="inventoryForm__label">Item Name
              </label>
              <input type="text" name="item_name" placeholder="Item Name" value={inventoryData.item_name}
                className="inventoryForm__input"
                onChange={handleInputChange} />

              <label className="inventoryForm__label">Description
              </label>
              <input type="text" name="description" placeholder="Description" value={inventoryData.description}
                className="inventoryForm__input"
                onChange={handleInputChange} />

              <label className="inventoryForm__label">Category</label>
              <select type="text" name="category" placeholder="Please Select" className="inventoryForm__input" onChange={handleInputChange}>
                <option value={inventoryData.item_category}></option>
              </select>
            </form>
          </div>
        </div>
        <div className="inventoryForm__tablet-form-contact-box">
          <div className="inventoryForm__whd-border"></div>
          <div className="inventoryForm__whd-container">
            <h2 className="inventoryForm__subheader">Item Availability</h2>

            <form className="inventoryForm__contact-form" >
              <label className="inventoryForm__label">Status</label>
              <div className="inventoryForm__status">
                <div>
                  <input type="radio" name="status" value="" classname="inventoryForm__input" />
                  <label className="inventoryForm__stock">In stock</label>
                </div>
                <div className="inventoryForm__radio">
                  <input type="radio" name="status" value="" classname="inventoryForm__input" />
                  <label className="inventoryForm__stock">Out of stock</label>
                </div>
              </div>
              <label className="inventoryForm__label">Quantity</label>
              <input type="text" name="quantity" placeholder="0" value={inventoryData.quantity} className="inventoryForm__input" onChange={handleInputChange}/>

              <label className="inventoryForm__label">Warehouse</label>
              <select type="text" name="warehouse" placeholder="" className="inventoryForm__input" >
                <option value={inventoryData.warehouse}></option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className="inventoryForm__button">
        <button className="btn btn__submit" type="submit" onClick={handleSubmit}> + Add Item </button>
        <button type="click" className="btn__cancel"> Cancel </button>
      </div>
    </section>
  )
};

export default AddInventoryForm;