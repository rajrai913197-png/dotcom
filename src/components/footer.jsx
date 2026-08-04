import { useNavigate } from 'react-router-dom'

const Footer = ()=>{
  let navigate =   useNavigate()
    return(
        <>
         <footer className='main-footer'>
            <section className='contact-links'>
              <h3>PADUKA</h3>
             <h4>CONNECT WITH US -</h4>
             <div className='links-connect'>
                <a href="https://www.instagram.com/raa.j_kalar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i class="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/rajrai913197-png"><i class="fa-brands fa-github"></i></a>
                <a href="https://x.com/paradox_raz"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100037591242603"><i class="fa-brands fa-facebook"></i></a>
             </div>
            <button onClick={()=> navigate("/")}>BACK TO HOME <i class="fa-solid fa-rotate-left"></i></button>
            </section>
            <section className='imp-things'>
             <a href="">contact us</a>
            <a href="">promotons and sale</a>
             <a href="">my account</a>
            <a href="">exchange and return</a>
            <a href="">privacy and policy</a>
             <a href="">term and conditions</a>
             <a href="">shoes</a>
             <a href="">running shoes</a>
              <a href="">site - map</a>
            </section>
            <section className='site-rules'>
             <a href="">FAQ</a>
            <a href="">warranty claims</a>
             <a href="">track order</a>
            <a href="">shoes care</a>
            <a href="">tech glossary</a>
             <a href="">Initiate Return / Exchange</a>
             <a href="">Sneakers</a>
             <a href="">Nitro</a>
              <a href="">Cookie Settings</a>
            </section>
             <section className='about-page'>
                <h4>about</h4>
             <a href="">Company</a>
            <a href="">What is cartify</a>
             <a href="">Corporate News</a>
            <a href="">Press Center</a>
            <a href="">Investors</a>
             <a href="">Sustainability</a>
             <a href="">Careers</a>
             <a href="">Store Locator</a>
              <a href="">PADUKA articles</a>
            </section>
         </footer>
         <div id='ryt'>
           <hr />
           <p> © 2026 Paduka. All Rights Reserved.
            Designed & Developed by @Raj Rai. </p>
         </div>
        </>
    )
}
export default Footer