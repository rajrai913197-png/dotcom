import{Link} from 'react-router-dom'

import { useState } from 'react'

const Navbar = ()=>{
   const[menu,setMenu]=useState(false)
    return(
        <>
        <nav className='navbar'>
         <h1 className='logo'>PADUKA</h1>
        <div> 
             <button id='search'>SEARCH<i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className='navLinks'>
        <Link to="/">HOME</Link>
         <Link to='/products'>PRODUCT</Link>
         <Link to='/men'>MEN</Link>
         <Link to='/women'>WOMEN</Link>
         <Link to='/kids'>KIDS</Link>
         <Link to='/cart'>CART</Link>
         <Link to="/wishlist">WISHLIST</Link>
         <Link to='/login' id='login'><i class="fa-solid fa-user"></i></Link>
        </div>
         <i class="fa-solid fa-bars" id='burger' onClick={()=> setMenu(!menu)}></i>
        </nav>
        <div className={`implinks ${menu ? "open" : ""}`}>
  <button onClick={()=> setMenu(false) } id='wrong-icon'><i class="fa-solid fa-circle-xmark"></i></button>
  <Link to="/">HOME</Link>
  <Link to="/products">PRODUCT</Link>
  <Link to="/men">MEN</Link>
  <Link to="/women">WOMEN</Link>
  <Link to="/kids">KIDS</Link>
  <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
  <Link to="/wishlist"><i class="fa-solid fa-heart"></i></Link>
  <Link to="/login" id="login">
    <i className="fa-solid fa-user"></i>
  </Link>
</div>
        </>
    )
}
export default Navbar