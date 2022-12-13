import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const loginUser = (email, password, func) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      func();
      alert("You have signed");
    })
    .catch((err) => {
      alert("Invalid email or password");
    });
};

export const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("User sign out.");
    })
    .catch((error) => {});
};
