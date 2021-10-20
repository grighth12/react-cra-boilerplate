import { useCallback, useEffect, useRef } from "react";

const useIntervalFn = (fn, ms) => {
  const intervalId = useRef();
  // NOTE ref로 받는 것 중요함, setInterval이 시작된 이후로 fn이 바뀌면 문제가 발생할 수 있다 ref로 받으면 중간에 끊기지 않을 수 있기 때문에 ref로 받아야 함
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current);

    intervalId.current = setInterval(() => {
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current);
  }, []);

  useEffect(() => clear, [clear]);

  return [run, clear];
};

export default useIntervalFn;
