import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
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
      <HashRouter>
        <Routes>
          <Route path="/language-blend" element={<LanguageBlendPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/changelog" element={<ChangeLog />} />
          <Route path="/more-statistics" element={<MoreStatistics />} />
          <Route path="/more-details" element={<MoreDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </BlendContext.Provider>
  );
}

export default App;
