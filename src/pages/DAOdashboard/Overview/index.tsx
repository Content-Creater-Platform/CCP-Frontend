import CreateInput from "./components/CreateInput";
import Head from "./components/Head";
import DAODashboardLayout from "../../../layout/DAOdashboardLayout";

const Overview = () => {
  return (
    <DAODashboardLayout>
      <Head />
      <CreateInput />
    </DAODashboardLayout>
  );
};

export default Overview;
