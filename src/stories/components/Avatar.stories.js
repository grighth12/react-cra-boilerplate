import Avatar from "../../components/Avatar";

export default {
  title: "Component/Avatar",
  component: Avatar,
  argTypes: {
    // lazy,
    // threshold,
    src: { defaultValue: "https://picsum.photos/200", control: { type: "text" } },
    size: { defaultValue: 70, control: { type: "range", min: 40, max: 400 } },
    shape: {
      defaultValue: "circle",
      control: "inline-radio",
      options: ["circle", "round", "square"],
    },
    mode: {
      defaultValue: "cover",
      control: "inline-radio",
      options: ["contain", "cover", "fill"],
    },
  },
};

export const Default = (args) => {
  return <Avatar {...args} />;
};

export const Group = (args) => {
  return (
    <Avatar.Group {...args} size={40}>
      <Avatar src="https://picsum.photos/200?1" />
      <Avatar src="https://picsum.photos/200?2" />
      <Avatar src="https://picsum.photos/200?3" />
      <Avatar src="https://picsum.photos/200?4" />
    </Avatar.Group>
  );
};
