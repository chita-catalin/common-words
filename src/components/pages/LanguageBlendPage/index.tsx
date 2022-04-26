import { WordsTable } from "./components/wordsTable";
import { CircularProgress } from "@mui/material";
import NavBar from "../../Layout/NavBar/NavBar";
import { BlendContext } from "../../../App";
import React from "react";

import "./style.css";
import { TableHeader } from "./components/tableHeader";

export const LanguageBlendContext = React.createContext<any>(null);

const LanguageBlendPage = () => {
  const blend = React.useContext(BlendContext);

  return (
    <LanguageBlendContext.Provider value={blend}>
      <NavBar />

      {blend.loading === true ? (
        <CircularProgress />
      ) : (
        <>
          <TableHeader />
          <WordsTable />
        </>
      )}
    </LanguageBlendContext.Provider>
  );
};

export default LanguageBlendPage;
