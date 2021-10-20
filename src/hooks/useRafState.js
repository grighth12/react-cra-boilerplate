import { useCallback, useRef, useState } from "react";

// NOTE 성능 최적화 로직은 공통적으로 사용될 수 있는 부분은 꼭 넣어주는 게 좋다
const useRafState = (initialState) => {
  const frame = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback((value) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  return [state, setRafState];
};

export default useRafState;
