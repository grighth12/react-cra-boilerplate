// 스타일을 적용하는 법
// 1. 스타일 시트 이용하는 것
// 2. Inline style - 상태가 동적으로 바뀔 때
// 3. Css in js - emotion
// craco = create-react-app-override

import { css } from "@emotion/react";
import Box from "./components/Box";

const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

function App() {
  return (
    <div>
      <SomeComponent />
      <Box bgColor="red" />
    </div>
  );
}

export default App;
