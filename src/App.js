
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Orders from './component/Oders/Orders';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/shop' element={<Shop></Shop>} />
        <Route path='/order' element={<Orders></Orders>} />
        <Route path='/inventory' element={<Inventory></Inventory>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
