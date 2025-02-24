import TaskList from "../taskList/TaskList";
import TaskListNumbers from "../tasknumber/taskListNumbers";
import DashboardHeader from "./DashboardHeader";

const EmployeeDashboard = () => {
  return (
    <div>
     <DashboardHeader/>
      <TaskListNumbers/>
      <TaskList/>
    </div>
  );
};

export default EmployeeDashboard;
