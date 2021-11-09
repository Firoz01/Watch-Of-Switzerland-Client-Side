import firebaseConfig from "./firebase.config"
import { initializeApp } from "firebase";


const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;