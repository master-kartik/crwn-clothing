import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"
const logGoogleUser = async () =>{
    const {user} = await signInWithGooglePopup();
    
    createUserDocumentFromAuth(user)
}

const SignIn = ()=>{
    return(<div>
        <h1>Im the only fucking sign in youd ever need</h1>
        <button onClick={logGoogleUser}>Sign In with GOOGLE</button>
    </div>)
}
export default SignIn;