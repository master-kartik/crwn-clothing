import {initializeApp} from 'firebase/app';

import {signInWithRedirect, signInWithPopup, GoogleAuthProvider, getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB8p2GxSEZopnFF_sqHdV1Q-iF40FJjp1U",
  authDomain: "crwn-clothing-brand-8eb92.firebaseapp.com",
  projectId: "crwn-clothing-brand-8eb92",
  storageBucket: "crwn-clothing-brand-8eb92.appspot.com",
  messagingSenderId: "400913744048",
  appId: "1:400913744048:web:f702a261b25bf457c2fb75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth)=>{
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)
    const useSnapshot =await getDoc(userDocRef)
    console.log(useSnapshot.exists())
    if(!useSnapshot.exists()){
        const {displayName, email } = userAuth;
        const createdOn = new Date();
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdOn
            });
        }
        catch(error){
            console.log("error in setting user", error.message)
        }
    }
    return(userDocRef)
}


export const createAuthUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password){return}
    createUserWithEmailAndPassword(email,password);
}