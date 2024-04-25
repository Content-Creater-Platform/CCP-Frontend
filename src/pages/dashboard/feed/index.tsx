import CreateInput from "./components/CreateInput";
import Head from "./components/Head";
import DashboardLayout from "../../../layout/dashboardLayout";
import Content from "./components/Content";

const Feed = () => {
  return (
    <DashboardLayout>
      <Head />
      <CreateInput />
      <Content />
    </DashboardLayout>
  );
};

export default Feed;
