import { TextScraperContext } from "..";
import { useCallback, useContext, useEffect, useState } from "react";

const TextInput = () => {
  const { setText, textRef } = useContext(TextScraperContext);

  const debounce = (func: any) => {
    let timer: any;
    return function (...args: any) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(null, args);
      }, 500);
    };
  };

  const handleChange = (text: string) => {
    setText(text);
    console.log("acum se face set state");
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <textarea
      style={{ boxSizing: "border-box", width: "100%" }}
      rows={15}
      name="description"
      placeholder="Extract the unique words from every text!"
      onChange={(e) => optimizedFn(e.target.value)}
      ref={textRef}
    ></textarea>
  );
};

export default TextInput;
