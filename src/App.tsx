import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/Layout/NavBar/NavBar";
import LanguageBlendPage from "./components/pages/LanguageBlendPage/index";
import NotFound from "./components/pages/NotFound/NotFound";
import Resources from "./components/pages/Resources/Resources";
import useTheme from "./components/ThemeComponent/useTheme";
import ChangeLog from "./components/pages/changelog/ChangeLog";
import React from "react";
import { MoreStatistics } from "./components/pages/MoreStatistics";

export const ThemeContext = React.createContext<any>(null);

function App() {
  const theme = useTheme();

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<LanguageBlendPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/changelog" element={<ChangeLog />} />
          <Route path="/more-statistics" element={<MoreStatistics />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
