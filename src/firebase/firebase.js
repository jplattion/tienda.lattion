import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwMupl1QFSyun9r9bTwmHS6WfnArmVxgs",
  authDomain: "juegoteca-meples-y-dados.firebaseapp.com",
  projectId: "juegoteca-meples-y-dados",
  storageBucket: "juegoteca-meples-y-dados.appspot.com",
  messagingSenderId: "254530450126",
  appId: "1:254530450126:web:6d4804e3068d6e13e1d69f",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
