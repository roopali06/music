import React, { useEffect,useRef,useContext } from 'react';
import {motion} from 'framer-motion';
import IMAGES from './images/index.js';
import {Link} from 'react-router-dom';
import {Dashcontext} from './Dashcontext';

const Dashboard = ()=>{

  const {status,setStatus} = useContext(Dashcontext);
  const {sidebar,setSidebar} = useContext(Dashcontext);
  const {width,setWidth} = useContext(Dashcontext);
  const {width1,setWidth1} = useContext(Dashcontext);
  const {topmixes} = useContext(Dashcontext);
  const {artists} = useContext(Dashcontext);
  const {Etracks} = useContext(Dashcontext);
  const {albums} = useContext(Dashcontext);
  const {Kpophits} = useContext(Dashcontext);
  const {favourites} = useContext(Dashcontext);
  const {genres} = useContext(Dashcontext);
  const {lasts} = useContext(Dashcontext);
  const {firsts} = useContext(Dashcontext);
  const {optionbar,setOptionbar} = useContext(Dashcontext);
  const {loggeduser} =useContext(Dashcontext);
  
  

    const day = new Date();
    const hours = day.getHours();

    const scroll = useRef();
    const scroll1 = useRef();

    useEffect(()=>{
      setWidth(scroll.current.scrollWidth - scroll.current.offsetWidth);
      setWidth1(scroll1.current.scrollWidth - scroll1.current.offsetWidth);
    },[])

    const time = ()=>{

           if(hours >= 0 &&  hours < 12 ){
            setStatus('Good Morning');
           }else if(hours >= 12 && hours < 16){
            setStatus('Good Afternoon');
           }else if(hours >= 16 && hours <= 19){
            setStatus('Good Evening');
           }else if(hours > 19 && hours <= 24 ){
            setStatus ('Good Evening');
           }else{
            setStatus('Heyy'); 
           }
    }

    useEffect (()=>{
         time();
    });


    const take4 = '-200px';
    const hideSidebar = ()=>{
      setSidebar(take4);
    }

    const take5 = '0px';
    const revealSidebar = ()=>{
      setSidebar(take5);
    }

    const take99 = '-200px';
    const hideOptions = ()=>{
      setOptionbar(take99);
    }

    return(
        
          <div className='container2'>

           <div className='options' style={{right:optionbar}}>
            <div className='closeit'><i className="fa-solid fa-circle-xmark" onClick={hideOptions}></i></div>
            <p onClick={revealSidebar} className='set'>Settings</p>
            <p>Account</p>
            <p>Profile</p>
            <Link to='/Premium'><p>Upgrade to Premium</p></Link> 
           <Link to='/Signup'><p>Log out</p></Link> 
           </div>

              <div className='contain2'>
                  <div className='col1' style={{left:sidebar}}>
                     <div className='head'>
                     <i className="fi fi-rr-list"></i>
                     <i className="fa-solid fa-circle-xmark" onClick={hideSidebar}></i>
                     <i className="fi fi-rr-headset"></i><span>M U Z I K A</span>
                     </div>
                     <div className='menus'>
                     <Link to='/'><div className='first'>
                        <i className="fi fi-rr-home"></i>
                         <span>Home</span>
                         </div></Link>
                         <Link to='/Like'><div className='second'>
                         <i className="fi fi-rr-thumbs-up"></i>
                         <span>Liked songs</span>
                         </div></Link>
                         <Link to='/'><div className='third'>
                        <i className="fi fi-rr-add"></i>
                         <span>Create playlist</span>
                         </div></Link>
                         <Link to='/Home'><div className='fourth'>
                         <i className="fi fi-rr-music-alt"></i>
                         <span>Your library</span>
                         </div></Link>
                         <Link to='/'><div className='fifth'>
                         <i className="fi fi-rr-clock"></i>
                         <span>Listen later</span>
                         </div></Link>
                         <Link to='/'><div className='sixth'>
                         <i className="fi fi-rr-settings"></i>
                         <span>Settings</span>
                         </div></Link>
                         <Link to='/Download'><div className='seventh'>
                         <i className="fi fi-rr-download"></i>
                         <span>Install app</span>
                         </div></Link>
                         <Link to='/Support'><div className='eigth'>
                         <i className="fi fi-rr-interrogation"></i>
                         <span>Help</span>
                         </div></Link>
                         <Link to='/'><div className='ninth'>
                         <i className="fi fi-rr-share"></i>
                         <span>Share app</span>
                         </div></Link>
                         <Link to='/'><div className='tenth'>
                         <i className="fi fi-rr-exclamation"></i>
                         <span>Send feedback</span>
                         </div></Link>
                     </div>
                  </div>
             <div className='col2'>
             <div className='container92'>
             <p>{status} {loggeduser}</p>
             <motion.div className='carousel1' ref={scroll1}>
             <motion.div className='boxes' drag='x' dragConstraints={{right:0,left:-width1}}>

             {firsts.map((first,index)=>(
               
             <motion.div className='box1' key={index}><img src={first.src} alt='album'></img><span>{first.title}</span>
             <Link to={first.link}><img src={IMAGES.play} alt='play' className='playbtn'></img></Link></motion.div>

             ))
             }
                  </motion.div>
                  </motion.div>
  </div>
                  <div className='container3'>
                <div className='contain3'>
                <div className='head1'>Your Top Mixes</div>
                <a href='App.js'>SEE MORE</a>
                <motion.div className='carousel' ref={scroll}>
                <motion.div className='boxcontainer' drag='x' dragConstraints={{right:0,left:-width}}>
                  
                {topmixes.map((topmix,index)=> (
                     
                    <motion.div className='box11' key={index}><i className="fi fi-rr-headset"></i><img src={topmix.src} alt='top mix' className='mainpic'></img><Link to={topmix.link}><img src={IMAGES.play2} alt='playbtn' className='btn'></img></Link><div className='half'>{topmix.title}</div><div className='singers'>{topmix.artists}</div></motion.div>
                    ))
                }
               
                </motion.div>
                </motion.div>
            </div>

            <div className='container4'>
            <div className='head2'>Artists You May Like</div>
            <a href='App.js'>SEE MORE</a>
            <motion.div className='carousel'>
            <motion.div className='contain4' drag='x' dragConstraints={{right:0,left:-width}}>

                {artists.map((artist,index)=>(

    <motion.div className='circles' key={index}><img src={artist.src} className='artistimg' alt='artist'></img><Link to={artist.link}><img src={IMAGES.play4} className='play6' alt='button'></img></Link><div className='artist'>{artist.title}</div></motion.div>
                
                ))

                }

          </motion.div>
          </motion.div>
        </div>

<div className='container5'>
        <div className='contain5'>
                <div className='head3'>Electronic Zone</div>
                <a href='App.js'>SEE MORE</a>
                <motion.div className='carousel'>
                <motion.div className='boxcontainer' drag='x' dragConstraints={{right:0,left:-width}}>

                {Etracks.map((etrack,index)=>(

<motion.div className='box12' key={index}><i className="fi fi-rr-headset"></i><img src={etrack.src} alt='top mix'></img><Link to={etrack.link}><img src={IMAGES.play2} alt='playbtn' className='btn'></img></Link><div className='half'>{etrack.title}</div><div className='singers'>{etrack.artists}</div></motion.div>
                ))
                
                }

                </motion.div>
                </motion.div>
            </div>
            </div>

            <div className='container6'>
                <div className='head4'>Most Streamed Albums</div>
                <motion.div className='carousel1' ref={scroll1}>
                <motion.div className='contain6' drag='x' dragConstraints={{right:0,left: -width1}}>

               {albums.map((album,index)=>(

             <motion.div className='box13' key={index}><i className="fi fi-rr-headset"> {album.css1}</i><img src={album.src} alt='album img' className='mainpict'></img><Link to={album.link}><img src={IMAGES.play4} alt='playbtn' className='btn'></img></Link><div className='contain'><div className='main'>{album.title}</div><div className='sub'>{album.artist}</div></div></motion.div>
               ))
               
               }

                </motion.div>
                </motion.div>
            </div>

            <div className='container7'>
                    <div className='head5'>K-Pop Swag</div>
                    <a href='Section1.js'>SEE MORE</a>
                    <motion.div className='carousel'>
                      <motion.div className='contain7' drag='x' dragConstraints={{right:0,left: -width}}>

                      {Kpophits.map((Kpophit,index)=>(

                <motion.div className='box14' key={index}>
              <i className="fi fi-rr-headset"></i>
              <img src={Kpophit.src} alt='korean music'></img>
              <Link to={Kpophit.link}><img src={IMAGES.play4} alt='playbtn' className='btn14'></img></Link> 
              <div className='info'><span>{Kpophit.title}</span><div className='singer'>{Kpophit.artist}</div></div>
                        </motion.div>
                      ))
                      
                      }

                      </motion.div>
                      </motion.div>
            </div>

            <div className='container8'>
                <div className='head6'>Playlists You May Like</div>
                <motion.div className='carousel'>
                 <motion.div className='contain8' drag='x' dragConstraints={{right:0,left: -width}}>

                      {favourites.map((favourite,index)=>(
                        <motion.div className='box15' key={index}>
                         <img src={favourite.src} alt='anime'></img><i className="fi fi-rr-headset"> 6.5k</i>
             <Link to={favourite.link}><img src={IMAGES.play4} alt='playbtn' className='btn15'></img></Link>
             <div className='content1'>
                             <span>{favourite.title}</span>
                           <div className='content2'>{favourite.artist}</div>
                         </div>
                     </motion.div>
                      ))
                      }

                 </motion.div>
                 </motion.div>
            </div>

            <div className='container9'>
             <div className='head7'>Browse All Genres</div>
             <motion.div className='carousel1' ref={scroll1}>
             <motion.div className='contain9' drag='x' dragConstraints={{right:0,left: -width1}}>

           {genres.map((genre,index)=>(

            <motion.div className='box16' style={genre.css} key={index}><i className="fi fi-rr-headset"></i><div className='genre'>{genre.title}</div><Link to={genre.link}><img src={IMAGES.play13} alt='playbtn' className='btn16'></img></Link><img src={genre.src} alt='playbtn' className='cd'></img></motion.div>
          ))
          }
             </motion.div>
             </motion.div>
            </div>
            <div className='container10'>
               <div className='head8'>Listen And Relax Mode</div>
               <a href='Section1.js' className='see'>SEE MORE</a>
               <motion.div className='carousel1' ref={scroll1}>
                <motion.div className='contain10' drag='x' dragConstraints={{right:0,left: -width1}}>

                    {lasts.map((last,index)=>(

                        <motion.div className='box17' key={index}>
                       <i className="fi fi-rr-headset" style={last.css}></i>
                          <img src={last.src} alt='track' className='track'></img>
                        <Link to={last.link}><img src={IMAGES.play13} alt='playbtn' className='btn17'></img></Link>
                          <div className='info1'>
                              <span>{last.title}</span>
                            <div className='musician'>{last.artist}</div>
                          </div>
                      </motion.div>
                    ))
                    }

                </motion.div>
                </motion.div>
            </div>

            <div className='container11'>
             <div className='finalpicture11'>
                 <div className='quote1'><i className="fas fa-quote-left"></i>Once again, she was free. Once again, she <br/> found peace. It was music that freed her soul from <br/> the dungeon of her mind.<i className="fas fa-quote-right"></i></div>
                 <div className="justablock"></div>
                 <div className="person">Wiss Auguste,The Illusions of Hope</div>
             </div>
            </div>
        </div>
               </div>
              </div>
          </div>
    );
}

export default Dashboard;