
import React,{forwardRef} from 'react';
import IMAGES from './images/index.js';



const Tracks = forwardRef(({tracklist,playing,setPlaying,currentTrack,setCurrentTrack,setTitle,setArtist,setCoverpic,setplayerTrack,setplayerPlaying,setplayerTrackId,setendDuration,intervalID,setBottombar,setBottombarimage,setBottombartitle,setBlock},ref)=>{

          const take20 = '80px';

          const showBlock = ()=>{
                setBlock(take20)
          }

           const take6 ='0px';

           return(
            <>
            {tracklist.map((track,index)=>(

        <div key={track.id} >
        <div className="container89" >

         <audio ref={ref} src={track.audio}/>
  
         <div className="playB" onClick={(e)=>{

         ref.current.src = track.audio;
            
          currentTrack = track;
          setCurrentTrack(currentTrack);
          if(track.id === currentTrack.id){
         if(!playing){
          ref.current.play().then(()=>{
         setPlaying(true);
         setplayerPlaying(true);
         setTitle(currentTrack.title);
         setArtist(currentTrack.artist);
         setCoverpic(currentTrack.coverpic);
         setplayerTrack(currentTrack);
         setplayerTrackId(currentTrack.id);
         setendDuration(track.duration);

   }).catch((e)=>{
     console.log('Error:',e);
   })

       }else{
         setPlaying(false);
         setplayerPlaying(false);
         clearInterval(intervalID);
       }

}else{
 console.log('Error playing the track!');
}
}}  

>

        <img src={`${playing && track.id === currentTrack.id ? IMAGES.pause20 : IMAGES.play4 }`} alt='playbutton'/></div>
        <div className="id">{track.id}</div>
        <div className="cover" style={track.css}><img src={track.coverpic} alt='cover'/><span>{track.title}</span></div>
        <div className="al">{track.album}</div>
        <div className="ar">{track.artist}</div>
        <div className="duration">{track.duration}</div>
        <div className='point'><i className="fa-solid fa-ellipsis" onClick={showBlock}></i></div>
        <i className="fa-solid fa-ellipsis-vertical" onClick={()=>{
        setBottombar(take6);
        setBottombarimage(track.coverpic);
        setBottombartitle(track.title);
        }}></i>
        </div>
        </div>
        
))}

</>

)

})

export default Tracks;