import React,{useState,createContext} from 'react';
import IMAGES from './images/index.js';
import firebase from './firebase';
export const Dashcontext = createContext();


export const DashProvider = (props)=>{

    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [passShow,setpassShow] = useState(false);
    const [users,setUsers] = useState([]);
    const [loggedIn,setLoggedIn] = useState(false);
    const db = firebase.firestore();
    const [status,setStatus] = useState('');
    const [sidebar,setSidebar] = useState('');
    const [width,setWidth] = useState(0);
    const [width1,setWidth1] = useState(0);
    const [optionbar,setOptionbar] = useState('');
    const [loggeduser,setLoggeduser] = useState('user');
    const [topmixes] = useState (
        [
          {
               src:IMAGES.olivia2,
               title:'Olivia Rodrigo Mix',
               artists:'Alec Benjamin,Olivia Rodrigo & More',
               link:'/Playlist/Olivia Rodrigo Mix/id2',
          },
     
          {
           src:IMAGES.lisa2,
           title:'K-Pop Mix',
           artists:'Lisa,Chanyeol & More',
           link:'/Playlist/K-Pop Mix/id2',
          },
     
          {
           src:IMAGES.bts2,
           title:'BTS Mix',
           artists:'Lauv,IU,GOT7 & More',
           link:'/Playlist/BTS Mix/id2',
          },
     
          {
           src:IMAGES.sam1,
           title:'2010s Mix',
           artists:'Sam Smith,Lewis Capaldi & More',
           link:'/Playlist/2010s Mix/id2',
          },
     
        ]
     
        );

        const [artists] = useState (
            [
              {
               src:IMAGES.dua2,
               title:'Dua Lipa',
               link:'/Playlist/artist-Dua Lipa/id3',
              },
       
              {
               src:IMAGES.shawnM,
               title:'Shawn Mendes',
               link:'/Playlist/artist-Shawn Mendes/id3',
              },
       
              {
               src:IMAGES.ava5,
               title:'Ava Max',
               link:'/Playlist/artist-Ava Max/id3',
              },
       
       
              {
               src:IMAGES.ed22,
               title:'Ed Sheeran',
               link:'/Playlist/artist-Ed Sheeran/id3',
              }
            ]
          );
       
       
          const [Etracks] = useState (
       [
         {
               src:IMAGES.edm1,
               title:'Dynamic EDM Blast',
               artists:'Daya,Sean Paul,Calvin Harris,Galantis & More',
               link:'/Playlist/Dynamic EDM Blast/id4',
         },
       
         {
           src:IMAGES.edm2,
           title:'Popular 10s EDM',
           artists:'Martin Garrix,Kygo,Major Lazor,David Guetta & More',
           link:'/Playlist/Popular 10s EDM/id4',
       },
       
       {
         src:IMAGES.edm6,
         title:'Most Popular Upbeat EDM',
         artists:'DJ Snake,Alan Walker,Dimitri Vegas & Like Mike & More',
         link:'/Playlist/Most Popular Upbeat EDM/id4',
       },
       
       {
         src:IMAGES.edm7,
         title:'Chill Electronic Hits',
         artists:'DJ Snake,Alan Walker,Dimitri Vegas & Like Mike & More',
         link:'/Playlist/Chill Electronic Hits/id4',
       },
       
       ]
       
       
          );
       
          const [albums] = useState (
       [
         {
           src:IMAGES.olivia7,
           title:'Album: Sour',
           artist:'Olivia Rodrigo',
           link:'/Playlist/album-Olivia Rodrigo/id5',
           css1: '5.8k',
         },
       
         {
           src:IMAGES.weekend1,
           title:'Album: Dawn FM',
           artist:'The Weeknd',
           link:'/Playlist/album-The Weeknd/id5',
           css1: '9.8k',
         },
       
         {
           src:IMAGES.butter1,
           title:'Album: Butter',
           artist:'BTS',
           link:'/Playlist/album-BTS/id5',
           css1: '15.8k',
         },
       
         {
           src:IMAGES.glass2,
           title:'Album: Dreamland',
           artist:'Glass Animals',
           link:'/Playlist/album-Glass Animals/id5',
           css1: '7.5k',
         },
       
         {
           src:IMAGES.cold1,
           title:'Album: Cold Heart',
           artist:'Elton John,Dua Lipa',
           link:'/Playlist/album-Elton John,Dua Lipa/id5',
           css1: '6.5k',
         },
       
         {
           src:IMAGES.ed4,
           title:'Album: =',
           artist:'Ed Sheeran',
           link:'/Playlist/album-Ed Sheeran/id5',
           css1: '8.8k',
         },
       
         {
           src:IMAGES.justin4,
           title:'Album: Justice',
           artist:'Justin Bieber',
           link:'/Playlist/album-Justin Bieber/id5',
           css1: '12.8k',
         },
       
         {
           src:IMAGES.taylor,
           title:'Album: Red',
           artist:'Taylor Swift',
           link:'/Playlist/album-Taylor Swift/id5',
           css1: '10.2k',
         },
       
       ]
       
          );

          const [Kpophits] = useState (
            [
              
              {
                src:IMAGES.bts8,
                title:'Dynamite',
                artist:'BTS',
                link:'/Playlist/album-Dynamite/id6',
             },
            
             {
              src:IMAGES.tree,
              title:'Christmas Tree',
              artist:'Kim Taehyung',
              link:'/Playlist/album- Christmas Tree/id6',
            },
            
            {
              src:IMAGES.blackpink2,
              title:'Kill This Love',
              artist:'BLACKPINK',
              link:'/Playlist/album-Kill This Love/id6',
            },
            
            {
              src:IMAGES.iu,
              title:'Lilac',
              artist:'IU',
              link:'/Playlist/album-Lilac/id6',
            },
            
            {
              src:IMAGES.monsta1,
              title:"Someone's Someone",
              artist:'Monsta X',
              link:'/Playlist/album-Monsta X/id6',
            },
            
            ]
            
             );
            
             const [favourites] = useState (
                 [
                   {
                    src:IMAGES.anime6,
                    title:'Alone Again',
                    artist:'Selena Gomez,James Arthur,Aurora,Ariana Grande & More',
                    link:'/Playlist/genre-Alone Again/id7',
                   },
            
                   {
                    src:IMAGES.billie2,
                    title:'Teen Pop',
                    artist:'Harry Styles,Billie Eillish,Jonas Brothers & More',
                    link:'/Playlist/genre-Teen Pop/id7',
                   },
            
                   {
                    src:IMAGES.mood5,
                    title:'Mood Benders',
                    artist:'Charlie Puth,Halsey,The Weeknd,Nirvana,Kygo & More',
                    link:'/Playlist/genre-Mood Benders/id7',
                   },
            
                   {
                    src:IMAGES.underarmour,
                    title:'Workout Mix',
                    artist:'Beyonce,Usher,Chris Brown,Akon,Rihanna & More',
                    link:'/Playlist/genre-Workout Mix/id7',
                   },
            
                   {
                    src:IMAGES.ari,
                    title:'Good Vibes',
                    artist:'Sia,Dua Lipa,Adele,Linkin Park,Bruno MarS,Niall Horan & More',
                    link:'/Playlist/genre-Good Vibes/id7',
                   },
            
                 ]
             );

             const [genres] = useState (
                [
                  {
                   src:IMAGES.riri,
                   title:'Hip Hop',
                   artist:'Sia,Dua Lipa,Adele,Linkin Park,Bruno MarS,Niall Horan & More',
                   link:'/Playlist/genre-Hip Hop/id8',
                   css:{background:'linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64%'},
                  },
             
                  {
                   src:IMAGES.zedd,
                   title:'EDM',
                   link:'/Playlist/genre-EDM/id8',
                   css:{background:'linear-gradient(to right,#c9ffbf,#ffafbd)'},
                  },
             
                  {
                   src:IMAGES.ed45,
                   title:'Soft Pop',
                   link:'/Playlist/genre-Soft Pop/id8',
                   css:{background:'linear-gradient(147deg,#83a4d4,#b6fbff)'},
                  },
             
                  {
                   src:IMAGES.ed23,
                   title:'Acoustic',
                   link:'/Playlist/genre-Acoustic/id8',
                   css:{background:'linear-gradient(to right, #CF8BF3, #FDB99B)'},
                  },
             
                  {
                   src:IMAGES.miley1,
                   title:'Rock',
                   link:'/Playlist/genre-Rock/id8',
                   css:{background:'linear-gradient(120deg, #ede574 0%,#e1f5c4  100%)'},
                  },
             
                  {
                   src:IMAGES.tay1,
                   title:'Country',
                   link:'/Playlist/genre-Country/id8',
                   css:{background:'linear-gradient(to right,#9CECFB,#65C7F7)'},
                  },
             
                  {
                   src:IMAGES.mike,
                   title:'R&B',
                   link:'/Playlist/genre-R&B/id8',
                   css:{background:'linear-gradient(120deg, #9796f0  45%,#86fde8  100%)'},
                  },
             
                  {
                   src:IMAGES.metal2,
                   title:'Metal',
                   link:'/Playlist/genre-Metal/id8',
                   css:{background:'linear-gradient(to right, #43C6AC, #F8FFAE)'},
                  },
             
                  {
                   src:IMAGES.iu10,
                   title:'K-Pop',
                   link:'/Playlist/genre-K-Pop/id8',
                   css:{background:'linear-gradient(to right, #eecda3,#ef629f)'},
                  },
             
                  {
                   src:IMAGES.bruno7,
                   title:'Party',
                   link:'/Playlist/genre-Party/id8',
                   css:{background:'linear-gradient(to right,#2bc0e4,#eaecc6)'},
                  },
             
                ]
              );

              const [lasts] = useState (
                [
                  {
                   src:IMAGES.ari11,
                   title:'One Last Time',
                   artist:'Ariana Grande',
                   link:'/Track/One Last Time',
                  },
             
                  {
                   src:IMAGES.alec,
                   title:'Let Me Down Slowly',
                   artist:'Alec Benjamin',
                   link:'/Track/Let Me Down Slowly',
                   css:{color:'#fff'},
                  },
             
                  {
                   src:IMAGES.ever,
                   title:'Everglow',
                   artist:'COLDPLAY',
                   link:'/Track/Everglow',
                   css:{color:'#fff'},
                  },
             
                  {
                   src:IMAGES.diff,
                   title:'A Different Way',
                   artist:'DJ Snake,Lauv',
                   link:'/Track/A Different Way ',
                   css:{color:'#000'},
                  },
             
                  {
                   src:IMAGES.burn12,
                   title:'Burn',
                   artist:'Ellie Goulding',
                   link:'/Track/Burn',
                   css:{color:'#fff'},
                  },
             
                  {
                   src:IMAGES.pow,
                   title:'Death Bed',
                   artist:'Powfu',
                   link:'/Track/Death Bed ',
                   css:{color:'#000'},
                  },
             
                  {
                   src:IMAGES.bekind,
                   title:'Be Kind',
                   artist:'Halsey,Marshmello',
                   link:'/Track/Be Kind',
                   css:{color:'#fff'},
                  },
             
                  {
                   src:IMAGES.imagi,
                   title:'Imagination',
                   artist:'Shawn Mendes',
                   link:'/Track/Imagination',
                  },
             
                  {
                   src:IMAGES.ale,
                   title:'Scars To Your Beautiful',
                   artist:'Alessia Cara',
                   link:'/Track/Scars To Your Beautiful',
                   css:{color:'#000'},
                  },
             
                  {
                   src:IMAGES.ed56,
                   title:'Overpass Graffiti',
                   artist:'Ed Sheeran',
                   link:'/Track/Overpass Graffiti',
                  },
             
                  {
                   src:IMAGES.chlorine,
                   title:'Chlorine',
                   artist:'Twenty One Pilots',
                   link:'/Track/Chlorine',
                   css:{color:'#fff'},
                  },
             
                  {
                   src:IMAGES.broke,
                   title:'You Broke Me First',
                   artist:'Tata McRae',
                   link:'/Track/You Broke Me First',
                   css:{color:'#fff'},
                  },
             
                ]
              );

              const [firsts] = useState (
                [
                  {
                   src:IMAGES.sams,
                   title:'Remix Deck',
                   link:'/Playlist/Remix Deck/id1',
                  },
           
                  {
                   src:IMAGES.billie1,
                   title:'Pop Rising',
                   link:'/Playlist/Pop Rising/id1',
                  },
           
                  {
                   src:IMAGES.adele3,
                   title:'Adele Mix',
                   link:'/Playlist/Adele Mix/id1',
                  },
           
                  {
                   src:IMAGES.charlie1,
                   title:'Moody Hits',
                   link:'/Playlist/Moody Hits/id1',
                  },
           
                  {
                   src:IMAGES.taylor2,
                   title:'Chill Hits',
                   link:'/Playlist/Chill Hits/id1',
                  },
           
                  {
                   src:IMAGES.weekend2,
                   title:'Mega Hit Mix',
                   link:'/Playlist/Mega Hit Mix/id1',
                  }
                ]
              );
             

    const value={status,setStatus,sidebar,setSidebar,width,setWidth,width1,setWidth1,topmixes,artists,Etracks,albums,Kpophits,favourites,genres,lasts,firsts,optionbar,setOptionbar,loggeduser,setLoggeduser,email,setEmail,pass,setPass,passShow,setpassShow,users,setUsers,loggedIn,setLoggedIn,db};
    
    return(
        <Dashcontext.Provider value={value}>
            {props.children}
        </Dashcontext.Provider>
    );
}


