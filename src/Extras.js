import React from 'react';
import Footer from './Footer';
import IMAGES from './images/index.js';
import { useParams } from 'react-router-dom';

import {Link} from 'react-router-dom';

const Extras = ({topContainer})=>{
    const {section} = useParams();

   return(
    <>

{topContainer.filter(data=>(data.identifier === section)).map((data,index)=> (
    
  <div key={data.identifier}>
    <div className="container40">
    <div className='wrapper1'>
    <i className="fi fi-rr-headset"></i><span className="red">M U Z I K A</span>
   <Link to="/"><button className='out' id='elley' alt='home'>Home</button></Link>
    </div>
    </div>
    <div className='selena' style={data.css1}></div>
    <div className="block" style={data.css}>
        <p className='limits' style={data.css2}>{data.limits}</p>
        <p className='users' style={data.css3}>{data.users}</p>
        <button className='btn3'>{data.btn3}</button>
        <div className='terms' style={data.css2}>{data.terms}</div>
    </div>

  <data.element />
     
    <Footer/>

    </div>
   
    
    ))}
    
    </>

   );

   }


export default Extras;