import { Route, Routes } from "react-router-dom";
import { Container } from '@mui/material';

import './App.css';
import ProductList from "./features/product/ProductList"
import OrderList from "./features/order/OrderList";
import NavBar from './NavBar';
import PrductList from './features/product/ProductList';


function App() {
  return (
 <>
     <Container sx={{ marginTop: '64px' }}>
      <Routes>
        <Route path="" element={<PrductList/>} />
        <Route path="/productList" element={<PrductList/>} />
        <Route path="/cart" element={<OrderList/>} />
      </Routes>
    </Container>
 <NavBar/>
  <ProductList/>
  <OrderList/>
 </>
  );
}

export default App;
