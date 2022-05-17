import { TableHeader } from "./components/tableHeader";
import { WordsTable } from "./components/wordsTable";
import NavBar from "../../Layout/NavBar/NavBar";
import { BlendContext } from "../../../App";
import React from "react";

export const LanguageBlendContext = React.createContext<any>(null);

const LanguageBlendPage = () => {
  const blend = React.useContext(BlendContext);

  return (
    <LanguageBlendContext.Provider value={blend}>
      <NavBar />
      <TableHeader />
      <WordsTable />
    </LanguageBlendContext.Provider>
  );
};

export default LanguageBlendPage;
