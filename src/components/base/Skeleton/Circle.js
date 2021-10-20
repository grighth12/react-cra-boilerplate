import styled from "@emotion/styled";

import Base from "./Base";

const Circle = styled(Base)`
  width: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};
  height: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};
  border-radius: 50%;
  background-size: 200% 100%;
  background-position: 0 center;
`;

export default Circle;
