import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/Layout/NavBar/NavBar";
import LanguageBlendPage from "./components/pages/LanguageBlendPage/index";
import NotFound from "./components/pages/NotFound/NotFound";
import Resources from "./components/pages/Resources/Resources";
import ChangeLog from "./components/pages/changelog/ChangeLog";
import React from "react";
import { MoreStatistics } from "./components/pages/MoreStatistics";
import MoreDetails from "./components/pages/MoreDetails";
import useLanguageBlend from "./useLanguageBlend";
import LandingPage from "./components/pages/LandingPage";

export const BlendContext = React.createContext<any>(null);

function App() {
  const blend = useLanguageBlend();

  return (
    <BlendContext.Provider value={blend}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/common-words/language-blend"
            element={<LanguageBlendPage />}
          />
          <Route path="/common-words/resources" element={<Resources />} />
          <Route path="/common-words/changelog" element={<ChangeLog />} />
          <Route
            path="/common-words/more-statistics"
            element={<MoreStatistics />}
          />
          <Route path="/common-words/more-details" element={<MoreDetails />} />
          <Route path="/common-words/" element={<LandingPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BlendContext.Provider>
  );
}

export default App;
