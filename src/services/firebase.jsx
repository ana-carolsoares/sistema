import { initializeApp } from 'firebase/app'
import { getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDr88rCRHbocyiiDBpivMwYXL8i19lYtrs",
    authDomain: "tickets-7832f.firebaseapp.com",
    projectId: "tickets-7832f",
    storageBucket: "tickets-7832f.appspot.com",
    messagingSenderId: "696711075825",
    appId: "1:696711075825:web:ddc7f12c124c75f473d650",
    measurementId: "G-R4K0Q0Y2C7"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);

const storage = getStorage(firebaseApp); 

export { auth, db, storage}

