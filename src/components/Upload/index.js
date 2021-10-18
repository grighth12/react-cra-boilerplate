import { useRef, useState } from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  display: none;
`;

const Upload = ({ children, droppable, name, accept, value, onChange, ...props }) => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange();
  };

  const handleChooseFile = () => {
    inputRef.current.click();
  };

  const handleDragEnter = (e) => {
    if (!droppable) return;

    // 파일이 새창으로 여는 것 방지
    e.preventDefault();
    // 부모나 자식 컴포넌트로 이벤트가 전파되는 것을 막음
    e.stopPropagation();

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };

  const handleDragLeave = () => {
    if (!droppable) return;

    // 파일이 새창으로 여는 것 방지
    e.preventDefault();
    // 부모나 자식 컴포넌트로 이벤트가 전파되는 것을 막음
    e.stopPropagation();

    setDragging(false);
  };

  const handleDragOver = (e) => {};

  const handleFileDrop = () => {};

  // NOTE render props를 통한 처리
  return (
    <div onClick={handleChooseFile} {...props}>
      <Input ref={inputRef} type="file" name={name} accept={accept} onChange={handleFileChange} />
      {typeof children === "function" ? children(file) : children}
    </div>
  );
};

export default Upload;
