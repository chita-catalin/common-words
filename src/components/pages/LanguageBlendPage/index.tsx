import { WordsTable } from "./components/wordsTable";
import { BlendContext } from "../../../App";
import React from "react";
import { Card, InputNumber, Select, Slider, Statistic, Switch } from "antd";
import { Language } from "../../../types";
import { SwapOutlined } from "@ant-design/icons";
import Countdown from "antd/lib/statistic/Countdown";

export const LanguageBlendContext = React.createContext<any>(null);

const LanguageBlendPage = () => {
  const blend = React.useContext(BlendContext);

  const handleFirstLanguageChange = (value: string) => {
    blend.getFirstLanguage(value);
  };

  const handleSecondLanguageChange = (value: string) => {
    blend.getSecondLanguage(value);
  };

  return (
    <LanguageBlendContext.Provider value={blend}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <Card
          style={{
            flexGrow: 1,
            display: "flex",
            backgroundColor: "#fafafa",
            borderWidth: "0px",
            borderRadius: "0px",
          }}
        >
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
        <Card
          style={{
            flexGrow: 40,
            backgroundColor: "#f5f5f5",
            borderWidth: "0px",
            borderRadius: "0px",
          }}
        >
          <div style={{ display: "flex" }}>
            <Statistic
              title="Common words"
              value={123}
              style={{ marginRight: "24px" }}
            />
            <Countdown title="Execution time" format="ss:SSS" value={123} />
          </div>
        </Card>
        <Card
          style={{
            background: "#f0f0f0",
            borderWidth: "0px",
            borderRadius: "0px",
          }}
        >
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "-5px",
              justifyContent: "space-around",
            }}
          >
            <Switch
              style={{ margin: "5px" }}
              checkedChildren="Table view"
              unCheckedChildren="Words view"
              defaultChecked
            />
            <Switch
              style={{ margin: "5px" }}
              checkedChildren="Accent marks (a=ä)"
              unCheckedChildren="Accent marks (a≠ä)"
              defaultChecked
            />

            <div style={{ margin: "5px" }}>
              Minimum word length:{" "}
              <InputNumber
                size="small"
                min={1}
                max={10}
                defaultValue={3}
                onChange={() => {}}
                style={{ marginLeft: "2px", width: "55px" }}
              />
            </div>

            <div style={{ margin: "5px" }}>
              Maximum word length:{" "}
              <InputNumber
                size="small"
                min={1}
                max={10}
                defaultValue={3}
                onChange={() => {}}
                style={{ marginLeft: "2px", width: "55px" }}
              />
            </div>

            <div style={{ margin: "5px" }}>
              Same prefix length:{" "}
              <InputNumber
                size="small"
                min={0}
                max={99}
                defaultValue={0}
                onChange={() => {}}
                style={{ marginLeft: "2px", width: "55px" }}
              />
            </div>

            <div style={{ margin: "5px" }}>
              Same suffix length:{" "}
              <InputNumber
                size="small"
                min={0}
                max={99}
                defaultValue={0}
                onChange={() => {}}
                style={{ marginLeft: "2px", width: "55px" }}
              />
            </div>

            <div style={{ margin: "5px" }}>
              Word match (number of different letters) :{" "}
              <InputNumber
                size="small"
                min={0}
                max={99}
                defaultValue={0}
                onChange={() => {}}
                style={{ marginLeft: "2px", width: "55px" }}
              />
            </div>
          </div>
        </Card>
      </div>
      <WordsTable />
    </LanguageBlendContext.Provider>
  );
};

export default LanguageBlendPage;
