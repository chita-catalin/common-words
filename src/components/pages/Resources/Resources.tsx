import { LoadingOutlined } from "@ant-design/icons";
import { LanguageContext } from "../../../App";
import { useContext, useState } from "react";
import { Divider, Spin } from "antd";
import axios from "axios";

import "./style.css";

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

  const [loading, setLoading] = useState<boolean>(false);

  const getLanguage = async (language: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/getLanguage?language=${language}`
      );

      if (response.status === 200) {
        const element = document.createElement("a");
        const file = new Blob([response.data.data[0].list.join("\n")], {
          type: "text/plain",
        });
        element.href = URL.createObjectURL(file);
        element.download = "list.txt";
        document.body.appendChild(element);
        element.click();
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
    >
      {!loading ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>(en) {english}</div>
            <div
              className="download-link"
              onClick={() => getLanguage("english")}
            >
              {viewList}
            </div>
          </div>

          <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>(fi) {finnish}</div>

            <div
              className="download-link"
              onClick={() => getLanguage("finnish")}
            >
              {viewList}
            </div>
          </div>

          <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>(fr) {french}</div>

            <div
              className="download-link"
              onClick={() => getLanguage("french")}
            >
              {viewList}
            </div>
          </div>
          <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>(de) {german}</div>

            <div
              className="download-link"
              onClick={() => getLanguage("german")}
            >
              {viewList}
            </div>
          </div>

          <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>(hu) {hungarian}</div>

            <div
              className="download-link"
              onClick={() => getLanguage("hungarian")}
            >
              {viewList}
            </div>
          </div>

          <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>(it) {italian}</div>

            <div
              className="download-link"
              onClick={() => getLanguage("italian")}
            >
              {viewList}
            </div>
          </div>

          <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>(pl) {polish}</div>

            <div
              className="download-link"
              onClick={() => getLanguage("polish")}
            >
              {viewList}
            </div>
          </div>

          <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>(ro) {romanian}</div>
            <div
              className="download-link"
              onClick={() => getLanguage("romanian")}
            >
              {viewList}
            </div>
          </div>

          <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>(es) {spanish}</div>
            <div
              className="download-link"
              onClick={() => getLanguage("spanish")}
            >
              {viewList}
            </div>
          </div>

          <Divider style={{ marginTop: "8px", marginBottom: "2px" }} />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>(tr) {turkish}</div>

            <div
              className="download-link"
              onClick={() => getLanguage("turkish")}
            >
              {viewList}
            </div>
          </div>
        </>
      ) : (
        <Spin
          indicator={
            <LoadingOutlined
              style={{ fontSize: 48, color: "white", marginTop: "100px" }}
              spin
            />
          }
        />
      )}
    </div>
  );
};

export default Resources;
