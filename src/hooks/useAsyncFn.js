import { useRef, useCallback, useState } from "react";

const useAsyncFn = (fn, deps) => {
  // NOTE: 첫 번째 비동기 처리가 두번째 비동기 처리보다 느린경우 값이 첫 비동기로 들어갈  수있는데 이를 방지하기 위해 callID 적용
  const lastCallId = useRef(0);
  const [state, setState] = useState({
    isLoading: false,
  });

  const callback = useCallback((...args) => {
    const callId = ++lastCallId.current;
    if (!state.isLoading) {
      setState({ ...state, isLoading: true });
    }

    return fn(...args)
      .then((value) => {
        callId === lastCallId.current && setState({ value, isLoading: false });
        return value;
      })
      .catch((error) => {
        callId === lastCallId.current && setState({ error, isLoading: false });
        return error;
      });
    // eslint-disable-next-line
  }, deps);

  return [state, callback];
};

export default useAsyncFn;
