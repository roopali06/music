import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import IMAGES from './images/index.js';



const Playlist = ({bottombar,setBottombar,bottombarimage,bottombartitle,details,connectbar,setConnectbar,block,setBlock})=>{
  
   const {content} = useParams();

   const take30 = '-200px';

   const hideBlock = ()=>{
     setBlock(take30);
   }

   const take5 = '-293px';

   const disappear = ()=>{
       setBottombar(take5);
   }

   const take94 = '-350px';

   const hideConnectbar = ()=>{
     setConnectbar(take94);
   }

  
  return(
    <>

    {details.filter((data)=> data.id === content).map((data,index)=> (

     
     
    <div key={index} className="heythere">
   
   <div className="container123">
       <div className='col1'>
                     <div className='head'>
                     <i className="fi fi-rr-list"></i>
                     <i className="fi fi-rr-headset"></i><span>M U Z I K A</span>
                     </div>
                     <div className='menus'>
                        <Link to='/'><div className='first'>
                         <i className="fi fi-rr-home"></i>
                         <span>Home</span>
                         </div>
                         </Link>
                        <Link to='/Like'><div className='second'>
                         <i className="fi fi-rr-thumbs-up"></i>
                         <span>Liked songs</span>
                         </div>
                         </Link>
                         <Link to='/Home'><div className='third'>
                         <i className="fi fi-rr-add"></i>
                         <span>Create playlist</span>
                         </div>
                         </Link>
                         <Link to='/Home'><div className='fourth'>
                         <i className="fi fi-rr-music-alt"></i>
                         <span>Your library</span>
                         </div>
                         </Link>
                         <Link to='/Home'><div className='fifth'>
                         <i className="fi fi-rr-clock"></i>
                         <span>Listen later</span>
                         </div></Link>
                         <Link to='/Home'><div className='sixth'>
                         <i className="fi fi-rr-settings"></i>
                         <span>Settings</span>
                         </div></Link>
                         <Link to='/Home'><div className='seventh'>
                         <i className="fi fi-rr-download"></i>
                         <span>Install app</span>
                         </div></Link>
                         <Link to='/Home'><div className='eigth'>
                         <i className="fi fi-rr-interrogation"></i>
                         <span>Help</span>
                         </div></Link>
                         <Link to='/Home'><div className='ninth'>
                         <i className="fi fi-rr-share"></i>
                         <span>Share app</span>
                         </div></Link>
                         <Link to='/Home'><div className='tenth'>
                         <i className="fi fi-rr-exclamation"></i>
                         <span>Send feedback</span>
                         </div></Link>
                     </div>
                  </div>
   </div>

  
   <div className='transparent'>
   <Link to="/Dashboard"><i className="fa-solid fa-less-than"></i></Link><i className="fa-solid fa-greater-than"></i><span className="cate">{data.title}</span><Link to='/Premium'><button className="up">Upgrade</button></Link><i className="fi fi-rr-user"></i><button className='user'>user</button><i className="fa-solid fa-ellipsis"></i></div>

   <div className='container4561' key={data.src}>
   <img src={data.src} alt='playlistcover'></img><div className='onimage'></div><i className="fi fi-rr-headset"></i>
   <span style={data.css2}>PLAYLIST</span>
   <p className='mix' style={data.css1}>{data.title}</p>
   <div className='symbols'>
   <div className='box11'><img src={IMAGES.heart101} className='heart' alt='like'></img></div><sup style={data.css02}>{data.sup}</sup>
   <div className='box22'><img src={IMAGES.share103} className='share' alt='share'></img></div>
   <div className='box33'><img src={IMAGES.down18} className='download' alt='download'></img></div>
   </div>
   </div>

    <div className='container456' key={data.id} style={data.css}>
    <div className='artist'>
    <div className='support'>
     <img src={data.src} alt='playlistcover'></img><div className='onimage'></div><i className="fi fi-rr-headset" style={data.css92}></i>
     </div>
      <div className='info'>
     <span style={data.css2} >PLAYLIST</span>
     <p className='mix' style={data.css1}>{data.title}</p>
     <p className='artists' style={data.css1}>{data.desc}</p>
     </div>
     </div>
     </div>


   <div className='container789'>
      <div className="container678">
       <div className="head">
         <div className="hash">#</div>
         <div className="TITTLE">TITTLE</div>
         <div className="ALBUM">ALBUM</div>
         <div className="ARTIST">ARTIST</div>
         <div className="DURATION">DURATION</div>
       </div>
       
   <hr/>
   </div>

  <Outlet/>
           
            <div className="bottom" key={index} style={{bottom:bottombar}}>
            <div className="thepic"><img src={bottombarimage} alt='cover'/><span>{bottombartitle}</span><i className="fa fa-times" onClick={disappear}></i></div>
          
            <div className="sections">
              <div className="ic"><img src={IMAGES.addtoplaylist} alt='icon'/><span>Add to Queue</span></div>
              <div className="ic"><img src={IMAGES.album} alt='icon'/><span>Add to Playlist</span></div>
              <div className="ic"><img src={IMAGES.artist} alt='icon'/><span>View Artist</span></div>
            <div className="ic"><img src={IMAGES.cd} id='cd' alt='icon'/><span className='album1'>View Album</span></div>
              <div className="ic"><img src={IMAGES.share} alt='icon'/><span>Share</span></div>
            </div>
            </div>

            <div className="devices" style={{bottom:connectbar}}>
              <span className="connect">Connect to a device</span><img src={IMAGES.closeb} alt='close' id='closebtn' onClick={hideConnectbar}></img>
             <div><img src={IMAGES.devices4} alt='connect devices'></img></div> 
              <p className="play">Play and control Muzika on all your devices.<br/>Start Muzika on another device and it will magically appear here.</p>
              <button className="more">Learn More</button>
            </div>

            <div className='information' style={{right:block}}>
            <div className='zipit'><i className="fa-solid fa-circle-xmark" onClick={hideBlock}></i></div>
                <p>Add to queue</p>
                <p>Go to song radio</p>
                <p>Show credits</p>
                <p>Save to your liked songs</p>
                <p>Add to playlist</p>
                <p>Share</p>
                <p>Open in desktop app</p>
          </div>
          
  
  </div>
   </div>

   ))
    
    
   }

  </>

    )
    }

export default Playlist;