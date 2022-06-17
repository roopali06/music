import React,{useEffect,useRef} from 'react';
import {motion} from 'framer-motion';
import Footer from './Footer';
import IMAGES from './images/index.js';


import {Link} from 'react-router-dom';



const Premium = ({width2,setWidth2})=>{
     
    const scroll3 = useRef();

  useEffect(()=>{
   setWidth2(scroll3.current.scrollWidth - scroll3.current.offsetWidth);
  })

    return(


        <div className="containP">

        <div>
    <div className="container40">
    <div className='wrapper1'>
    <i className="fi fi-rr-headset"></i><span className="red">M U Z I K A</span>
   <Link to="/"><button  className='out' id='elley' alt='home'>Home</button></Link>
    </div>
    </div>
    <div className='selena' style={{backgroundImage:`url(${IMAGES.con24})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}></div>
    <div className="block" style={{backgroundImage:`url(${IMAGES.con44})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',opacity:'0.95'}}>
        <p className='limits' style={{color:'black'}}>Listen Without Limits</p>
        <p className='users' style={{color:'#000',textShadow:'0 0 6px #eef2f3,0 0 9px #eef2f3,0 0 21px #fff,0 0 42px #434343,0 0 82px #434343,0 0 90px #434343,0 0 102px #434343,0 0 151px #434343'}}>Play millions of songs ad-free, on-demand, and offline.Debit and credit cards accepted.</p>
        <button className='btn3'>GET STARTED</button>
        <div className='terms' style={{color:'#fff'}}>Terms and conditions apply</div>
    </div>

    
   
    </div>

         <div className='container41'>
            <p className='pre'>Pick Your Premium</p>
            <p className='listen'>Listen without limits on your phone, speaker, and other devices.</p>
            <div className='cardlogos'>
           <img src={IMAGES.visa} alt='card'></img>
           <img src={IMAGES.master} alt='card'></img>
           <img src={IMAGES.paytm} alt='card'></img>
           <img src={IMAGES.americanex} alt='card'></img>
            </div>
            </div>
             <div className="deals">
                 <motion.div className="carousel5" ref={scroll3}>
    <motion.div className="cards" drag='x' dragConstraints={{right:0,left:-width2}}>
                   <motion.div className="col1">
                       <p className="number">Mini</p>
                       <span className="price">From ₹7/day</span>
                       <p className="account">1 account</p>
                       <hr></hr>
                       <div className="plans">
                           <ul>
                               <li>Ad-free music listening on mobile</li>
                               <li>Group Session</li>
                               <li>Listen to offline songs on 1 mobile device</li>
                           </ul>
                       </div>
                       <button className="planbtn">VIEW PLANS</button>
                       <div className="terms">Terms and conditions apply.</div>
                   </motion.div>
                   <motion.div className="col1">
                       <p className="number">Individual</p>
                       <span className="price">₹119/month</span>
                       <p className="account">1 account</p>
                       <hr></hr>
                       <div className="plans">
                           <ul>
                               <li>Ad-free music listening on mobile</li>
                               <li>Group Session</li>
                               <li>Download 10k songs/device on 5 devices</li>
                           </ul>
                       </div>
                       <button className="planbtn">VIEW PLANS</button>
                       <div className="terms">Terms and conditions apply.</div>
                   </motion.div>
                   <motion.div className="col1">
                       <p className="number">Duo</p>
                       <span className="price">₹149/month</span>
                       <p className="account">2 accounts</p>
                       <hr></hr>
                       <div className="plans">
                           <ul>
                               <li>Ad-free music listening on mobile</li>
                               <li>For couples who live together</li>
                               <li>Group Session</li>
                               <li>Download 10k songs/device, on 5 devices per account</li>
                           </ul>
                       </div>
                       <button className="planbtn">VIEW PLANS</button>
                       <div className="terms">Terms and conditions apply.</div>
                   </motion.div>
                   <motion.div className="col1">
                       <p className="number">Family</p>
                       <span className="price">₹179/month</span>
                       <p className="account">Up to 6 accounts</p>
                       <hr></hr>
                       <div className="plans">
                           <ul>
                               <li>Ad-free music listening on mobile</li>
                               <li>For family who live together</li>
                               <li>Listen to offline songs on 1 mobile device</li>
                               <li>Block explicit music</li>
                           </ul>
                       </div>
                       <button className="planbtn">VIEW PLANS</button>
                       <div className="terms">Terms and conditions apply.</div>
                   </motion.div>
                 </motion.div>
</motion.div>
             </div>

             <Footer/>

        </div>
   
   
    );
}

export default Premium;