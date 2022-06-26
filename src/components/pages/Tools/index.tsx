import { LanguageContext } from "../../../App";
import { Link } from "react-router-dom";
import { Button, Divider } from "antd";
import { useContext } from "react";

import "./style.css";

const Tools = () => {
  const { textScraper } = useContext(LanguageContext);

  return (
    <div id="tools-container">
      <Link to="/tools/text-scraper" style={{ textDecoration: "none" }}>
        <Button type="primary">{textScraper}</Button>
      </Link>
      <Divider style={{ marginTop: "10px" }} />
    </div>
  );
};

export default Tools;
