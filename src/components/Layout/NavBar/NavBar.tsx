import { Link } from "react-router-dom";
import "../style.css";

const NavBar = () => {
  return (
    <nav id="nav-bar">
      <div id="title">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontFamily: "consolas",
          }}
        >
          COMMON WORDS
        </Link>
      </div>
      <span
        style={{
          fontSize: "13px",
          marginRight: "30px",
          color: "lightgrey",
          marginLeft: "3px",
        }}
      >
        V0.3
      </span>
      <Link
        to="/about"
        style={{
          marginRight: "30px",
          textDecoration: "none",
          color: "#F84284",
        }}
      >
        <u>resources</u>
      </Link>
      <Link
        to="/about"
        style={{
          marginRight: "30px",
          textDecoration: "none",
          color: "#F84284",
        }}
      >
        <u>about</u>
      </Link>
      <Link
        to="/changelog"
        style={{
          marginRight: "30px",
          textDecoration: "none",
          color: "#F84284",
        }}
      >
        <u>changelog</u>
      </Link>
    </nav>
  );
};

export default NavBar;
