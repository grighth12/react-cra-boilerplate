import styled from "@emotion/styled";

import Base from "./Base";

const Box = styled(Base)`
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};
  height: ${({ height }) => (typeof height === "number" ? `${height}px` : height)};
  background-size: 200% 100%;
  background-position: 0 center;
`;

export default Box;
