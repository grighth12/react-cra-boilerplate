import Breadcrumb from "../../components/Breadcrumb";

export default {
  title: "Component/Breadcrumb",
  component: Breadcrumb,
  argTypes: {},
};
export const Default = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/lev1">Level 1</Breadcrumb.Item>
      <Breadcrumb.Item href="/lev2">Level 2</Breadcrumb.Item>
    </Breadcrumb>
  );
};
