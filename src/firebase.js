import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3W1-giaO2byZdMaP3eo9Bl22D3k3C0A0",
    authDomain: "instagram-clone-react-a606e.firebaseapp.com",
    projectId: "instagram-clone-react-a606e",
    storageBucket: "instagram-clone-react-a606e.appspot.com",
    messagingSenderId: "255480606781",
    appId: "1:255480606781:web:437da1c319163b5c75ba54",
    measurementId: "G-46KVCWJK5H"
  });

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();

  export { db, auth, storage };