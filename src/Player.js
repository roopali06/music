import React,{forwardRef,useEffect} from 'react';
import IMAGES from './images/index.js';



const Player = forwardRef(({playing,setPlaying,title,setTitle,artist,setArtist,coverpic,setCoverpic,currentTrack,setCurrentTrack,endduration,setendDuration,playerTrackId,setplayerTrackId,playerTrack,setplayerTrack,playerPlaying,setplayerPlaying,tracklist,minute,setMinute,second,setSecond,progresspercent,setprogressPercent,currenttime,setCurrenttime,timeinseconds,setTimeinseconds,intervalID,setintervalID,setConnectbar,likeit,setLikeit},ref)=>{

    const take92 = '57px';
    const tracklistLength = tracklist.length;

    const changetheIcon = ()=>{
         setLikeit(likeit ? likeit = false : likeit = true);
    }

    const showConnectbar = ()=>{
        setConnectbar(take92);
      }
        
          useEffect(()=>{
                          
           setTime();

             },[playing,playerPlaying,currentTrack,playerTrack,playerTrackId]) 
        


const setTime = () =>{
                if(playing && playerPlaying && currentTrack && playerTrack && playerTrackId){
                const exactsec = Math.ceil(ref.current.duration);
                const totaltime = exactsec/60;
                const minutes = Math.floor(totaltime);
                const seconds = Math.ceil(exactsec - (minutes * 60));

                     
                    intervalID  = setInterval(()=>{
                       currenttime = Math.floor(ref.current.currentTime);
                        setCurrenttime(currenttime);
    
                        timeinseconds = Math.floor(ref.current.duration);
                        setTimeinseconds(timeinseconds);
                     
                        progresspercent = Math.floor((currenttime/timeinseconds)*100);
                        setprogressPercent(`${progresspercent}%`);

                        ++second; 
                        setSecond( second <10 ? `0${second}`: second );
                        if(second === 59){
                        ++minute;
                        setMinute(minute);
                        second = 0;
                        }  

                    if(progresspercent === 100){
                        clearInterval(intervalID);
                                  setMinute('00');
                                  setSecond('00');
                                  setprogressPercent('0%');
                                  setPlaying(false);
                                  setplayerPlaying(false);
                } 

         },1000)

         setintervalID(intervalID);
         
        }else{
           setMinute ('00');
           setSecond ('00');
           setprogressPercent('0%');
           clearInterval(intervalID);
        }

        setintervalID(intervalID);

            }
           
              const playpause = ()=>{
              tracklist.map((track)=>{
              playerTrack = track;
              if(title === track.title && artist === track.artist && coverpic === track.coverpic){
                ref.current.src = track.audio;
              if(playerTrack){
                ref.current.play().then(()=>{
              setplayerPlaying(true);
              setCurrentTrack(track);
              setPlaying(true);
              setplayerTrack(track);
              setplayerTrackId(track.id);
              setendDuration(track.duration);
              if(playerPlaying && playing){
                ref.current.pause();
                    setPlaying(false);
                    setplayerPlaying(false);
                    clearInterval(intervalID);
                }else{
                    setPlaying(true);
                    setplayerPlaying(true);
                }
            }).catch((e)=>{
                console.log(e);
            })
        }
       }

    })
}

            const nextTrack = ()=>{ 
            if((currentTrack && playerTrack)  && (playing && playerPlaying)){
                   if(playerTrackId < tracklistLength){
                       clearInterval(intervalID);
                       ++playerTrackId;
                       setplayerTrackId(playerTrackId);
                       setMinute('00');
                       setSecond('00');
                       
                    tracklist.map((track)=>{
                        if(playerTrackId === track.id){
                            ref.current.src = track.audio;
                            setCurrentTrack(track);
                            setplayerTrack(track);
                            ref.current.play();
                            setTitle(track.title);
                            setArtist(track.artist);
                            setCoverpic(track.coverpic);
                            setendDuration(track.duration);
                        }
                    })
                   }else{
                    setplayerTrackId(0);
                   }
            }else{
                console.log('error');
            }
    }

    const previousTrack = ()=>{
            if((currentTrack && playerTrack) && (playing && playerPlaying)){
            if(playerTrackId > 1){
             clearInterval(intervalID);
             --playerTrackId;
             setplayerTrackId(playerTrackId);
             setMinute('00');
             setSecond('00');
        
             tracklist.map((track)=>{
                 if(playerTrackId === track.id){
                    ref.current.src = track.audio;
                     setCurrentTrack(track);
                     setplayerTrack(track);
                     ref.current.play();
                     setTitle(track.title);
                     setArtist(track.artist);
                     setCoverpic(track.coverpic);
                     setendDuration(track.duration);
                 }
                })
            }else{
                setplayerTrackId(tracklistLength+1);
            }
     }else{
         console.log('error');
     }

    }


    return (
       
        <div className='playerContainer'>
                  <div className='player'>
                      <div className='box1'>
                          <img src={coverpic} alt='track' className='vida'></img>
                          <div className='labels'>
                              <span>{title}</span>
                              <p>{artist}</p>
                          </div>
                      </div>
                      <div className='box2'>
                      
                <div className='shuffle'><img src={`${likeit ? IMAGES.heart44 : IMAGES.silverheart }`} alt='shuffle' id='shuffle1' onClick={changetheIcon}></img></div>
              
                         <div className='previous'><img src={IMAGES.prev} alt='previous' onClick={previousTrack}></img></div>
                        
                         <div className='play'><img src={`${playing ? IMAGES.pause20 : IMAGES.play4 }`} onClick={playpause} alt='play' id='play1'></img></div>
                        
                         <audio ref={ref}></audio>
                        
                         <div className='next'><img src={IMAGES.next1} alt='next' onClick={nextTrack}></img></div>
                         <div className='repeat'><img src={IMAGES.devices4} onClick={showConnectbar} alt='repeat' id='repeat1'></img></div>
                      </div>
                      <div className='box3'>
                          <div className='start'>{`${minute}:${second}`}</div>
                          <div className='progressContainer'>
     <div className='progress' style={{width:progresspercent,background:'linear-gradient(to right,#00C9FF,#92FE9D)'}}></div>
                          </div>
                          <div className='end'>{endduration}</div>
                      </div>
                  </div>
              </div>

    );
})

export default Player;