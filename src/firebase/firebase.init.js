
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBiNfQfp6vkCXfrE77yGPTUtCdiXjMjDmo",
  authDomain: "dragon-newss-36f1c.firebaseapp.com",
  projectId: "dragon-newss-36f1c",
  storageBucket: "dragon-newss-36f1c.firebasestorage.app",
  messagingSenderId: "117305934037",
  appId: "1:117305934037:web:2fd5df28b174276525e25c"
};

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export default auth