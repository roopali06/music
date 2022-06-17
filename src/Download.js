import React from 'react';
import IMAGES from './images/index.js';

const Download = ()=>{
    return(
       
             <div>
            <div className="container03">
                <div className="title">Bring your music to mobile and your tablet,too.</div>
                <p className="sub">Listening on your phone or tablet is free,easy,reliable and fun.</p>
                <div className="logos">
                       <img src={IMAGES.apple} alt='logo'></img>
                       <img src={IMAGES.google} alt='logo'></img>
                </div>
            </div>
        </div>
        
    );
}

export default Download;