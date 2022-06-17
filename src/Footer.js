import React from 'react';
import {Link} from 'react-router-dom';


const Footer = ()=>{
    return(
        <div>
 <div className='footer'>
               <div className='footer1'>
                 <div className='first'>
                  <p>Get To Know Us</p>
                  <ul className='section'>
                  <Link to='/Home'><li>About Us</li></Link>
                  <Link to='/Home'><li>Careers</li></Link>
                  <Link to='/Home'><li>Press Releases</li></Link>
                  <Link to='/Home'><li>Gift a Smile</li></Link>
                  <Link to='/Home'><li>For The Record</li></Link>
                  <Link to='/Home'><li>Muzika Cares</li></Link>
                  </ul>
                 </div>
                 <div className='second'>
                 <p>Make Money With Us</p>
                  <ul className='section'>
                  <Link to='/Home'><li>Become an Affiliate</li></Link>
                  <Link to='/Home'><li>Advertise Your Products</li></Link>
                  <Link to='/Home'><li>Fulfilment by Muzika</li></Link>
                  <Link to='/Home'><li>Sell on Muzika</li></Link>
                  <Link to='/Home'><li>Muzika Global Selling</li></Link>
                  <Link to='/Home'><li>Muzika Pay on Merchants</li></Link>
                  </ul>
                 </div>
                 <div className='third'>
                 <p>Let Us Help You</p>
                  <ul className='section'>
                  <Link to='/Home'><li>COVID-19 and Muzika</li></Link>
                  <Link to='/Home'> <li>Returns Centre</li></Link>
                  <Link to='/Home'><li>100% Purchase Protection</li></Link>
                  <Link to='/Home'><li>Muzika Assistant</li></Link>
                  <Link to='/Home'><li>Your Account</li></Link>
                  <Link to='/Home'><li>Other Support</li></Link>
                  </ul>
                 </div>
                 <div className='fourth'>
                 <p>Contact With Us</p>
                  <ul className='section'>
                  <Link to='/Home'><li><i className="fa-brands fa-youtube"></i>You Tube</li></Link>
                  <Link to='/Home'><li><i className="fa-brands fa-twitter"></i>Twitter</li></Link>
                  <Link to='/Home'><li><i className="fa-brands fa-instagram-square"></i>Instagram</li></Link>
                  <Link to='/Home'><li><i className="fa-brands fa-facebook"></i>Facebook</li></Link>
                  <Link to='/Home'><li><i className="fa-brands fa-whatsapp-square"></i>Whatsapp</li></Link>
                  <Link to='/Home'><li><i className="fa-brands fa-reddit"></i> Reddit</li></Link>
                  </ul>
                 </div>

                 </div>
                 <hr className="footerline"/>

                 <div className='logo'>
                   <i className="fi fi-rr-headset"></i>
                   <span className='one'>M</span>
                   <span className='two'>U</span>
                   <span className='three'>Z</span>
                   <span className='four'>I</span>
                   <span className='five'>K</span>
                   <span className='six'>A</span>
               </div>

               <div className='texts'>
               <Link to='/Home'><div>Conditions of Use & Sale</div></Link>
               <Link to='/Home'><div>Privacy Notice</div></Link>
               <Link to='/Home'><div>Interest-Based Ads</div></Link>
               <Link to='/Home'><div>© 1996-2022, Muzika.com, Inc. or its affiliates</div></Link>
               </div>

             </div>
        </div>
    );
}

export default Footer;