import './App.scss';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WarehousePage from './Pages/WarehousePage/WarehousePage';
import WarehouseDetailsPage from './Pages/WarehouseDetailsPage/WarehouseDetailsPage';
import InventoryPage from './Pages/InventoryPage/InventoryPage';
import InventoryDetailsPage from './Pages/InventoryDetails/InventoryDetailsPage';
import NotFound from './components/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import AddWarehouse from './Pages/AddWarehouse/AddWarehouse';
import EditWarehouse from './Pages/EditWarehouse/EditWarehouse';
import AddInventoryForm from './components/AddInventoryForm/AddInventoryForm';
import EditInventoryForm from './components/EditInventoryForm/EditInventoryForm';

function App() {

  const [warehousesArray, setWarehousesArray] = useState([])
  const [inventoriesArray, setInventoriesArray] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5051/warehouses`).then((response) => {
      setWarehousesArray(response.data)
    })
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:5051/inventories`).then((response) => {
      setInventoriesArray(response.data)
    })
  }, [warehousesArray]);

  return (
    <>
      <div className="app">
        <div className='header__bg'>
          <Header />
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/Warehouses' element={<WarehousePage warehousesArray={warehousesArray} />}></Route>
            <Route path='/WarehouseDetails/:WarehouseId' element={<WarehouseDetailsPage inventoriesArray={inventoriesArray} warehousesArray={warehousesArray} />}></Route>
            <Route path='/AddWarehouse' element={<AddWarehouse />}></Route>
            <Route path='/EditWarehouse/:WarehouseId' element={<EditWarehouse />}></Route>
            <Route path='/Inventories' element={<InventoryPage warehousesArray={warehousesArray} />}></Route>
            <Route path="/inventoryDetails/:inventoryId" element={<InventoryDetailsPage warehousesArray={warehousesArray} />} />
            <Route path='/EditInventoryForm' element={<EditInventoryForm />}></Route>
            <Route path='/AddInventoryForm' element={<AddInventoryForm />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div >
    </>
  );
}

export default App;
