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
  <Link to="/cart"><div className='btn-links'>CART<i class="fa-solid fa-arrow-right-long"></i></div></Link>
  <Link to="/wishlist"><div className='btn-links'>WISHLIST<i class="fa-solid fa-arrow-right-long"></i></div></Link>
  <Link to="/login" id="login">
   <div className='user-login'>LOGIN<i class="fa-solid fa-arrow-down-long"></i></div> 
  </Link>
</div>
        </>
    )
}
export default Navbar