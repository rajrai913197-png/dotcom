import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Products from "./pages/products";
import Men from "./pages/men";
import Women from "./pages/women";
import Kids from "./pages/kids";
import Wishlist from "./pages/wishlist";
import Login from "./pages/login";
import Userdash from "./dashboard/userDash";


const App =()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element ={<Home />} />
      <Route path="/cart" element ={<Cart />} />
       <Route path="/products" element={<Products />} />
       <Route path="/men" element={<Men />} />
       <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
        <Route path="/wishlist" element={<Wishlist />} />
         <Route path="/login" element={<Login/>} />
          <Route path="/user" element={<Userdash />} />

      </Route>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}
export default App;