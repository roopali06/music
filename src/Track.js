import React,{useEffect, useRef,useContext} from 'react';
import IMAGES from './images/index.js';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {Trackcontext} from './Trackcontext';


const Track = ()=>{

    const {play,setPlay} = useContext(Trackcontext);
    let {trackminute,settrackMinute} = useContext(Trackcontext);
    let {tracksecond,settrackSecond} = useContext(Trackcontext);
    let {trackintervalID,settrackintervalID} = useContext(Trackcontext);
    const {details1} = useContext(Trackcontext);
    const {trackdetailbar,settrackdetailBar} = useContext(Trackcontext);
    let {src,setSrc} = useContext(Trackcontext);
    let {progresspercent1,setProgresspercent1}= useContext(Trackcontext);
    let {currenttime1,setCurrenttime1} = useContext(Trackcontext);
    let {timeinseconds1,setTimeinseconds1} = useContext(Trackcontext);

    const {name} = useParams();
    const trackRef = useRef();

    const take20 = '0px';
    const take30 = '-500px';

    const showtrackdetailBar = ()=>{
        settrackdetailBar(take20);
    }

    const hidetrackdetailBar = ()=>{
        settrackdetailBar(take30);
    }

    const changelike = ()=>{
       setSrc(src? src = false : src = true);
    }

    useEffect(()=>{
      timer();
    },[play])

    const timer = ()=>{

        if(play){
            const trackDuration = Math.ceil(trackRef.current.duration);
            const trackMi = Math.floor(trackDuration/60);
            const trackSe = Math.ceil(trackDuration-(trackMi * 60));
            console.log(trackMi,trackSe);
         trackintervalID = setInterval(()=>{
            
            currenttime1 = Math.floor(trackRef.current.currentTime);
            setCurrenttime1(currenttime1);

            timeinseconds1 =Math.floor(trackRef.current.duration)
            setTimeinseconds1(timeinseconds1);
         
            progresspercent1 = Math.floor((currenttime1/timeinseconds1)*100);
            setProgresspercent1(`${progresspercent1}%`);

               ++tracksecond;
               settrackSecond(tracksecond < 10? `0${tracksecond}` : tracksecond);
               if(tracksecond === 59){
                    trackminute++;
                    settrackMinute(trackminute);
                    tracksecond ='00';
               }
               settrackintervalID(trackintervalID);

               if(trackRef.current.ended){
                   settrackMinute('00');
                   settrackSecond('00');
                   setPlay(false);
                   setProgresspercent1('0%');
               }
         },1000)
    }
    }

    const playpauseTrack = ()=>{
        if(play === false){
            trackRef.current.play();
            setPlay(true);
        }else{
            trackRef.current.pause();
            setPlay(false);
            clearInterval(trackintervalID);
        }
    }

    return(
       <>
        {details1.filter((detail)=>(detail.det1 === name)).map((detail,index)=>(
         
        <div className="trackContainer" key={index}>
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
                        <Link to='/Home'><div className='second'>
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

   <div className='transparent12'>
   <Link to="/Dashboard"><i className="fa-solid fa-less-than"></i></Link><span className='heading'>{detail.det1}</span>
   <i className="fa-solid fa-ellipsis-vertical" onClick={showtrackdetailBar}></i>
   </div>

   <div className='imgcontainer1'>
   <div className='imgcontain'><img src={detail.src} alt='ariana' className='ariimg'></img></div>
   <div className='dford1' style={{right:trackdetailbar}}>
      <div className='det1'>{detail.det1}</div>
      <div className='det2'>{detail.artist}</div>
      <div className='det3'>{detail.det3}</div>
      <div className='det4'>℗ 2022 Universal Music Operations Limited</div>
      <img src={IMAGES.closeb}  alt='like' className='close' onClick={hidetrackdetailBar}></img>
   </div>
   <div className='playerContainer1'>
   <div className='player1'>
   <div className='box1'>
                          <img src={detail.src} alt='track' className='vida'></img>
                          <div className='labels'>
                          <span>{detail.det1}</span>
                          <p>{detail.artist}</p>
                          </div>
                      </div>

                      <div className='box2'>
        <img src={`${play ? IMAGES.pause20: IMAGES.play4}`} alt='play' id='play1' onClick={playpauseTrack}></img>
        <audio src={detail.audio} ref={trackRef}></audio>
                      </div>

                      <div className='box3'>
                      <img src={`${src ? IMAGES.heart44 : IMAGES.heartflat1}`}  alt='like' className='heart' onClick={changelike}/>
                      </div>
   </div>
   </div>
   </div>
   
   <div className='imgcontainer'>
   <div className='imgcontain'><img src={detail.src} alt='ariana' className='ariimg'></img></div>
  
   <div className='trackdetails'>
   <div className='dford'>
      <div className='det1'>{detail.det1}</div>
      <div className='det2'>{detail.artist}</div>
      <div className='det3'>{detail.det3}</div>
      <div className='det4'>℗ 2022 Universal Music Operations Limited</div>
   </div>

   <div className='playerContainer1'>
                     <div className='player1'>
                         <div className='box1'>
                          <img src={detail.src} alt='track' className='vida'></img>
                          <div className='labels'>
                          <span>{detail.det1}</span>
                          <p>{detail.artist}</p>
                          </div>
                      </div>

                      <div className='box2'>
                        <img src={`${play ? IMAGES.pause20: IMAGES.play4}`} alt='play' id='play1' onClick={playpauseTrack}></img>
                        <audio src={detail.audio} ref={trackRef}></audio>
                      </div>

                      <div className='box3'>
                          <div className='start'>{trackminute}:{tracksecond}</div>
                          <div className='progressContainer'>
                            <div className='progress' style={{width:progresspercent1,background:'linear-gradient(to right,#00C9FF,#92FE9D)'}}></div>
                          </div>
                          <div className='end'>{detail.endtime}</div>
                      </div>
   </div>
   </div>
   </div>
   </div>

        </div>

))}

</>
    );
}

export default Track;