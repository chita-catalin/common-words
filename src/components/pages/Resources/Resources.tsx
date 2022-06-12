import { LanguageContext } from "../../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";

import "./style.css";

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
    <div>
      <div id="resources-container">
        <div id="laguages-title">{languageWordList}</div>
        <div id="languages-list-container">
          <Link to="/resources/english" className="language-link">
            {">"} (en) {english}
          </Link>
          <Link to="/resources/finnish" className="language-link">
            {">"} (fi) {finnish}
          </Link>
          <Link to="/resources/french" className="language-link">
            {">"} (fr) {french}
          </Link>
          <Link to="/resources/german" className="language-link">
            {">"} (de) {german}
          </Link>
          <Link to="/resources/hungarian" className="language-link">
            {">"} (hu) {hungarian}
          </Link>
          <Link to="/resources/italian" className="language-link">
            {">"} (it) {italian}
          </Link>
          <Link to="/resources/polish" className="language-link">
            {">"} (pl) {polish}
          </Link>
          <Link to="/resources/romanian" className="language-link">
            {">"} (ro) {romanian}
          </Link>
          <Link to="/resources/spanish" className="language-link">
            {">"} (es) {spanish}
          </Link>
          <Link to="/resources/turkish" className="language-link">
            {">"} (tr) {turkish}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;
