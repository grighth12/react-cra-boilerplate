import { useMemo } from "react";
import styled from "@emotion/styled";
import FluxProvider from "./FluxProvider";

const AlignToCssValue = {
  top: "flex-start",
  middle: "center",
  bottom: "flex-end",
};

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => AlignToCssValue[align]};
`;

const Row = ({ children, justify, align, gutter, ...props }) => {
  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizontalGutter = gutter[0];
      const verticalGutter = gutter[1];
      return {
        marginBottom: `-${verticalGutter / 2}px -${horizontalGutter / 2}px`,
      };
    }

    return {
      margin: `0 -${gutter / 2}px`,
    };
  }, [gutter]);

  return (
    <FluxProvider gutter={gutter}>
      <StyledRow
        {...props}
        justify={justify}
        align={align}
        style={{ ...props.style, ...gutterStyle }}
      >
        {children}
      </StyledRow>
    </FluxProvider>
  );
};

export default Row;
