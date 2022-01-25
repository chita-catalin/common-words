import React from "react";
import BlendComponent from "./BlendComponent";
import ResultComponent from "./ResultComponent/ResultComponent";
import "./style.css";
import { BlendContext } from "../../../App";

export const LanguageBlendContext = React.createContext<any>(null);

const LanguageBlendPage = () => {
  const blend = React.useContext(BlendContext);

  return (
    <LanguageBlendContext.Provider value={blend}>
      <div id="language-blend-page">
        {blend.blendedList.length > 0 ? (
          <ResultComponent />
        ) : (
          <BlendComponent />
        )}
      </div>
    </LanguageBlendContext.Provider>
  );
};

export default LanguageBlendPage;
