import firebase from "firebase";
import "firebase/firestore";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyA1PFDgqG0tiQg-NbvQwiV4DTS2VG7HwJU",
  authDomain: "messanger-f.firebaseapp.com",
  databaseURL: "https://messanger-f.firebaseio.com",
  projectId: "messanger-f",
  storageBucket: "messanger-f.appspot.com",
  messagingSenderId: "663024271910",
  appId: "1:663024271910:web:cb0a8338b241b3ad00dce7",
  measurementId: "G-CRDP45FZSG",
});
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
