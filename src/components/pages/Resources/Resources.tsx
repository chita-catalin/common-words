import { LanguageContext } from "../../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";

import "./style.css";
import { Divider } from "antd";

const Resources = () => {
  const {
    languageWordList,
    english,
    finnish,
    french,
    german,
    hungarian,
    italian,
    polish,
    romanian,
    spanish,
    turkish,
  } = useContext(LanguageContext);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(en) {english}</div>
        <Link to="/resources/english">View list</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(fi) {finnish}</div>

        <Link to="/resources/finnish">View list</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(fr) {french}</div>
        <Link to="/resources/french">View list</Link>
      </div>
      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(de) {german}</div>

        <Link to="/resources/german">View list</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(hu) {hungarian}</div>

        <Link to="/resources/hungarian">View list</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(it) {italian}</div>

        <Link to="/resources/italian">View list</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(pl) {polish}</div>

        <Link to="/resources/polish">View list</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(ro) {romanian}</div>
        <Link to="/resources/romanian">View list</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(es) {spanish}</div>
        <Link to="/resources/spanish">View list</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(tr) {turkish}</div>

        <Link to="/resources/turkish">View list</Link>
      </div>
    </div>
  );
};

export default Resources;
