import { doc, getDocs, addDoc, updateDoc, DocumentData, collection } from "firebase/firestore";
import { db } from "../firebase";

export const getUser = async (id) => {
    try {
        const colRef = collection(db, 'feedback', id)
        const docSnap = await getDocs(colRef);
        const data = docSnap.data();

        return data;
    }
    catch(err){
        console.log(err.message);
    }
}

//add feedback
const addFeedbackForm = document.querySelector('.add')
addFeedbackForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
        feedback_info: addFeedbackForm.feedback_info.value,
        user_ID: addFeedbackForm.user_ID.value,
    })
    .then(() => {
        addFeedbackForm.reset()
    })
})
