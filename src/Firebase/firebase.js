// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let app;
function StartFirebase() {

const firebaseConfig = {
  apiKey: "AIzaSyDCvd79v59BExSRcOflWmYqNof_hBIHLo8",
  authDomain: "keeper-app-cb0c3.firebaseapp.com",
  projectId: "keeper-app-cb0c3",
  storageBucket: "keeper-app-cb0c3.appspot.com",
  messagingSenderId: "649539373524",
  appId: "1:649539373524:web:be8e5488996aaad0b46e41",
  measurementId: "G-7RH5VJCQ7W"
};

// Initialize Firebase
app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
  return getDatabase(app);
}
const auth = getAuth(app);
export default auth;
export { StartFirebase};