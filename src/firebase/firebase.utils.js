import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzgX_ywyFald8Xbbb8zXs6K_0vVTHEL4c",
  authDomain: "ecommerce-f3431.firebaseapp.com",
  projectId: "ecommerce-f3431",
  storageBucket: "ecommerce-f3431.appspot.com",
  messagingSenderId: "436460218714",
  appId: "1:436460218714:web:ba37a41884a3448d3a2b63",
  //measurementId: "G-B9WK41ZDQN",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log("credential: " + credential);

      const token = credential.accessToken;
      console.log("token: " + token);

      const user = result.user;
      console.log("user: " + user);
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log("error code: " + errorCode);

      const errorMessage = error.message;
      console.log("errorMessage: " + errorMessage);

      const email = error.email;
      console.log("email: " + email);

      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("credential: " + credential);
    });
