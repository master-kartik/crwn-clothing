import {initializeApp} from 'firebase/app';

import {signInWithEmailAndPassword,
    signInWithRedirect, 
    signOut,
    signInWithPopup, 
    GoogleAuthProvider, 
    getAuth, 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth'
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

export const createUserDocumentFromAuth = async (userAuth,
     additionalInformation = {})=>{
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)
    
    const useSnapshot =await getDoc(userDocRef)
    
    if(!useSnapshot.exists()){
        const {displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        }
        catch(error){
            console.log("error in setting user", error.message)
        }
    }
    return(userDocRef)
}


export const createAuthUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password)return;
    return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password){return}
    return await signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async () => await signOut(auth)

export const  onAuthStateChangedListener = (callback)=>(onAuthStateChanged(auth, callback))