import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDc3Dcv_HrwkrprzJyxs9PX-lbE8w01nNI",
  authDomain: "attendance-app-1886c.firebaseapp.com",
  projectId: "attendance-app-1886c",
  storageBucket: "attendance-app-1886c.appspot.com",
  messagingSenderId: "579125356472",
  appId: "1:579125356472:web:3112903a3b49726bd3114d"
};

  firebase.initializeApp(firebaseConfig);


export default  firebase.database()