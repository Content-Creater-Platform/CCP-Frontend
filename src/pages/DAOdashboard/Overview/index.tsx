import Head from "./components/Head";
import DAODashboardLayout from "../../../layout/DAOdashboardLayout";
import CardComponent from "./components/CardComponent";

const Overview = () => {
  return (
    <DAODashboardLayout>
      <Head />
      <CardComponent />
    </DAODashboardLayout>
  );
};

export default Overview;
