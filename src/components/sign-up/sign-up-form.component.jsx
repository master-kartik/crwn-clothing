import { useState } from "react";
import { createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../button/button.component"


const defaultFormFields ={
    displayName: '',
    email: '',
    password:'',
    confirmPassword: ''
}


const SignUpForm = () =>{
   
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword}=formFields;
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }
    
    
const handleSubmit = async (event)=>{
    event.preventDefault();
    if(password !==confirmPassword){
        alert("passwords don't match");
        return;
    }
    try {
        const {user} = await createAuthUserWithEmailAndPassword(
            email, 
            password
            );
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields();
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
          } else {
            console.log('user creation encountered an error', error);
        resetFormFields();
    }
}}

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }
    return(
        <div className="sign-up-container">
            <h2>Don't Have an Account?</h2>
            <span>Sign Up with your E-mail and Password</span>
            <form onSubmit={handleSubmit} >
                
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <Button type="submit">Sign Me Up!</Button>

            </form>

        </div>
    )

}
export default SignUpForm;