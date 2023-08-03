import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByqsCpWysRdQVLJvHLYawtS7-GNhuE8_4",
  authDomain: "disneyplusclone-869de.firebaseapp.com",
  projectId: "disneyplusclone-869de",
  storageBucket: "disneyplusclone-869de.appspot.com",
  messagingSenderId: "315359043486",
  appId: "1:315359043486:web:4f9bd5f9bec718c2ddc08f",
  measurementId: "G-3NZB7FD22H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;