import { db } from "../src/lib/firebase";
import { collection } from "firebase/firestore";

export const userColRef = collection(db, "user");
