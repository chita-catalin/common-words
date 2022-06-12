import { LanguageContext } from "../../../App";
import { useContext } from "react";
import { Card } from "antd";

import "./style.css";

const ChangeLog = () => {
  const { update1, update2, update3, update4, update5, update6 } =
    useContext(LanguageContext);

  return (
    <div>
      <div id="changelog-container">
        <div id="changelog-sub-container">
          <Card title="V0.5.0 / 17.5.2022" style={{ margin: "12px" }}>
            {update6}
          </Card>
          <Card title="V0.0.5 / 26.4.2022" style={{ margin: "12px" }}>
            {update5}
          </Card>
          <Card title="V0.0.4 / 16.4.2022" style={{ margin: "12px" }}>
            {update4}
          </Card>
          <Card title="V0.3 / 29.12.2021" style={{ margin: "12px" }}>
            {update3}
          </Card>
          <Card title="V0.2 / 10.12.2021" style={{ margin: "12px" }}>
            {update2}
          </Card>
          <Card title="V0.1 / 1.12.2021" style={{ margin: "12px" }}>
            {update1}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChangeLog;
