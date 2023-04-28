import WarehousePage from './Pages/WarehousePage/Warehouse';
import NotFound from './components/NotFound/NotFound';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WarehouseDetailsPage from './Pages/WarehouseDetailsPage/WarehouseDetails';
import InventoryPage from './Pages/InventoryPage/Inventory';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
//installed axios
// npm i axios dotenv react-com react-router-dom scss
//git repo check

function App() {
  return (
    <>
      <div className="app">
        <div className='header__bg'>
          <Header />
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/warehouses' element={<WarehousePage />}></Route>
            <Route path='/warehouseDetails' element={<WarehouseDetailsPage />}></Route>
            <Route path='/inventory' element={<InventoryPage />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div >
    </>
  );
}

export default App;
