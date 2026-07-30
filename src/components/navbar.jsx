import{Link} from 'react-router-dom'
import logo from '../assets/logo.webp'
import { useState } from 'react'

const Navbar = ()=>{
   const[menu,setMenu]=useState(false)
    return(
        <>
        <nav className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <div> 
             <button id='search'>SEARCH</button>
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
  <Link to="/">HOME</Link>
  <Link to="/products">PRODUCT</Link>
  <Link to="/men">MEN</Link>
  <Link to="/women">WOMEN</Link>
  <Link to="/kids">KIDS</Link>
  <Link to="/cart">CART</Link>
  <Link to="/wishlist">WISHLIST</Link>
  <Link to="/login" id="login">
    <i className="fa-solid fa-user"></i>
  </Link>
</div>
        </>
    )
}
export default Navbar