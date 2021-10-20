import Text from "../../components/Text";

export default {
  title: "Component/Text",
  component: Text,
  argTypes: {
    size: { control: "number" },
    block: { control: "boolean" },
    paragraph: { control: "boolean" },
    strong: { control: "boolean" },
    underline: { control: "boolean" },
    delete: { control: "boolean" },
    mark: { control: "boolean" },
    code: { control: "boolean" },
    color: { control: "color" },
  },
};

export const Default = (args) => {
  return (
    <>
      <Text {...args}>Text</Text>
    </>
  );
};

export const Size = (args) => {
  // NOTE 이런 식으로 디자인 시스템을 많이 만든다. 보통의 경우에는 정해진 규격을 사용하고, 특수한 경우에는 커스텀 값을 쓸 수 있게끔
  return (
    <>
      <Text {...args} size="large">
        Text
      </Text>
      <Text {...args} size="normal">
        Text
      </Text>
      <Text {...args} size="small">
        Text
      </Text>
      <Text {...args} size={24}>
        Custom
      </Text>
    </>
  );
};
