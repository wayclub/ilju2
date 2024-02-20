import { db } from './firebase-config';
import { collection, addDoc } from "firebase/firestore"; 

export const logUserData = async (name, birthday, deviceInfo) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      birthday: birthday,
      // ip: ip,
      deviceInfo: deviceInfo,
      timestamp: new Date() // Store the current time as well
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

