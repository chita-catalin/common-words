import { TextScraperContext } from "..";
import { useCallback, useContext } from "react";
import { LanguageContext } from "../../../../../App";

const TextInput = () => {
  const { setText, textRef } = useContext(TextScraperContext);
  const { extractTheUniqueWordsFromAnyText } = useContext(LanguageContext);

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
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <textarea
      style={{ boxSizing: "border-box", width: "100%" }}
      rows={8}
      name="description"
      placeholder={extractTheUniqueWordsFromAnyText}
      onChange={(e) => optimizedFn(e.target.value)}
      ref={textRef}
    ></textarea>
  );
};

export default TextInput;
