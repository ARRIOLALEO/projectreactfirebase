import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import './App.css';
import Dashboard from './Pages/Dashboard';
import CartProductList from './Pages/CartProductList';
import MakeAndOrder from './Pages/MakeAndOrder';
import Orders from './Pages/Orders'
import Login from './Pages/Login'
import FormProducts from './components/FormProducts'
import SeeAllProducts from './components/SeeAllProducts';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart-description' element={<CartProductList/>}/>
      <Route path="/make-the-oder" element={<MakeAndOrder/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}>
           <Route path='Orders' element={<Orders/>}/>
           <Route path='addPRoduct' element={<FormProducts/>}/>
           <Route path="seeProducts" element={<SeeAllProducts/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
