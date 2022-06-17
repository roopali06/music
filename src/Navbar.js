import React,{useContext} from 'react';
import IMAGES from './images/index.js';
import {Dashcontext} from './Dashcontext';

const Navbar = ()=>{

    const {setOptionbar} = useContext(Dashcontext);
    const {loggeduser} =useContext(Dashcontext);

    const take23='60px';

    const showOptionbar = (e)=>{
       setOptionbar(take23);
    }

    return (
         <div className='container1'>

           <div className='wrapper'>
               <div className='logo'>
                   <i className="fi fi-rr-headset"></i>
                   <span className='one'>M</span>
                   <span className='two'>U</span>
                   <span className='three'>Z</span>
                   <span className='four'>I</span>
                   <span className='five'>K</span>
                   <span className='six'>A</span>
               </div>
               <div className='searchbar'>
                   <input className='search' placeholder='Songs,Artists,Podcasts...'></input><i className="fi fi-rr-search"></i>
               </div>
              <div className='account'>
            <button className='out'><img src={IMAGES.user03} className="user" alt='user'></img>{loggeduser}<img src={IMAGES.down111} className="down" alt='chevron' onClick={showOptionbar}></img></button>
            </div>
           </div>
         </div>
    );
}

export default Navbar;



