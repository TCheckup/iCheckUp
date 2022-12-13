import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, setDoc, doc } from "firebase/firestore";
import { User } from "firebase/auth";
import { userColRef } from "../../utils/RefCollections";

export const registerUser = async (email, password, data, func) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // signed in
      const user = userCredential.user;
      console.log(user);

      setDoc(doc(db, "user", user.uid), { ...data, id: user.uid })
        .then((result) => {
          func();
          alert("user registered");
        })
        .catch((err) => {
          console.log("cannot save to database");
          console.log(data);
          console.log(err.message);
        });
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      console;
    });
};

export const addUser = async (data) => {
  await addDoc(userColRef, data);
};
