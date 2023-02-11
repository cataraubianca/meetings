import { Link, useMatch, useResolvedPath } from "react-router-dom";
import navStyles from "./navbar.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {

  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
export default function Navbar() {
  const history = useNavigate();
//   const [token, setToken] = useState(() => {
//     return jwt(getToken("token"))
//   });
  const handleLogOut = async () => {
    await signOut(auth);
    history('/Authentication/Login')
  };
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }

  return (
    <div style={{ backgroundColor: "#f1f4f9", color: "#f1f4f9" }}>
      <nav className={navStyles.navbar}>
        <div className={navStyles.title}>
        <button id="logout-button" className={navStyles.buttonn} onClick={handleLogOut}>Logout</button>
        </div>
        <div className={navStyles.navbarlinks}>
          <ul>
            <li>
              <CustomLink to="/Home/Homee" id="home-tab">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/Meetings/Meetings" id="profile-tab">Meetings</CustomLink>
            </li>
            {/* {token?.role=='Admin' ? <li>
              <CustomLink to="/AdminPage" id="admin-page-tab">AdminPage</CustomLink>
            </li> : null}  */}
          </ul>
        </div>
      </nav>
    </div>
  );
}