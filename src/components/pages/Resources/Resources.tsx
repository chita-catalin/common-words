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
      german: Großes Wörterbuch der deutschen Sprache
      https://www.researchgate.net/publication/335202645_Das_digitale_Worterbuch_der_deutschen_Sprache_DWDS
    </div>
  );
};

export default Resources;
