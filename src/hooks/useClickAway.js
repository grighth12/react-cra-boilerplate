import { useRef, useEffect } from "react";

// NOTE touch start로 모바일도 고려
const events = ["mousedown", "touchstart"];

const useClickAway = (handler) => {
  const ref = useRef(null);
  // NOTE 사소한 성능 개선, handler가 변할 때 cleanup 하지 않도록 handler를 그냥 쓰지 않고 ref로 설정해줌
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleEvent = (e) => {
      !element.contains(e.target) && savedHandler.current(e);
    };

    for (const eventName of events) {
      document.addEventListener(eventName, handleEvent);

      return () => {
        for (const eventName of events) {
          document.removeEventListener(eventName, handleEvent);
        }
      };
    }
  }, [ref]);

  return ref;
};

export default useClickAway;
