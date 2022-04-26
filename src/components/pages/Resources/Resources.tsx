import { Link } from "react-router-dom";
import NavBar from "../../Layout/NavBar/NavBar";

const Resources = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: "30px",
        }}
      >
        <div style={{ color: "#222831" }}>Language word lists (all words)</div>
        <Link
          to="/languages/ro"
          style={{ color: "#00ADB5", marginLeft: "20px" }}
        >
          {">"} (ro) Romanian word list
        </Link>
      </div>
    </div>
  );
};

export default Resources;
