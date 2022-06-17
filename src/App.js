import React,{useState,useRef} from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar'
import Dashboard from './Dashboard';
import Playlist from './Playlist';
import Tracks from './Tracks';
import Player from './Player';
import Signup from './Signup';
import Login from './Login';
import Extras from './Extras';
import Support from './Support';
import Premium from './Premium';
import Download from './Download';
import Track from './Track';
import {Routes,Route} from 'react-router-dom';
import {DashProvider} from './Dashcontext';
import {SignupProvider} from './Signupcontext';
import {TrackProvider} from './Trackcontext';
import IMAGES from './images/index.js';
import TRACKS from './songs/index1.js';

function App() {
   
   const [tracklist] = useState(
    [
      {
    
        title:'Save Your Tears',
        artist:'The weeknd',
        coverpic:IMAGES.weekend2,
        audio:TRACKS.weeknd,
        id:1,
        album:'After Hours',
        duration:'3:14',
        like:'heart1',
    },
    
    {
      title:'Levitating',
      artist:'Dua Lipa',
      coverpic:IMAGES.levitate,
      audio:TRACKS.levitatem,
      id:2,
      album:'Future Nostalgia',
      duration:'3:41',
      like:'heart2',
     },
    
     {
      title:'Butter',
      artist:'BTS',
      coverpic:IMAGES.Butter,
      audio:TRACKS.butter,
      id:3,
      album:'Butter',
      duration: '2:45',
      like:'heart3',
     },
    
     {
      title:'Takeaway',
      artist:'The Chainsmokers',
      coverpic:IMAGES.chainsmokers,
      audio:TRACKS.takeaway,
      id:4,
      album:'World War Joy',
      duration:'3:48',
      like:'heart4',
     },
    
     {
      title:'Bad Habits',
      artist:'Ed Sheeran',
      coverpic:IMAGES.bad1,
      audio:TRACKS.badhabits,
      id:5,
      album:'Equals',
      duration:'3:52',
      like:'heart5',
     },
    
     {
      title:'Go Easy',
      artist:'Adele',
      coverpic:IMAGES.adele1,
      audio:TRACKS.easy,
      id:6,
      album:'30',
      duration:'4:03',
      like:'heart6',
     },
    
     {
      title:'You Need To Calm Down',
      artist:'Taylor Swift',
      coverpic:IMAGES.tay,
      audio:TRACKS.calmdown,
      id:7,
      album:'Lover',
      duration:'3:31',
      like:'heart7',
     },
    
     {
      title:'Make It Right',
      artist:'BTS and Lauv',
      coverpic:IMAGES.makeitright,
      audio:TRACKS.makeitright1,
      id:8,
      album:'Persona',
      duration:'3:46',
      like:'heart8',
     },

     {
      title:'Sweet But Psycho',
      artist:'Ava Max',
      coverpic:IMAGES.ava2,
      audio:TRACKS.sweet,
      id:9,
      album:'Heaven & Hell',
      duration:'3:08',
      like:'heart9',
     },
    
     {
      title:'Poker Face',
      artist:'Lady Gaga',
      coverpic:IMAGES.poker,
      audio:TRACKS.pokerface,
      id:10,
      album:'The Fame',
      duration:'3:34',
      like:'heart10',
      css:{marginLeft:'10px'},
     },
    
    ]
   );

   const [details] = useState(
    [
     {
       src: IMAGES.sams,
       title:'Remix Deck',
       desc:'Turn up the speakers for your favorite remixes',
       id:'Remix Deck',
       css:{backgroundImage: 'linear-gradient(8deg,rgba(134,209,228,1) -1.8%,rgba(60,80,115,1) 86.4% )'},
       sup:'2.8k',
   },
     {
       src: IMAGES.billie1,
       title:'Pop Rising',
       desc:'Turn up the speakers for your favorite pop tracks',
       id:'Pop Rising',
       css:{background:'linear-gradient(80deg, #516395 65%, #999966 10%)'},
       sup:'1.2k',
       css02:{color:'#000'},
     },
   
     {
       src: IMAGES.adele3,
       title:'Adele Mix',
       desc:'Turn up the speakers for your favorite Adele tracks',
       id:'Adele Mix',
       css:{background:'linear-gradient(360deg, #654ea3 0%, #FC5C7D 100%)'},
       sup:'2.2k',
     },
   
     {
       src: IMAGES.charlie1,
       title:'Moody Hits',
       desc:'Turn up the speakers for your favorite moody hits',
       id:'Moody Hits',
       css:{background:'linear-gradient(360deg,#224e4d 0%,#083023 100%)'},
       sup:'3.4k',
     },
   
     {
       src: IMAGES.taylor2,
       title:'Chill Hits',
       desc:'Turn up the speakers for your favorite chill hits',
       id:'Chill Hits',
       css:{background:'linear-gradient(145deg, rgb(255, 148, 114) 60%, rgb(242, 112, 156) 10%'},
       sup:'1.6k',
     },
   
     {
       src: IMAGES.weekend2,
       title:'Mega Hit Mix',
       desc:'Turn up the speakers for your favorite mega hits',
       id:'Mega Hit Mix',
       css:{background:'linear-gradient(180deg, #8e7a3f 20%, #b09a51 100%)'},
       sup:'5.4k',
     },

/*-----------------------------Your Top Mixes -Starts---------------------------------------------------*/

     {
       src:IMAGES.olivia2,
       title:'Olivia Rodrigo Mix',
       desc:'Turn up the speakers for your favorite olivia Rodrigo hits',
       id:'Olivia Rodrigo Mix',
       css:{background:'linear-gradient( 147deg, rgba(110,123,251,1) 30%,#ff5e62 90% )'},
       sup:'9.7k',
       css02:{color:'#000'},
       css92:{color:'#000'},
  },

  {
   src:IMAGES.lisa2,
   title:'K-Pop Mix',
   desc:'Turn up the speakers for your favorite K-Pop hits',
   id:'K-Pop Mix',
   css:{background:'linear-gradient(420deg, rgba(2,83,185,1) 41.5%, #3498db 0% '},
   sup:'12.2k',
   css92:{color:'#000'},
  },

  {
   src:IMAGES.bts2,
   title:'BTS Mix',
   desc:'Turn up the speakers for your favorite BTS hits',
   id:'BTS Mix',
   css:{background:'linear-gradient(25deg, #d04ed6 52%,#a044ff 10%)'},
   sup:'3.3k',
   css92:{color:'#000'},
  },

  {
   src:IMAGES.sam1,
   title:'2010s Mix',
   desc:'Turn up the speakers for your favorite 2010s hits',
   id:'2010s Mix',
   css:{background:'linear-gradient(165deg, #3498db 30%, #73C8A9 100%)'},
   sup:'7.1k',
  },


/*-------------------------------Your Top Mixes -Ends--------------------------------------------------*/

/*----------------------Artists You May Like -Starts--------------------------------------------------*/

  {
   src:IMAGES.dua2,
   title:'Dua Lipa',
   desc:'Turn up the speakers for your favorite Dua Lipa hits',
   id:'artist-Dua Lipa',
   css:{backgroundImage:`url(${IMAGES.pos2})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
 },
 css1:{color:'#1f4037'},
 css2:{color:'#000'},
 sup:'7.2k',
 css92:{color:'#000'},
  },

  {
   src:IMAGES.shawnM,
   title:'Shawn Mendes',
   desc:'Turn up the speakers for your favorite Shawn Mendes hits',
   id:'artist-Shawn Mendes',
   css:{backgroundImage:`url(${IMAGES.pic13})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
 },
 sup:'9.1k',
 css92:{color:'#000'},
  },

  {
   src:IMAGES.ava5,
   title:'Ava Max',
   desc:'Turn up the speakers for your favorite Ava Max hits',
   id:'artist-Ava Max',
   css:{backgroundImage:`url(${IMAGES.des5})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
 },
 sup:'3.7k',
 css92:{color:'#000'},
  },

  {
   src:IMAGES.ed22,
   title:'Ed Sheeran',
   desc:'Turn up the speakers for your favorite Ed Sheeran hits',
   id:'artist-Ed Sheeran',
   css:{backgroundImage:`url(${IMAGES.pastel})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
 },
   css1:{color:'#ff5e62'},
   css2:{color:'#000'},
   sup:'8.8k',
   css02:{color:'#000'},
  },

/*----------------------Artists You May Like -Ends--------------------------------------------------*/

/*----------------------Electronic Zone -Starts-----------------------------------------------------*/

  {
   src:IMAGES.edm1,
   title:'Dynamic EDM Blast',
   desc:'Turn up the speakers for your favorite Dynamic EDM hits',
   id:'Dynamic EDM Blast',
   css:{background:'linear-gradient(180deg, #1F1C2C 20%,#606c88 100%)'},
   sup:'4.9k',
  },

  {
   src:IMAGES.edm2,
   title:'Popular 10s EDM',
   desc:'Turn up the speakers for your favorite Popular 10s EDM hits',
   id:'Popular 10s EDM',
   css:{background:'linear-gradient(180deg, #1F1C2C 20%, #928DAB 100%)'},
   sup:'3.5k',
  },

  {
   src:IMAGES.edm6,
   title:'Most Popular Upbeat EDM',
   desc:'Turn up the speakers for your favorite Most Popular Upbeat EDM hits',
   id:'Most Popular Upbeat EDM',
   css:{background:'linear-gradient(180deg, #1F1C2C 20%, #B79891 100%)'},
   sup:'1.7k',
  },

  {
   src:IMAGES.edm7,
   title:'Chill Electronic Hits',
   desc:'Turn up the speakers for your favorite Chill Electronic hits',
   id:'Chill Electronic Hits',
   css:{background:'linear-gradient(180deg, #1F1C2C 20%, #DAE2F8 100%)'},
   sup:'1.2k',
  },

/*---------------------------------Electronic Zone -Ends--------------------------------------*/

/*----------------------Most Streamed Albums -Starts--------------------------------------------*/

  {
   src:IMAGES.olivia7,
   title:'Album: Sour',
   desc:'Olivia Rodrigo',
   id:'album-Olivia Rodrigo',
   css:{background:'linear-gradient(147deg, #f857a6 20%, #f953c6 100%)'},
   sup:'2.0k',
  },

  {
   src:IMAGES.weekend1,
   title:'Album: Dawn FM',
   desc:'The Weeknd',
   id:'album-The Weeknd',
   css:{background:'linear-gradient(370deg, #9a8478 60%, #83a4d4 10%)'},
   sup:'5.3k',
  },

  {
   src:IMAGES.butter1,
   title:'Album: Butter',
   desc:'BTS',
   id:'album-BTS',
   css:{background:'linear-gradient(350deg, #a8c0ff 10%, #B06AB3 100%)'},
   sup:'1.6k',
   css02:{color:'#000'},
   css92:{color:'#000'},
  },

  {
   src:IMAGES.glass2,
   title:'Album: Dreamland',
   desc:'Glass Animals',
   id:'album-Glass Animals',
   css:{background:'linear-gradient(180deg, #3fada8 60%, #4B79A1 10%)'},
   sup:'9.8k',
   css02:{color:'#000'},
   css92:{color:'fff'},
  },

  {
   src:IMAGES.cold1,
   title:'Album: Cold Heart',
   desc:'Elton John,Dua Lipa',
   id:'album-Elton John,Dua Lipa',
   css:{background:'linear-gradient(147deg, #f4791f 10%, #FDC830 100%)'},
   sup:'2.2k',
   css92:{color:'#000'},
  },

  {
   src:IMAGES.ed4,
   title:'Album: =',
   desc:'Ed Sheeran',
   id:'album-Ed Sheeran',
   css:{background:'linear-gradient(125deg, #536976 52%, #DBD4B4 10%)'},
   sup:'8.8k',
  },

  {
   src:IMAGES.justin4,
   title:'Album: Justice',
   desc:'Justin Bieber',
   id:'album-Justin Bieber',
   css:{background:'linear-gradient(120deg, #CC95C0 52%, #7AA1D2 0%)'},
   sup:'3.1k',
   css92:{color:'#000'},
  },

  {
   src:IMAGES.taylor,
   title:'Album: Red',
   desc:'Taylor Swift',
   id:'album-Taylor Swift',
   css:{background:'linear-gradient(180deg, #D31027 20%, #D31027 100%)'},
   sup:'5.0k',
  },

  /*----------------------Most Streamed Albums -Ends-----------------------------*/

  /*----------------------K-Pop Swag Starts-----------------------------*/

  {
   src:IMAGES.bts8,
   title:'Album: Dynamite',
   desc:'BTS',
   id:'album-Dynamite',
   css:{background: 'linear-gradient( 123.5deg, rgba(244,173,6,1) 18.6%, rgba(229,251,31,1) 119.9% )'},
   sup:'12.8k',
   css02:{color:'#000'},
   css92:{color:'#000'},
  },

  {
   src:IMAGES.tree,
   title:'Album: Christmas Tree',
   desc:'Kim Taehyung',
   id:'album- Christmas Tree',
   css:{background:'linear-gradient( 293.5deg,  rgba(181,149,208,1) 3.2%, rgba(251,148,207,1) 9.9%, rgba(181,149,208,1) 22.9%, rgba(251,148,207,1) 36.4%, rgba(181,149,208,1) 50.1%, rgba(251,148,207,1) 61.1%, rgba(181,149,208,1) 71.2%, rgba(251,148,207,1) 84.2%, rgba(181,149,208,1) 92.2% )'},
   sup:'22.3k',
   css92:{color:'#000'},
  },

  {
   src:IMAGES.blackpink2,
   title:'Album: Kill This Love',
   desc:'BLACKPINK',
   id:'album-Kill This Love',
   css:{background:'linear-gradient( 380deg, rgba(155,254,23,1) 45.5%, rgba(36,243,8,1) 97.9% )'},
   sup:'5.5k',
   css92:{color:'#000'},
  },

  {
   src:IMAGES.iu,
   title:'Album: Lilac',
   desc:'IU',
   id:'album-Lilac',
   css:{background: 'linear-gradient(168.7deg, rgba(42,136,157,1) 1.7%, rgba(122,197,214,1) 51.1%, rgba(211,232,242,1) 95.5% )'},
   sup:'32.0k',
   css92:{color:'#000'},
  },

  {
   src:IMAGES.monsta1,
   title:"Album: Someone's Someone",
   desc:'Monsta X',
   id:'album-Monsta X',
   css:{background: 'radial-gradient( circle 835px at 10.1% 95.3%,  rgba(242,188,141,1) 0%, rgba(242,159,141,1) 100.2% )'},
   sup:'12.1k',
   css92:{color:'#000'},
  },

  /*----------------------K-Pop Swag Ends-----------------------------*/

   /*----------------------Playlists You May Like -Starts-----------------------------*/

  {
   src:IMAGES.anime6,
   title:'Alone Again',
   desc:'Selena Gomez,James Arthur,Aurora,Ariana Grande & More',
   id:'genre-Alone Again',
   css:{background:'linear-gradient(180deg, #355C7D 10%,#4ECDC4 100%)'},
   sup:'3.3k',
   css92:{color:'#000'},
  },

  {
   src:IMAGES.billie2,
   title:'Teen Pop',
   desc:'Harry Styles,Billie Eillish,Jonas Brothers & More',
   id:'genre-Teen Pop',
   css:{background:'linear-gradient(180deg, #C06C84 20%, #FF6B6B 100%)'},
   sup:'6.4k',
   css92:{color:'#000'},
  },

  {
   src:IMAGES.mood5,
   title:'Mood Benders',
   desc:'Charlie Puth,Halsey,The Weeknd,Nirvana,Kygo & More',
   id:'genre-Mood Benders',
   css:{background:'linear-gradient(147deg, #B06AB3 20%, #FFAF7B 100%)'},
   sup:'7.2k',
  },

  {
   src:IMAGES.underarmour,
   title:'Workout Mix',
   desc:'Beyonce,Usher,Chris Brown,Akon,Rihanna & More',
   id:'genre-Workout Mix',
   css:{background:'linear-gradient(180deg, #BA5370 20%, #d6ae7b 100%)'},
   sup:'3.7k',
   css92:{color:'#000'},
  },

  {
   src:IMAGES.ari,
   title:'Good Vibes',
   desc:'Sia,Dua Lipa,Adele,Linkin Park,Bruno MarS,Niall Horan & More',
   id:'genre-Good Vibes',
   css:{background:'linear-gradient(180deg, #77A1D3 10%, #79CBCA 50%,#E684AE 100%)'},
   sup:'6.2k',
  },


/*------------------------------Playlists You May Like -Ends-------------------------------------*/

/*------------------------------------Browse All Genres -Starts---------------------------------*/

{
 src:IMAGES.riri,
 title:'Hip Hop',
 desc:'Turn up the speakers for your favorite Hip Hop hits',
 id:'genre-Hip Hop',
 css:{background:'linear-gradient(180deg, #7474BF 20%, #348AC7 100%)'},
 sup:'3.8k',
},

{
 src:IMAGES.zedd,
 title:'EDM',
 desc:'Turn up the speakers for your favorite EDM hits',
 id:'genre-EDM',
 css:{background:'linear-gradient(147deg, #71B280 10%, #134E5E 140%)'},
 sup:'4.4k',
},

{
 src:IMAGES.ed45,
 title:'Soft Pop',
 desc:'Turn up the speakers for your favorite Soft Pop hits',
 id:'genre-Soft Pop',
 css:{background:'linear-gradient(180deg, #9796f0 10%, #77A1D3 100%)'},
 sup:'6.5k',
},

{
 src:IMAGES.ed23,
 title:'Acoustic',
 desc:'Turn up the speakers for your favorite Acoustic hits',
 id:'genre-Acoustic',
 css:{background:'linear-gradient(150deg, #ffa751 0%, #ACBB78 70%)'},
 sup:'9.7k',
},

{
 src:IMAGES.miley1,
 title:'Rock',
 desc:'Turn up the speakers for your favorite Rock hits',
 id:'genre-Rock',
 css:{background:'linear-gradient(180deg, #B79891 20%, #94716B 100%)'},
 sup:'10.8k',
},

{
 src:IMAGES.tay1,
 title:'Country',
 desc:'Turn up the speakers for your favorite Country hits',
 id:'genre-Country',
 css:{background:'linear-gradient(120deg, #F3A183 58%,#4b6cb7 20%)'},
 sup:'32.2k',
 css92:{color:'#000'},
},

{
 src:IMAGES.mike,
 title:'R&B',
 desc:'Turn up the speakers for your favorite R&B hits',
 id:'genre-R&B',
 css:{background:'linear-gradient(300deg, #606c88 45%,#3f4c6b 10%)'},
 sup:'3.3k',
 css92:{color:'#000'},
},

{
 src:IMAGES.metal2,
 title:'Metal',
 desc:'Turn up the speakers for your favorite Metal hits',
 id:'genre-Metal',
 css:{background:'linear-gradient(160deg,#928DAB 60%,#2E1437 10%)'},
 sup:'2.3k',
},

{
 src:IMAGES.iu10,
 title:'K-Pop',
 desc:'Turn up the speakers for your favorite K-Pop hits',
 id:'genre-K-Pop',
 css:{background:'linear-gradient(70deg, #667db6 55%, #ffaf7b 10%)'},
 sup:'1.8k',
},

{
 src:IMAGES.bruno7,
 title:'Party',
 desc:'Turn up the speakers for your favorite Party hits',
 id:'genre-Party',
 css:{background:'linear-gradient(68deg,#F29492 52%, #4B79A1 0%)'},
 sup:'7.8k',
 css92:{color:'#000'},
},

/*------------------------------------Browse All Genres -Ends---------------------------------*/
   ],
  );
   
 const [topContainer] = useState(
 [
  {
      identifier:'Download',
      element:Download,
      limits:'Download Muzika',
      users:'Play millions of songs and podcasts on your device.',
      btn3:'Download',
      css2:{color:'#134E5E',textShadow:'0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #fff,0 0 82px #434343,0 0 92px #434343,0 0 102px #434343'},
      css3:{color:'azure',textShadow:'0 0 8px #fff,0 0 30px #fff,0 0 50px #fff,0 0 80px #fff,0 0 92px #485563,0 0 102px #434343,0 0 202px #434343'},
      css:{backgroundImage:`url(${IMAGES.con26})`,
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover'
  },
      css1:{backgroundImage:`url(${IMAGES.con29})`,
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover'
  },
  },

  {
      identifier:'Support',
      element:Support,
      limits:'Visit the Community',
      users:'Have questions? Find answers from our worldwide Community of expert fans!',
      css2:{color:'#654ea3',textShadow:'0 0 7px azure,0 0 10px azure,0 0 21px #fff,0 0 42px #485563,0 0 82px #485563,0 0 92px #485563,0 0 102px #485563'},
      css3:{color:'#000',textShadow:'0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa'},
      btn3:'FIND ANSWERS',
      css:{backgroundImage:`url(${IMAGES.con63})`,
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover'
  },
      css1:{backgroundImage:`url(${IMAGES.con53})`,
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover'
  },
  }
]

);

   const [playing,setPlaying] = useState(false);
   const [title,setTitle] = useState('Save Your Tears');
   const [artist,setArtist] = useState('The weeknd');
   const [coverpic,setCoverpic] = useState(IMAGES.weekend2);
   const [minute,setMinute] = useState('00');
   const [second,setSecond] = useState('00');
   const [endduration,setendDuration] = useState('3:14');
   const [currentTrack,setCurrentTrack] = useState('');
   const [playerTrackId,setplayerTrackId] = useState('');
   const [playerTrack,setplayerTrack] =useState('');
   const [intervalID,setintervalID] = useState('');
   const [playerPlaying,setplayerPlaying] = useState(false);
   const [progresspercent,setprogressPercent] = useState('0%');
   const [currenttime,setCurrenttime] = useState();
   const [timeinseconds,setTimeinseconds] = useState('');
   const [style,setStyle] = useState('');
   const [bottombar,setBottombar] = useState('');
   const [width2,setWidth2] = useState(0);
   const  [bottombarimage,setBottombarimage] = useState('');
   const  [bottombartitle,setBottombartitle] = useState('');
   const  audioRef = useRef(null);
   const [likeit,setLikeit] = useState(false);
   const [connectbar,setConnectbar] = useState('');
   const [block,setBlock] = useState('');
   

    return(
     
    <div className="wrap">
    
    <Routes>

    <Route path ='/' element={<Home style={style} setStyle={setStyle}/>}/>

    <Route path="/Signup" element={<SignupProvider><Signup/></SignupProvider>}/>

    <Route path ='/Login' element={<DashProvider><Login/></DashProvider>}/>

  <Route path="/Dashboard" element={<><DashProvider><Navbar/><Dashboard/></DashProvider></>}/>
    
    <Route path="/Playlist/:content" element={<><Playlist setBottombar={setBottombar} bottombar={bottombar} bottombarimage={bottombarimage} bottombartitle={bottombartitle} details={details} connectbar={connectbar} setConnectbar={setConnectbar} block={block} setBlock={setBlock}/>
    
    <Player ref={audioRef} playing={playing} setPlaying={setPlaying} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} title={title} setTitle={setTitle} artist={artist} setArtist={setArtist} coverpic={coverpic} setCoverpic={setCoverpic} endduration={endduration} setendDuration={setendDuration} playerTrackId={playerTrackId} setplayerTrackId={setplayerTrackId} playerTrack={playerTrack} setplayerTrack={setplayerTrack} playerPlaying={playerPlaying} setplayerPlaying={setplayerPlaying} minute={minute} setMinute={setMinute} second={second} setSecond={setSecond} progresspercent={progresspercent} setprogressPercent={setprogressPercent} intervalID={intervalID} setintervalID={setintervalID} currenttime={currenttime} setCurrenttime={setCurrenttime} timeinseconds={timeinseconds} setTimeinseconds={setTimeinseconds} tracklist={tracklist} setConnectbar={setConnectbar} likeit={likeit} setLikeit={setLikeit}/>

    </>} >

    <Route path=':id' element={<Tracks ref={audioRef} tracklist={tracklist} playing={playing} setPlaying={setPlaying} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} setTitle={setTitle} setArtist={setArtist} setCoverpic={setCoverpic} setplayerTrack={setplayerTrack} setplayerPlaying={setplayerPlaying} setplayerTrackId={setplayerTrackId} setendDuration={setendDuration} intervalID={intervalID} setBottombarimage={setBottombarimage} setBottombartitle={setBottombartitle}  setBottombar={setBottombar} block={block} setBlock={setBlock} />}/>

   </Route>

    <Route path="/:section" element={<Extras topContainer={topContainer}/>}/>

    <Route path="/Premium" element={<Premium width2={width2} setWidth2={setWidth2}/>}/>

    <Route path="/Track/:name" element={<TrackProvider><Track/></TrackProvider>}/>

    </Routes>
    
    </div>
    
  );
}

export default App;
