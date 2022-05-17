import NavBar from "../../Layout/NavBar/NavBar";
import { LanguageContext } from "../../../App";
import { Chip } from "@mui/material";
import { useContext } from "react";

import "./style.css";

const ChangeLog = () => {
  const { update1, update2, update3, update4, update5, update6 } =
    useContext(LanguageContext);

  return (
    <div>
      <NavBar />
      <div id="changelog-container">
        <div id="changelog-sub-container">
          <Chip label="V0.5.0 / 17.5.2022" className="changelog-chip" />
          {update6}
          <Chip label="V0.0.5 / 26.4.2022" className="changelog-chip" />
          {update5}
          <Chip label="V0.0.4 / 16.4.2022" className="changelog-chip" />
          {update4}
          <Chip label="V0.3 / 29.12.2021" className="changelog-chip" />
          {update3}
          <Chip label="V0.2 / 10.12.2021" className="changelog-chip" />
          {update2}
          <Chip label="V0.1 / 1.12.2021" className="changelog-chip" />
          {update1}
        </div>
      </div>
    </div>
  );
};

export default ChangeLog;
