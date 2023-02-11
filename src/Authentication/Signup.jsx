import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPass, setErrorPass] = useState('');
    const [errorConfirmPass, setErrorConfirmPass] = useState('');
    const [user, setUser] = useState({});
    const history = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
    }, [])
    const handleSubmit = async (e) => {
        try {
            console.log("in submit")
            const user = await createUserWithEmailAndPassword(
              auth,
              email,
              pass
            );
            console.log(user);
          } catch (error) {
            console.log(error.message);
          }
    } 

    return (
        <div className="App-auth">
            <div className="div-register">
                
                <div className="auth-form-container-register">
                    <form className="register-form" onSubmit={handleSubmit}>

                        <h1 className="welcome-text">Join our team!</h1>
                        
                        { errorName && <div className="error">{errorName}</div> }
                        <label htmlFor="firstname">Name:</label>
                        <input className="input-register" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" id="firstname" name="name" />
                        
                        { errorEmail && <div className="error">{errorEmail}</div> }
                        <label htmlFor="email">Email:</label>
                        <input className="input-register" value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                        { errorPass && <div className="error">{errorPass}</div> }
                        <label htmlFor="password">Password:</label>
                        <input className="input-register" value = {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                        
                        { errorConfirmPass && <div className="error">{errorConfirmPass}</div> }
                        <label htmlFor="password">Confirm Password:</label>
                        <input className="input-register" value = {confirmpass} onChange={(e) => setConfirmPass(e.target.value)}  type="password" placeholder="********" id="confirmpass" name="confirmpass" />
                        
                        <button className="register-btn" type="submit"><b>Register</b></button>
                    </form>

                    <button className="link-btn-register" onClick={() => history("/Authentication/Login")} >Already have an account? Login here.</button>
                </div>
            </div>
        </div>
    )
}