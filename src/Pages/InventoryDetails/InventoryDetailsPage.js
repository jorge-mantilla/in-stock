import InventoryItem from "../../components/InventoryItem/InventoryItem";
import StockNotif from '../../components/StockNotif/StockNotif.js';
import { Link } from 'react-router-dom';

import '../InventoryDetails/InventoryDetailsPage.scss';

import BackIcon from '../../assets/Icons/arrow_back-24px.svg';
import EditIcon from '../../assets/Icons/edit-white-24px.svg';

function InventoryDetailsPage() {

    return (
        <>
            <section className="inventory-item">
                <div className="inventory-item__body">
                    <div className="inventory-item__sec">
                        <div className="inventory-item__header">
                            <Link className="inventory-item__link btn--return" href="#">
                                <img src={BackIcon} alt="" />
                            </Link>
                            <h1 className="inventory-item__title">Television</h1>
                        </div>

                        <button className=" btn inventory-item__btn btn--edit" type="submit">
                            <img className="btn--icon" src={EditIcon} alt="Edit Icon" />
                            <p className="btn--text">Edit</p>
                        </button>
                    </div>
                    <div className="inventory-item__sec">
                        <div className="inventory-item__info">
                            <div className="inventory-item__info--data">
                                <div className="inventory-item__info--sec">
                                    <div className="inventory-item__info--opt">
                                        <h4 className="inventory-item__subtitle">ITEM DESCRIPTION:</h4>
                                        <p className="inventory-item__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="inventory-item__info--sec">
                                    <div className="inventory-item__info--opt">
                                        <h4 className="inventory-item__subtitle">CATEGORY:</h4>
                                        <p className="inventory-item__text">Electronics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="inventory-item__info--data">
                                <div className="inventory-item__info--sec">
                                    <div className="inventory-item__info--opt">
                                        <h4 className="inventory-item__subtitle">STATUS:</h4>
                                        <StockNotif />
                                    </div>
                                    <div className="inventory-item__info--opt">
                                        <h4 className="inventory-item__subtitle">QUANTITY:</h4>
                                        <p className="inventory-item__text">500</p>
                                    </div>
                                </div>
                                <div className="inventory-item__info--sec">
                                    <div className="inventory-item__info--opt">
                                        <h4 className="inventory-item__subtitle">WAREHOUSE:</h4>
                                        <p className="inventory-item__text">Manhattan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <InventoryItem />
        </>
    );
}
export default InventoryDetailsPage;