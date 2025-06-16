import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7U4gEIdw7u9Ci1uiALoHXJZaf5MZ7VXo",
  authDomain: "lockettony-6833c.firebaseapp.com",
  projectId: "lockettony-6833c",
  storageBucket: "lockettony-6833c.firebasestorage.app",
  messagingSenderId: "152628806577",
  appId: "1:152628806577:web:ff0ab898e1b4ea93527390",
  measurementId: "G-782CREMB6K"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
