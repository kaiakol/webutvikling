import { Link } from "react-router-dom";
import "./NavBar.css";

// Returns the navigation bar
export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="LogoNavBar">
        <Link to="/" className="HomeLinkLogo">
          <h1>SipFinder</h1>
        </Link>
      </div>
      <div className="NavBarLinks">
        <Link to="/" className="HomeLink">
          Home
        </Link>
        <Link to="/browse" className="BrowseLink">
          Browse
        </Link>
      </div>
    </nav>
  );
}
