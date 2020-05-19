import firebase from "firebase";
// import "firebase/database";
// import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAUVmxcJOZclf4ZZdWwSGa30bpy_2K948E",
  authDomain: "work-description.firebaseapp.com",
  databaseURL: "https://work-description.firebaseio.com",
  projectId: "work-description",
  storageBucket: "work-description.appspot.com",
  messagingSenderId: "1092439851802",
  appId: "1:1092439851802:web:24f942974f923c5df762a3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
