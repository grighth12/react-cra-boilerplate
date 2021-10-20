import React from "react";

// NOTE spacer : 자식 요소들의 간격과 배치(horizontal, vertical)을 지정해주는 컴포넌트
const Spacer = ({ children, type = "horizontal", size = 8, ...props }) => {
  const spacerStyle = {
    ...props.style,
    display: type === "vertical" ? "block" : "inline-block",
    verticalAlign: type === "horizontal" ? "middle" : undefined,
  };

  // NOTE children을 변경 시켜줄 수 있음
  const nodes = React.Children.toArray(children)
    .filter((element) => React.isValidElement(element))
    .map((element, index, elements) => {
      return React.cloneElement(element, {
        ...element.props,
        style: {
          ...element.props.style,
          marginRight: type === "horizontal" && index !== elements.length - 1 ? size : undefined,
          marginBottom: type === "vertical" && index !== elements.length - 1 ? size : undefined,
        },
      });
    });

  return (
    <div {...props} style={spacerStyle}>
      {nodes}
    </div>
  );
};

export default Spacer;
