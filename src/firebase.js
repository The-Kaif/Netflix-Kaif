import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAhr2tbiQyiAtZ686jCGUGwa_eKDUTr9Nw",
    authDomain: "netflix-clone-65236.firebaseapp.com",
    projectId: "netflix-clone-65236",
    storageBucket: "netflix-clone-65236.appspot.com",
    messagingSenderId: "1064617575083",
    appId: "1:1064617575083:web:b60c35e3f73676e9f22dee"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;