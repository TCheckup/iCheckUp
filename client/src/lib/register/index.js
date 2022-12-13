import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, setDoc } from "firebase/firestore";
import { User } from "firebase/auth";
import { userColRef } from "../../../utils/RefCollections";

export const registerUser = (email, password, data, func) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // signed in
      const user = userCredential.user;

      setDoc(doc(db, "user", user.uid), { ...data, id: user.uid }).then(
        (result) => {
          func();
        }
      );
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};

export const addUser = async (data) => {
  await addDoc(userColRef, data);
};
