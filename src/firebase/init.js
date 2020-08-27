
import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAzulXiasumqSiOmovgmywczoNJqGVHDY8",
  authDomain: "ninja-smoothies-ea8f5.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-ea8f5.firebaseio.com",
  projectId: "ninja-smoothies-ea8f5",
  storageBucket: "ninja-smoothies-ea8f5.appspot.com",
  messagingSenderId: "678456163331",
  appId: "1:678456163331:web:3b4314c63e24ccb15b6236",
  measurementId: "G-87PHF9RMX5"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebaseApp.firestore()