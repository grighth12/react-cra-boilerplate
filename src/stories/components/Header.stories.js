import Header from "../../components/Header";

export default {
  title: "Component/Header",
  component: Header,
  argTypes: {
    level: { control: { type: "range", min: 1, max: 6 } },
    color: { control: {type: "color", defaultValue: "#eee"} },
    strong: { control: "boolean" },
    underline: { control: "boolean" },
  },
};

export const Default = (args) => {
  return <Header {...args}>header</Header>;
};

export const Bigger = (args) => {
  return <Header {...args}>header</Header>;
};
