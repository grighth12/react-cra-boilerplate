import { useEffect, useState, useRef } from "react";

// NOTE 컴포넌트가 생성되더라도 다시 생성되지 않도록, 모듈 내에서 전역적으로 사용되도록 함
let observer = null;

const LOAD_IMG_EVENT_TYPE = "loadImage";

const onIntersection = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target, "observe");
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
};

const Image = ({
  lazy,
  threshold = 0.5,
  placeholder,
  src,
  block,
  width,
  height,
  alt,
  mode,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  const imageStyle = {
    display: block ? "block" : undefined,
    width,
    height,
    objectFit: mode, // cover, fill, contain
  };

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return;
    }

    const handleLoadImage = () => setLoaded(true);

    const imgElement = imgRef.current;
    imgElement && imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);

    return () => {
      // NOTE addEventListener 했으면 remove 해줘야함
      imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) {
      return;
    }

    if (!observer) {
      observer = new IntersectionObserver(onIntersection, { threshold });
    }
    imgRef.current && observer.observe(imgRef.current);
  }, [lazy, threshold]);

  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      style={{ ...props.style, ...imageStyle }}
      alt={alt}
    />
  );
};

export default Image;
