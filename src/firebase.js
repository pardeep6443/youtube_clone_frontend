import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDu5498o-aN6E7-3wtuMeyhTCAJ7BsV2N8",
  authDomain: "video-4cb94.firebaseapp.com",
  projectId: "video-4cb94",
  storageBucket: "video-4cb94.appspot.com",
  messagingSenderId: "320106045545",
  appId: "1:320106045545:web:547522b1cf86fee64ec2f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;