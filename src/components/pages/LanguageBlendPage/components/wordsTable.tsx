import { BlendContext, LanguageContext } from "../../../../App";
import { useContext, useEffect, useState } from "react";

import "../style.css";
import { Badge, Modal, Pagination, Spin, Table, Tag, Tooltip } from "antd";

export const WordsTable = () => {
  const blend = useContext(BlendContext);

  const { wordsPerPage, words, minWordLength, maxWordLength, wordMatch } =
    useContext(LanguageContext);

  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(200);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedWordsArray, setSelectedWordsArray] = useState<string[]>([]);

  const data: any = blend.blendedList.map((el: string) => {
    return { word: el };
  });

  const columns: any = [
    {
      title: "word",
      dataIndex: "word",
      key: "word",
      render: (text: string) => <a>{text}</a>,
    },
  ];

  return (
    <>
      {blend.blendedList.length > 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "12px",
          }}
        >
          <Pagination
            current={page}
            pageSize={itemsPerPage}
            defaultCurrent={1}
            total={blend.blendedList.length}
            pageSizeOptions={[50, 100, 200, 500, 1000, 2000, 5000, 10000]}
            style={{ flexGrow: 1 }}
            onChange={(page, pageSize: number) => {
              setItemsPerPage(pageSize);
              setPage(page);
            }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "6px" }}>
            {blend.prefixLetters > 0 &&
              typeof blend.blendedList[0] === "object" &&
              //map(nested => nested.map(element => element * 2));

              blend.blendedList.map((nested: any, index1: number) =>
                nested?.map((el: string, index2: number) => {
                  if (
                    index1 * index2 >= itemsPerPage * page &&
                    index1 * index2 <= itemsPerPage * (page + 1) - 1 &&
                    el.length <= blend.maxLength &&
                    el.length >= blend.minLength &&
                    //and both languages are present
                    nested.join().indexOf("1") !== -1 &&
                    nested.join().indexOf("2") !== -1
                  ) {
                    return (
                      <Tag
                        className="word-tag"
                        style={{
                          cursor: "pointer",
                          flexGrow: 1,
                          marginTop: "6px",
                          backgroundColor:
                            el.length <= 5
                              ? "#e6f7ff"
                              : el.length <= 10
                              ? "#bae7ff"
                              : el.length <= 15
                              ? "#91d5ff"
                              : "#69c0ff",
                        }}
                        onClick={() => {
                          setSelectedWordsArray(nested);
                          setModalVisible(true);
                        }}
                      >
                        {el
                          .substr(0, el.length - 1)
                          .split("")
                          .map((letter: string, index) => (
                            <span
                              style={{
                                fontWeight:
                                  index < blend.prefixLetters &&
                                  blend.prefixLetters !== 0
                                    ? 600
                                    : 100,
                                textDecoration:
                                  index < blend.prefixLetters &&
                                  blend.prefixLetters !== 0
                                    ? "underline"
                                    : "normal",
                              }}
                            >
                              {letter}
                            </span>
                          ))}
                      </Tag>
                    );
                  }
                })
              )}

            {/*Modal for Similar words*/}
            <Modal
              title="Common words"
              visible={modalVisible}
              onCancel={() => setModalVisible(false)}
              footer={null}
            >
              <h3>
                <Badge color="#096dd9" style={{ marginRight: "0px" }} /> (
                {blend.languageCode1}) |
                <Badge color="#cf1322" style={{ marginLeft: "10px" }} />(
                {blend.languageCode2})
              </h3>
              {selectedWordsArray.map((el: string) => {
                return (
                  <>
                    <span
                      style={{
                        color: el.indexOf("1") !== -1 ? "#096dd9" : "#cf1322",
                      }}
                    >
                      {el
                        .substr(0, el.length - 1)
                        .split("")
                        .map((letter: string, index) => (
                          <span
                            style={{
                              fontWeight:
                                index < blend.prefixLetters &&
                                blend.prefixLetters !== 0
                                  ? 600
                                  : 100,
                              textDecoration:
                                index < blend.prefixLetters &&
                                blend.prefixLetters !== 0
                                  ? "underline"
                                  : "normal",
                            }}
                          >
                            {letter}
                          </span>
                        ))}
                    </span>{" "}
                    |{" "}
                  </>
                );
              })}
            </Modal>

            {blend.prefixLetters === 0 &&
              blend.blendedList.map((word: string, index: number) => {
                if (
                  index >= itemsPerPage * page &&
                  index <= itemsPerPage * (page + 1) - 1 &&
                  word.length <= blend.maxLength &&
                  word.length >= blend.minLength
                ) {
                  return (
                    <Tag
                      style={{
                        flexGrow: 1,
                        marginTop: "6px",
                        backgroundColor:
                          word.length <= 5
                            ? "#e6f7ff"
                            : word.length <= 10
                            ? "#bae7ff"
                            : word.length <= 15
                            ? "#91d5ff"
                            : "#69c0ff",
                      }}
                    >
                      {word.split("").map((letter: string, index) => (
                        <span
                          style={{
                            color:
                              index < blend.prefixLetters &&
                              blend.prefixLetetrs1 !== 0
                                ? "#002766"
                                : "black",
                            fontWeight:
                              index < blend.prefixLetters &&
                              blend.prefixLetters !== 0
                                ? 500
                                : 100,
                          }}
                        >
                          {letter}
                        </span>
                      ))}
                    </Tag>
                  );
                }
              })}
          </div>
        </div>
      ) : null}

      {blend.loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "48px",
          }}
        >
          <Spin />
        </div>
      )}
    </>
  );
};
