import firebase from "firebase"; 
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAaX8NszYZgX-XKIHnXcVDFCjybntGdFrw",
    authDomain: "fir-f7f07.firebaseapp.com",
    projectId: "fir-f7f07",
    storageBucket: "fir-f7f07.appspot.com",
    messagingSenderId: "1021089155109",
    appId: "1:1021089155109:web:e56d351eed1153337857cc",
    measurementId: "G-XGQ593JRG7"
  };

export default firebase.initializeApp(firebaseConfig)