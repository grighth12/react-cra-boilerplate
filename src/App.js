// 스타일을 적용하는 법
// 1. 스타일 시트 이용하는 것
// 2. Inline style - 상태가 동적으로 바뀔 때
// 3. Css in js

import Box from "./components/Box";

function App() {
  return (
    <div>
      <Box bgColor="red" />
    </div>
  );
}

export default App;
