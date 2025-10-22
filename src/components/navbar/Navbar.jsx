import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
// import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  // const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear stored user and update context
    localStorage.removeItem("user");
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social App</span>
        </Link>
        <HomeOutlinedIcon />
        {/* {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )} */}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src={currentUser?.profilePic} alt="" />
          <span>{currentUser?.name}</span>
        </div>
        <button className="logoutBtn" onClick={handleLogout} title="Logout">
          <ExitToAppOutlinedIcon fontSize="small" />
          <span className="btnText">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
