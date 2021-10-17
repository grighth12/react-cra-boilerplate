import PropTypes from "prop-types";

import "./Text.css";

// NOTE delete는 예약어라 다른 걸로 쓸수 있게 끔 해줘야함
const Text = ({
  children,
  block,
  paragraph,
  size,
  strong,
  underline,
  delete: del,
  color,
  mark,
  code,
  ...props
}) => {
  // NOTE 태그의 동적인 사용
  const Tag = block ? "div" : paragraph ? "p" : "span";

  const fontStyle = {
    fontWeight: strong ? "bold" : undefined,
    // NOTE type이 숫자면 인라인으로, 문자면 class name으로 넣어줌
    fontSize: typeof size === "number" ? size : undefined,
    textDecoration: underline ? "underline" : undefined,
    color,
  };

  if (mark) {
    children = <mark>{children}</mark>;
  }

  if (code) {
    children = <code>{children}</code>;
  }

  if (del) {
    children = <del>{children}</del>;
  }

  return (
    <Tag
      className={typeof size === "string" ? `Text--size-${size}` : undefined}
      style={{ ...props.style, ...fontStyle }}
    >
      {children}
    </Tag>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  block: PropTypes.bool,
  paragraph: PropTypes.bool,
  delete: PropTypes.bool,
  code: PropTypes.bool,
  mark: PropTypes.bool,
  strong: PropTypes.bool,
  color: PropTypes.string,
};

export default Text;
