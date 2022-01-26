import './App.css';
import './css/Global.css';
import Product from './Layout/Product';
import Men from './Layout/Men';
import Women from './Layout/Women';
import Kids from './Layout/Kids';
import Accessories from './Layout/Accessories';
import Ftw from './Layout/Ftw';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/"  element={<Product/>}/>
          <Route path="/Men" element={<Men/>} />
          <Route path="/WOMEN" element={<Women/>} />
          <Route path="/KIDS" element={<Kids/>} />
          <Route path="/FTW" element={<Ftw/>} />
          <Route path="/ACCESSORIES" element={<Accessories/>}/>
          
      </Routes>
    </div>
  );
}

export default App;
