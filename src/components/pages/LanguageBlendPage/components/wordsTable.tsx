import { BlendContext, LanguageContext } from "../../../../App";
import { useContext, useEffect, useState } from "react";

import "../style.css";
import { Pagination, Spin, Table, Tag } from "antd";

export const WordsTable = () => {
  const blend = useContext(BlendContext);

  const { wordsPerPage, words, minWordLength, maxWordLength, wordMatch } =
    useContext(LanguageContext);

  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(200);

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
      {blend.tableView && blend.blendedList.length > 0 ? (
        <Table
          columns={columns}
          dataSource={data}
          style={{ marginTop: "6px" }}
          bordered
          loading={blend.loading}
          size="small"
          pagination={{
            pageSize: itemsPerPage,
            position: ["topCenter", "bottomCenter"],
          }}
        />
      ) : blend.blendedList.length > 0 ? (
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
                    el.length >= blend.minLength
                  ) {
                    return (
                      <Tag
                        style={{
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
                      >
                        {el.split("").map((letter: string, index) => (
                          <span
                            style={{
                              color:
                                index < blend.prefixLetters &&
                                blend.prefixLetetrs1 !== 0
                                  ? "#f5222d"
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
                })
              )}

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
                                ? "#f5222d"
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
