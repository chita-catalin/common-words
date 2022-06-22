import { Button, Divider } from "antd";
import { Link } from "react-router-dom";

import "./style.css";

const Tools = () => {
  return (
    <div id="tools-container">
      <Link to="/tools/text-scraper" style={{ textDecoration: "none" }}>
        <Button type="primary">TEXT SCRAPER</Button>
      </Link>
      <Divider style={{ marginTop: "10px" }} />
    </div>
  );
};

export default Tools;
