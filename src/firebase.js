
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA67-zQ--_0VwdrSaV0oUERzf8XLsz69lM",
    authDomain: "muzika-274ad.firebaseapp.com",
    projectId: "muzika-274ad",
    storageBucket: "muzika-274ad.appspot.com",
    messagingSenderId: "11232735089",
    appId: "1:11232735089:web:fe472a21eda656f31250d0",
    measurementId: "G-D3V5DYBEYV"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;