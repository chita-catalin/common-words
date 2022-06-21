import {
  Button,
  Card,
  Divider,
  InputNumber,
  Select,
  Statistic,
  Switch,
} from "antd";
import { WordsTable } from "./components/wordsTable";
import { SwapOutlined } from "@ant-design/icons";
import { BlendContext } from "../../../App";
import { Language } from "../../../types";
import React from "react";

import "./style.css";

export const LanguageBlendContext = React.createContext<any>(null);

const LanguageBlendPage = () => {
  const blend = React.useContext(BlendContext);

  const resetFilters = () => {
    blend.setMinLength(1);
    blend.setMaxLength(99);
    blend.setSuffixLetters(0);
  };

  const handleFirstLanguageChange = (value: string) => {
    blend.getFirstLanguage(value);
  };

  const handleSecondLanguageChange = (value: string) => {
    blend.getSecondLanguage(value);
  };

  return (
    <LanguageBlendContext.Provider value={blend}>
      <div id="header-container">
        <Card id="inputs-card">
          <Select
            onChange={handleFirstLanguageChange}
            placeholder="select a language"
            style={{ width: "160px" }}
            defaultValue={""}
          >
            {blend.languages.map((language: Language) => {
              return (
                <Select.Option value={language.name} key={language._id}>
                  {language.name}
                </Select.Option>
              );
            })}
          </Select>
          <SwapOutlined style={{ marginLeft: "10px", marginRight: "10px" }} />

          <Select
            placeholder="select another language"
            onChange={handleSecondLanguageChange}
            defaultValue={""}
            style={{ width: "160px" }}
          >
            {blend.languages
              .sort((a: Language, b: Language) => {
                if (a.name > b.name) return 1;
                return -1;
              })
              .map((language: Language) => {
                return (
                  <Select.Option value={language.name} key={language._id}>
                    {language.name}
                  </Select.Option>
                );
              })}
          </Select>
        </Card>

        <Card id="statistics-card">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Statistic
              title="Common words"
              value={0}
              style={{ marginRight: "24px" }}
            />
            {/* <Statistic
              title="Language match"
              suffix="%"
              value={
                blend.filteredList.length > 0
                  ? (
                      ((blend.filteredList.length * 100) /
                        (blend.selectedLanguage1.length +
                          blend.selectedLanguage2.length)) *
                      2
                    ).toFixed(2)
                  : 0
              }
              style={{ marginRight: "24px" }}
            /> */}
          </div>
        </Card>

        {blend.blendedList.length > 0 && (
          <Card id="controls-card">
            <div id="controls-content">
              <Switch
                onChange={(value: boolean) => {
                  blend.setTableView(value);
                }}
                style={{ margin: "5px" }}
                checkedChildren="Table view"
                unCheckedChildren="Words view"
                checked={blend.tableView}
              />
              <Divider type="vertical" />

              <div style={{ margin: "5px" }}>
                Minimum word length:{" "}
                <InputNumber
                  size="small"
                  min={1}
                  max={99}
                  value={blend.minLength}
                  onChange={(nr: number) => {
                    blend.setMinLength(nr);
                  }}
                  style={{ marginLeft: "2px", width: "55px" }}
                />
              </div>
              <Divider type="vertical" />

              <div style={{ margin: "5px" }}>
                Maximum word length:{" "}
                <InputNumber
                  size="small"
                  min={1}
                  max={99}
                  value={blend.maxLength}
                  onChange={(nr: number) => {
                    blend.setMaxLength(nr);
                  }}
                  style={{ marginLeft: "2px", width: "55px" }}
                />
              </div>
              <Divider type="vertical" />

              <div style={{ margin: "5px" }}>
                Same prefix length:{" "}
                <InputNumber
                  size="small"
                  min={3}
                  max={99}
                  value={blend.prefixLetters}
                  onChange={(nr: number) => {
                    blend.setPrefixLetters(nr);
                  }}
                  style={{ marginLeft: "2px", width: "55px" }}
                />
              </div>
              <Divider type="vertical" />

              <div style={{ margin: "5px" }}>
                Same suffix length:{" "}
                <InputNumber
                  size="small"
                  min={0}
                  max={99}
                  value={blend.suffixLetters}
                  onChange={(nr: number) => {
                    blend.setSuffixLetters(nr);
                  }}
                  style={{ marginLeft: "2px", width: "55px" }}
                />
              </div>
              <Divider type="vertical" />

              <div style={{ margin: "5px" }}>
                Word match (number of different letters) :{" "}
                <InputNumber
                  size="small"
                  min={0}
                  max={99}
                  value={blend.lettersToIgnore}
                  onChange={(nr: number) => {
                    blend.setLettersToIgnore(nr);
                  }}
                  style={{ marginLeft: "2px", width: "55px" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button style={{ marginTop: "12px" }} onClick={resetFilters}>
                Reset all filters
              </Button>
            </div>
          </Card>
        )}
      </div>
      <WordsTable />
    </LanguageBlendContext.Provider>
  );
};

export default LanguageBlendPage;
