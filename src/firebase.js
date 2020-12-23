import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBllq83QBvddQoTtKbMAZbRpjS0tiB8w2Q",
  authDomain: "clone-5bde6.firebaseapp.com",
  projectId: "clone-5bde6",
  storageBucket: "clone-5bde6.appspot.com",
  messagingSenderId: "468145790260",
  appId: "1:468145790260:web:9d23cbc830bfcc970a9961",
};

//initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//accesing db
const db = firebaseApp.firestore();

//accessing auth
const auth = firebaseApp.auth();

export { auth };

export default db;
