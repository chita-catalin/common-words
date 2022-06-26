import { LanguageContext } from "../../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";

import "./style.css";
import { Divider } from "antd";

const Resources = () => {
  const {
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
    viewList,
  } = useContext(LanguageContext);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(en) {english}</div>
        <Link to="/resources/english">{viewList}</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(fi) {finnish}</div>

        <Link to="/resources/finnish">{viewList}</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(fr) {french}</div>
        <Link to="/resources/french">{viewList}</Link>
      </div>
      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(de) {german}</div>

        <Link to="/resources/german">{viewList}</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(hu) {hungarian}</div>

        <Link to="/resources/hungarian">{viewList}</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(it) {italian}</div>

        <Link to="/resources/italian">{viewList}</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(pl) {polish}</div>

        <Link to="/resources/polish">{viewList}</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(ro) {romanian}</div>
        <Link to="/resources/romanian">{viewList}</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(es) {spanish}</div>
        <Link to="/resources/spanish">{viewList}</Link>
      </div>

      <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>(tr) {turkish}</div>

        <Link to="/resources/turkish">{viewList}</Link>
      </div>
    </div>
  );
};

export default Resources;
