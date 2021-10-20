import { useState } from "react";
import useHotKey from "../../hooks/useHotKey";

export default {
  title: "Hook/useHotKey",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const hotKeys = [
    {
      global: true,
      combo: "shift+k+f",
      onKeyDown: (e) => {
        alert("shift+k+k");
      },
    },
    {
      global: true,
      combo: "esc",
      onKeyDown: (e) => {
        alert("esc");
      },
    },
    {
      global: false,
      combo: "esc",
      onKeyDown: (e) => {
        setValue("");
      },
    },
  ];

  const { handleKeyDown } = useHotKey(hotKeys);

  return (
    <>
      <div>useHotKey 테스트</div>
      <input
        type="text"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
