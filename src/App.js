import './App.css';
import Main from './components/Main/Main';
import WarehousePage from './Pages/WarehousePage/WarehousePage';
import WarehouseDetailsPage from './Pages/WarehouseDetailsPage/WarehouseDetailsPage';
import InventoryPage from './Pages/InventoryPage/InventoryPage';
import InventoryListPage from './Pages/InventoryDetails/InventoryDetailsPage';
import NotFound from './components/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
//installed axios
// npm i axios dotenv react-com react-router-dom scss
//git repo check

function App() {

  const [warehousesArray, setWarehousesArray] = useState([])

  useEffect(() => {
      axios.get(`http://localhost:5051/warehouses`).then((response) => {
        console.log("APP JS", response.data);
          setWarehousesArray(response.data)
      })
  }, []);
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/Warehouse' element={<WarehousePage warehousesArray={warehousesArray} />}></Route>
        <Route path='/WarehouseDetails' element={<WarehouseDetailsPage />}></Route>
        <Route path='/Inventory' element={<InventoryPage warehousesArray={warehousesArray} />}></Route>
        <Route path='/InventoryDetails' element={<InventoryListPage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
