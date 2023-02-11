import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase";

// const App = () => {
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   const [user, setUser] = useState({});


//   const register = async () => {
//     try {
//       const user = await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword
//       );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const login = async () => {
//     try {
//       const user = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword
//       );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const logout = async () => {
//     await signOut(auth);
//   };
//   useEffect(() => {
//     onAuthStateChanged(auth, (currentUser) => {
//         setUser(currentUser);
//     });

// }, [])
//   return (
//     <div className="App">
//       <div>
//         <h3> Register User </h3>
//         <input
//           placeholder="Email..."
//           onChange={(event) => {
//             setRegisterEmail(event.target.value);
//           }}
//         />
//         <input
//           placeholder="Password..."
//           onChange={(event) => {
//             setRegisterPassword(event.target.value);
//           }}
//         />

//         <button onClick={register}> Create User</button>
//       </div>

//       <div>
//         <h3> Login </h3>
//         <input
//           placeholder="Email..."
//           onChange={(event) => {
//             setLoginEmail(event.target.value);
//           }}
//         />
//         <input
//           placeholder="Password..."
//           onChange={(event) => {
//             setLoginPassword(event.target.value);
//           }}
//         />

//         <button onClick={login}> Login</button>
//       </div>

//       <h4> User Logged In: </h4>
//       {user?.email}

//       <button onClick={logout}> Sign Out </button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import './Authentication/Authentication.css';
import {Login} from "./Authentication/Login";
import {Register} from "./Authentication/Signup";
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import { Home } from "./Home/Homee";
import { Meetings } from "./Meetings/Meetings";
import { PrivateRoutes } from "./PrivateRoutes";
function App () {
  const [user,setUser]=useState(window.localStorage.getItem('currentUser'));
  return (
    <>
    <Router>
        <Routes>
          
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Authentication/Login" element={<Login/>}/>
        <Route exact path="/Authentication/Register" element={<Register/>}/>

        <Route element={<PrivateRoutes/>}>
          <Route exact path="/Home/Homee" element={<Home/>}/>
          <Route exact path="/Meetings/Meetings" element={<Meetings/>}/>
        </Route>

        </Routes>
      </Router>
      </>
  );

}

export default App;