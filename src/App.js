import WarehousePage from './Pages/WarehousePage/Warehouse';
import NotFound from './components/NotFound/NotFound';
import Main from './components/Main/Main';
import './App.css';
import WarehouseDetailsPage from './Pages/WarehouseDetailsPage/WarehouseDetails';
import InventoryPage from './Pages/InventoryPage/Inventory';
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
