import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState([]);
    const [user, setUser] = useState({});
    const history = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
    }, [])
    const handleSubmit = async (e) => {
        history("/Home/Homee");
        try {
            const user = await signInWithEmailAndPassword(
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
                <div className="div-login">   
                    
                    <div className="auth-form-container-login">
                        <form className="login-form" onSubmit={handleSubmit}>

                            <h1 className="welcome-text">Welcome!</h1>
                            { error && <div className="error">{error}</div> }
                            <label htmlFor="email">Email:</label>
                            <input className="input-login" value = {email} onChange={(e) => setEmail(e.target.value)}
                                // onKeyDown={(e) => {
                                //     if (e.key === "Enter") {
                                //     handleSubmit();
                                //     }
                                // }} 
                                type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                            <label htmlFor="password">Password:</label>
                            <input className="input-login" value = {pass} onChange={(e) => setPass(e.target.value)} 
                                // onKeyDown={(e) => {
                                //     if (e.key === "Enter") {
                                //     handleSubmit(e);
                                //     }
                                // }} 
                                type="password" placeholder="********" id="password" name="password" />
                            

                            <button id="login-button" className="login-btn" type="submit"><b>Login</b></button>
                        </form>

                        <button id="register-button" onClick={() => history("/Authentication/Register")} className="link-btn-login" >Don't have an account? Register here.</button>
                    </div>
                </div>
            </div>
        );

}