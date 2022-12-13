import { doc, getDoc, updateDoc, DocumentData } from "firebase/firestore";
import { db } from "../firebase";

export const getUser = async (id) => {
    try { 
        const docRef = doc(db, 'user', id); 
        const docSnap = await getDoc(docRef); 
        const data = docSnap.data(); 

        return data; 
    }
    catch(err){ 
        console.log(err);
    }
}