import { useEffect } from "react";
import useTimeoutFn from "./useTimeoutFn";

const useTimeout = (fn, ms) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  });

  return clear;
};

export default useTimeout;
