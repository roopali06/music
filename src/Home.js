import React from 'react';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import './App.css';

const Home = ({style,setStyle})=>{


  const take1 = 0;
  const take2 = '-200px';
  
const showMenu = ()=>{
   setStyle(take1);
}

const hideMenu = ()=>{
  setStyle(take2);
}

    return(
        <div>
             <div className='container120'>
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
               
               <div className='tabs' style={{right:style}}>
               <i className="fa fa-times" onClick={hideMenu}></i>
              <Link to='/Premium'><span>Premium</span></Link> 
              <Link to='/Support'><span>Support</span></Link> 
              <Link to='/Download'><span>Download</span></Link> 
                <span className='slash'>|</span>
              <Link to='/Signup'><span>Sign up</span></Link> 
              <Link to='/Login'><span>Log in</span></Link> 
               </div>
               <i className="fa fa-bars" onClick={showMenu}></i>
           </div>
         </div>

         <div className='poster'>
         <div className='phrase'>Where words fail, music speaks</div>
         <div className='phrase1'>So What Are You Waiting For? Express Yourself With Music!!</div>
         <Link to='/Signup'><button className='btn1'>Explore Music Now!</button></Link> 
         </div>

             <div className='posterpic'>
               <div className='part1'></div>
               <div className='part2'>
                 <div className='phrase2'>In search of good music??</div>
                 <div className='phrase3'>Start Listening to Latest Releases</div>
               <Link to='/Signup'><button className='btn2'>Lets Go</button></Link> 
               </div>
             </div>

             <div className='picture'>
                 <div className='quote'>Go Premium.Be Happy.</div>
                 <Link to='/Signup'><button className='free'>START FREE TRIAL</button></Link> 
         <div className='terms'>* Terms and conditions apply. Open only to users who haven't already tried Premium. </div>
             </div>
             
            <Footer/>
           
        
        
       
        
        </div>
       
    );
}

export default Home;