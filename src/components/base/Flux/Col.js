import { useMemo } from "react";

import styled from "@emotion/styled";
import { useFlux } from "./FluxProvider";

const StyledCol = styled.div`
  maxwidth: 100%fit-content;
  box-sizing: border-box;

  width: ${({ span }) => span && `${(span / 12) * 100}%`};
  margin-left: ${({ offset }) => offset && `${(offset / 12) * 100}%`};
`;

const Col = ({ children, span, offset, ...props }) => {
  const { gutter } = useFlux();
  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizontalGutter = gutter[0];
      const verticalGutter = gutter[1];
      return {
        margin: `${verticalGutter / 2}px ${horizontalGutter / 2}px`,
      };
    }

    return {
      padding: `0 ${gutter / 2}px`,
    };
  }, [gutter]);

  return (
    <StyledCol {...props} span={span} offset={offset} style={{ ...props.style, ...gutterStyle }}>
      {children}
    </StyledCol>
  );
};

export default Col;
