import LanguageBlendPage from "./components/pages/LanguageBlendPage/index";
import LanguageList from "./components/pages/Resources/LanguageList";
import { Route, Routes, HashRouter, Link } from "react-router-dom";
import Resources from "./components/pages/Resources/Resources";
import ChangeLog from "./components/pages/changelog/ChangeLog";
import TextScraper from "./components/pages/Tools/TextScraper";
import NotFound from "./components/pages/NotFound/NotFound";
import LandingPage from "./components/pages/LandingPage";
import useLanguageBlend from "./useLanguageBlend";
import { About } from "./components/pages/about";
import Tools from "./components/pages/Tools";
import { useLanguage } from "./useLanguage";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ToolOutlined,
  HistoryOutlined,
  HomeOutlined,
  SwapOutlined,
  DatabaseOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Select } from "antd";
import React, { useState } from "react";

import "antd/dist/antd.css";
import "./App.css";

//env
import "dotenv/config";

export const LanguageContext = React.createContext<any>(null);
export const BlendContext = React.createContext<any>(null);

const { Header, Sider, Content } = Layout;

function App() {
  const blend = useLanguageBlend();
  const language = useLanguage();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <LanguageContext.Provider value={language}>
      <BlendContext.Provider value={blend}>
        <HashRouter>
          <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <Menu
                style={{
                  paddingTop: "60px",
                  minHeight: "100vh",
                  height: "100%",
                }}
                theme="light"
                mode="inline"
                defaultSelectedKeys={["0"]}
              >
                <Menu.Item key="0">
                  <Link to="/">
                    <HomeOutlined />
                    <span>Explore</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="1">
                  <Link to="/language-blend">
                    <SwapOutlined /> <span>Compare languages</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/tools">
                    <ToolOutlined /> <span>{language.tools}</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/resources">
                    <DatabaseOutlined /> <span>{language.resources}</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/about">
                    <InfoCircleOutlined /> <span>{language.about}</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/changelog">
                    <HistoryOutlined /> <span>{language.changelog}</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {collapsed ? (
                  <MenuUnfoldOutlined
                    className="trigger"
                    onClick={() => setCollapsed(!collapsed)}
                  />
                ) : (
                  <MenuFoldOutlined
                    className="trigger"
                    onClick={() => setCollapsed(!collapsed)}
                  />
                )}

                <div id="title">
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {language.commonWords}
                  </Link>
                  <span style={{ fontSize: "15px", marginLeft: "2px" }}>
                    V1.0.0
                  </span>
                </div>

                <Select
                  style={{ marginRight: "24px" }}
                  defaultValue="english"
                  bordered={false}
                  onChange={(lng: string) => language.setLanguage(lng)}
                >
                  <Select.Option value="english">
                    {language.english}
                  </Select.Option>
                  <Select.Option value="romanian">
                    {language.romanian}
                  </Select.Option>
                </Select>
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: "24px 16px",
                  padding: 12,
                  minHeight: 280,
                }}
              >
                <Routes>
                  <Route
                    path="/language-blend"
                    element={<LanguageBlendPage />}
                  />
                  <Route path="/resources" element={<Resources />} />
                  <Route
                    path="/resources/:language"
                    element={<LanguageList />}
                  />
                  <Route path="/changelog" element={<ChangeLog />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/" element={<LandingPage />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/tools" element={<Tools />} />
                  <Route path="/tools/text-scraper" element={<TextScraper />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </HashRouter>
      </BlendContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;

/*

 <Link to="/tools" className="first-small-nav">
            <u>{tools}</u>
          </Link>
          <Link to="/resources" className="small-nav">
            <u>{resources}</u>
          </Link>
          <Link to="/about" className="small-nav">
            <u>{about}</u>
          </Link>
          <Link to="/changelog" className="small-nav">
            <u>{changelog}</u>
          </Link>

export default App;*/
