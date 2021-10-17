const Header = ({ children, level = 1, strong, underline, color, ...props }) => {
  let Tag = `h${level}`;

  //  NOTE prop의 예외처리 필수
  if (level < 1 || level > 6) {
    console.warn("헤더는 level로 오직 1 | 2 | 3 | 4 | 5 | 6 만 받을 수 있습니다.");
    Tag = "h1";
  }

  const fontStyle = {
    fontWeight: strong ? "bold" : "normal",
    textDecoration: underline ? "underline" : undefined,
    color,
  };

  return (
    <Tag style={{ ...props.style, ...fontStyle }} {...props}>
      {children}
    </Tag>
  );
};

export default Header;
