// trong file config này thì các e sẽ đi cấu hình với fire-base
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_KEY_FIREBASE,
  authDomain: "ptita-f91ed.firebaseapp.com",
  projectId: "ptita-f91ed",
  storageBucket: "ptita-f91ed.appspot.com",
  messagingSenderId: "610422643884",
  appId: "1:610422643884:web:cdbbfd34c072f453935309"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);