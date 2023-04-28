// import { useEffect } from "react";
import { Link } from 'react-router-dom';

import '../WarehousePage/WarehousePage.scss';

import Warehouses from "../../components/Warehouses/Warehouses.js";
import AddIcon from '../../assets/Icons/add-24px.svg';
import SortIcon from "../../assets/Icons/sort-24px.svg";



function WarehousePage() {

    return (
        <>
            <section className="warehouses">
                <div className="warehouses__body">
                    <div className="warehouses__nav">
                        <div className="warehouses__cont">
                            <div className="warehouses__header">
                                <h1 className="warehouses__title">Warehouses</h1>
                            </div>
                        </div>

                        <form className="warehouses__form" noValidate>
                            <div className="warehouses__sec">
                                <div className="warehouses__search">
                                    <input className="warehouses__textbox" type="text" name="title" placeholder="Search..." required />
                                </div>
                            </div>
                            <div className="warehouses__sec">
                                <Link className="warehouses__upload-link" to={'/Warehouses-add'}>
                                    <button id='warehouse__btn' className="btn" type="submit">
                                        <img id='warehouse__btn--icon' className="btn--icon" src={AddIcon} alt="Add Icon" />
                                        <p className="btn--text">Add New Warehouse</p>
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>

                    <section className="warehouses__sort">
                        <ul className="warehouses__sort--body">
                            <li className="warehouses__sort--opt">
                                <h4 className="warehouses__sort--text">WAREHOUSE</h4>
                                <img className="warehouses__sort--icon" src={SortIcon} alt="Warehouse Sort Icon" />
                            </li>
                            <li className="warehouses__sort--opt">
                                <h4 className="warehouses__sort--text">ADDRESS</h4>
                                <img className="warehouses__sort--icon" src={SortIcon} alt="Address Sort Icon" />
                            </li>
                            <li className="warehouses__sort--opt">
                                <h4 className="warehouses__sort--text">CONTACT NAME</h4>
                                <img className="warehouses__sort--icon" src={SortIcon} alt=" Contact Name Sort Icon" />
                            </li>
                            <li className="warehouses__sort--opt">
                                <h4 className="warehouses__sort--text">CONTACT INFORMATION</h4>
                                <img className="warehouses__sort--icon" src={SortIcon} alt="Contact Information Sort Icon" />
                            </li>
                            <li className="warehouses__sort--opt">
                                <h4 className="warehouses__sort--text">ACTIONS</h4>
                            </li>
                        </ul>
                    </section>

                    <Warehouses />

                </div >
            </section >
        </>
    );
}
export default WarehousePage;