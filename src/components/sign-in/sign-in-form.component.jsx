import { useState } from "react";
import { signInAuthUserWithEmailAndPassword ,signInWithGooglePopup, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
import Button from "../button/button.component"


const defaultFormFields ={
    email: '',
    password:'',
}
const SignInWithGoogle = async () =>{
    const {user} = await signInWithGooglePopup();
  await  createUserDocumentFromAuth(user)
}

const SignInForm = () =>{
   
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password}=formFields;
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }
    
    
const handleSubmit = async (event)=>{
    event.preventDefault();

    try {
        const response = await signInAuthUserWithEmailAndPassword(email, password)
        console.log(response)
            resetFormFields();
    } catch (error) {
        console.log(error)
        resetFormFields();
    }
}

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }
    return(
        <div className="sign-up-container">
            <h2>Already Have an Account?</h2>
            <span>Sign In with your E-mail and Password</span>
            <form onSubmit={handleSubmit} >
                
                
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                

                <div className="buttons-container"   > 
                <Button type="submit">Sign In</Button>
                <Button buttontype="google" onClick={SignInWithGoogle}>Sign In With Google</Button>
                </div>

            </form>

        </div>
    )

}
export default SignInForm;