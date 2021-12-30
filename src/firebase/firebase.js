// import {initializeApp} from "firebase/app";

// import 'firebase/firestore';
// import 'firebase/auth';
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBylI19YTSHSvv_UZblZXY3_rJSiReEV28",
    authDomain: "iclone-4419b.firebaseapp.com",
    projectId: "iclone-4419b",
    storageBucket: "iclone-4419b.appspot.com",
    messagingSenderId: "1092924332536",
    appId: "1:1092924332536:web:d84d1129552ab2d9da1e0d"
  };

// console.log('firebase',firebase);

//const firebase = Firebase.initializeApp(config);
// const app = initializeApp(firebaseConfig)
// const {FieldValue} = Firebase.firestore;


// export {app, FieldValue};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//console.log('firebase',firebase);
// seedDatabase(firebase);

export { firebase, FieldValue };