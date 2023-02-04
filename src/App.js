
import './App.css';
import Navbar_main from './component/Navbar_main';
import Home from './page/Home';
import MyCart from './page/MyCart';
import NewProduct from './page/NewProduct';
import ProductDetail from './page/ProductDetail';
import { Outlet, Route,Routes, } from 'react-router-dom';
import AllProducts from './page/AllProducts';

function App() {
  return (
    <>
     <Navbar_main/> 
      <Outlet></Outlet>
    </>
  );
}

export default App;
