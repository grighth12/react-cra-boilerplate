import { useState } from "react";
import styled from "@emotion/styled";
import Image from "../../components/Image";
import useResize from "../../hooks/useResize";

const Background = styled.div`
  width: 100%;
  height: 400px;
  background-color: blue;
`;

export default {
  title: "Hook/useResize",
};

export const Default = () => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const ref = useResize((rect) => {
    setImageSize({ width: rect.width, height: rect.height });
  });
  return (
    <Background ref={ref}>
      <Image
        src="https://picsum.photos/1000"
        mode="contain"
        width={imageSize.width}
        height={imageSize.height}
      />
    </Background>
  );
};
