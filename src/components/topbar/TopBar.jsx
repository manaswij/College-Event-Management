/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const [isMobile, setIsMobile] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">CEM</div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
            <Link className="link" to="/">
              CATEGORIES
            </Link>
            <Link className="link" to="/write">
              CREATE EVENT
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user ? "LOGOUT" : null}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
      <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}
      </button>
    </div>
  );
}
