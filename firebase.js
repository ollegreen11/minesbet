import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSy*******",
    authDomain: "minesbet.firebaseapp.com",
    projectId: "minesbet",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sendMessage(msg) {
    await addDoc(collection(db, "messages"), {
        message: msg,
        username: "User",
    });
}

