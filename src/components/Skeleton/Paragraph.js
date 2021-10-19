import Box from "./Box";

const Paragraph = ({ line = 3, ...props }) => {
  return (
    <div {...props}>
      {Array.from(Array(line), (_, index) => {
        const width = index !== line - 1 ? "100%" : "64%";
        return <Box width={width} height={16} key={index} />;
      })}
    </div>
  );
};

export default Paragraph;
