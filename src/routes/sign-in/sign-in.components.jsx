import SignUpForm from "../../components/sign-up/sign-up-form.component";
import {signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect} from "../../utils/firebase/firebase.utils"


const logGoogleUser = async () =>{
    const {user} = await signInWithGooglePopup();
    
    createUserDocumentFromAuth(user)
}


const SignIn = ()=>{

    return(<div>
        <h1>Im the only fucking sign in youd ever need</h1>
        <button onClick={logGoogleUser}>Sign In with GOOGLE</button>
        <SignUpForm />
    </div>)
}
export default SignIn;