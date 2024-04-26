import DAODashboardLayout from "../../../layout/DAOdashboardLayout";
import Head from "./components/Head";
import PTable from "./components/PTable";

const Proposals = () => {
  return (
    <DAODashboardLayout>
      <Head />
      <PTable />
    </DAODashboardLayout>
  );
};

export default Proposals;
