import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import Header from './Header';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Homepage from './Homepage';
import Protected from './Protected';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Protected Cmp={ProductList}/>} />
        <Route path="/login" element={<Protected Cmp={Login} />} />
        <Route path="/register" element={<Protected Cmp={Register} />} />
        <Route path="/add-product" element={<Protected Cmp={AddProduct} />} />
        <Route path="/update-product" element={<Protected Cmp={UpdateProduct}  />} />
      </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;
