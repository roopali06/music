import React,{useState,createContext} from 'react';
import IMAGES from './images/index.js';
import TRACKS from './songs/index1.js';

export const Trackcontext = createContext();

export const TrackProvider = (props)=>{
    const [play,setPlay] = useState(false);
    const [trackminute,settrackMinute] = useState('00');
    const [tracksecond,settrackSecond] = useState('00');
    const [trackintervalID,settrackintervalID]=useState('');
    const [trackdetailbar,settrackdetailBar] = useState('');
    const [src,setSrc] = useState(true);
    const [progresspercent1,setProgresspercent1] = useState('0%');
    const [currenttime1,setCurrenttime1] = useState('');
    const [timeinseconds1,setTimeinseconds1] = useState('');
    const [details1] = useState(
        [
          {
              det1:'One Last Time',
              det2:'album',
              det3:'Song · 45,855 Plays · 3:19 · English',
              det4:'℗ 2022 Universal Music Operations Limited',
              endtime:'3:19',
              id:1,
              src:IMAGES.ari11,
              artist:'Ariana Grande',
              audio:TRACKS.onelasttime,
          },
          {
           det1:'Let Me Down Slowly',
           det2:'album',
           det3:'Song · 30,703 Plays · 2:50 · English',
           det4:'℗ 2022 Universal Music Operations Limited',
           endtime:'2:50',
           id:2,
           src:IMAGES.alec,
           artist:'Alec Benjamin',
           audio:TRACKS.letme,
           
       },
       {
         det1:'Everglow',
         det2:'album',
         det3:'Song · 16,785 Plays · 4:41 · English',
         det4:'℗ 2022 Universal Music Operations Limited',
         endtime:'4:41',
         id:3,
         src:IMAGES.ever,
         artist:'COLDPLAY',
         audio:TRACKS.everglow,
     },
     {
       det1:'A Different Way',
       det2:'album',
       det3:'Song · 13,811 Plays · 3:18 · English',
       det4:'℗ 2022 Universal Music Operations Limited',
       endtime:'3:18',
       id:4,
       src:IMAGES.diff,
       artist:'DJ Snake,Lauv',
       audio:TRACKS.way,
   },
   
   {
     det1:'Burn',
     det2:'album',
     det3:'Song · 22,564 Plays · 3:52 · English',
     det4:'℗ 2022 Universal Music Operations Limited',
     endtime:'3:52',
     id:5,
     src:IMAGES.burn12,
     artist:'Ellie Goulding',
     audio:TRACKS.burn1,
   },
   
   {
     det1:'Death Bed',
     det2:'album',
     det3:'Song · 11,792 Plays · 2:54 · English',
     det4:'℗ 2022 Universal Music Operations Limited',
     endtime:'2:54',
     id:6,
     src:IMAGES.pow,
     artist:'Powfu',
     audio:TRACKS.death,
   },
   
   {
     det1:'Be Kind',
     det2:'album',
     det3:'Song · 12,765 Plays · 2:54 · English',
     det4:'℗ 2022 Universal Music Operations Limited',
     endtime:'2:54',
     id:7,
     src:IMAGES.bekind,
     artist:'Halsey,Marshmello',
     audio:TRACKS.Be,
   },
   
   {
   det1:'Imagination',
   det2:'album',
   det3:'Song · 14,345 Plays · 3:38 · English',
   det4:'℗ 2022 Universal Music Operations Limited',
   endtime:'3:38',
   id:8,
   src:IMAGES.imagi,
   artist:'Shawn Mendes',
   audio:TRACKS.imagination,
   },
   
   {
   det1:'Scars To Your Beautiful',
   det2:'album',
   det3:'Song · 25,781 Plays · 3:51 · English',
   det4:'℗ 2022 Universal Music Operations Limited',
   endtime:'3:51',
   id:9,
   src:IMAGES.ale,
   artist:'Alessia Cara',
   audio:TRACKS.scars,
   },
   
   {
   det1:'Overpass Graffiti',
   det2:'album',
   det3:'Song · 22,834 Plays · 4:01 · English',
   det4:'℗ 2022 Universal Music Operations Limited',
   endtime:'4:01',
   id:10,
   src:IMAGES.ed56,
   artist:'Ed Sheeran',
   audio:TRACKS.overpass,
   },
   
   {
   det1:'Chlorine',
   det2:'album',
   det3:'Song · 17,985 Plays · 5:24 · English',
   det4:'℗ 2022 Universal Music Operations Limited',
   endtime:'5:24',
   id:11,
   src:IMAGES.chlorine,
   artist:'Twenty One Pilots',
   audio:TRACKS.chlo,
   },
   
   {
   det1:'You Broke Me First',
   det2:'album',
   det3:'Song · 32,284 Plays · 3:38 · English',
   det4:'℗ 2022 Universal Music Operations Limited',
   endtime:'3:38',
   id:12,
   src:IMAGES.broke,
   artist:'Tata McRae',
   audio:TRACKS.tata,
   },
        ]
      );
   

    const value ={play,setPlay,trackminute,settrackMinute,tracksecond,settrackSecond,trackintervalID,settrackintervalID,details1,trackdetailbar,settrackdetailBar,src,setSrc,progresspercent1,setProgresspercent1,currenttime1,setCurrenttime1,timeinseconds1,setTimeinseconds1};

    return(
        <Trackcontext.Provider value={value}>
            {props.children}
        </Trackcontext.Provider>
    );
}