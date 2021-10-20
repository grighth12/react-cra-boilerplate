import useKeyPress from "../../hooks/useKeyPress";

export default {
  title: "Hook/useKeyPress",
};

export const Default = () => {
  const pressed = useKeyPress("?");
  return <>{pressed ? "Peek-a-boo!" : "Press ? Key"}</>;
};
