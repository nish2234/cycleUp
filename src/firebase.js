import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCYfP1vpWt5rciCULdWgVRiiCeJmMutElg",
  authDomain: "foodmall-7cb50.firebaseapp.com",
  projectId: "foodmall-7cb50",
  storageBucket: "foodmall-7cb50.appspot.com",
  messagingSenderId: "825466844675",
  appId: "1:825466844675:web:2abfee5fc1ba4ee3f7c036",
  measurementId: "G-D2VV5VDCVR"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;