import './App.css';
import Main from './components/Main/Main';
import WarehousePage from './Pages/WarehousePage/Warehouse';
import WarehouseDetailsPage from './Pages/WarehouseDetailsPage/WarehouseDetails';
import InventoryPage from './Pages/InventoryPage/Inventory';
import InventoryListPage from './Pages/InventoryDetails/InventoryDetails';
import NotFound from './components/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
//installed axios
// npm i axios dotenv react-com react-router-dom scss
//git repo check

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/Warehouse' element={<WarehousePage />}></Route>
        <Route path='/WarehouseDetails' element={<WarehouseDetailsPage />}></Route>
        <Route path='/Inventory' element={<InventoryPage />}></Route>
        <Route path='/DeleteInventory' element={<InventoryPage />}></Route>
        <Route path='/InventoryDetails' element={<InventoryListPage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
