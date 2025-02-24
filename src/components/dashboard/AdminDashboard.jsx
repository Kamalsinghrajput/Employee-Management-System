import Alltask from "../others/Alltask";
import CreateTask from "../others/CreateTask";
import DashboardHeader from "./DashboardHeader";

const AdminDashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <CreateTask/>
      <Alltask/>
    </div>
  );
};

export default AdminDashboard;
