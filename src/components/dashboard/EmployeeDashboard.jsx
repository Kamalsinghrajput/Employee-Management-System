import TaskList from "../taskList/TaskList";
import TaskListNumbers from "../tasknumber/taskListNumbers";
import DashboardHeader from "./DashboardHeader";

const EmployeeDashboard = ({data}) => {
  console.log("employeeDashboard:",data);
  
  return (
    <div>
     <DashboardHeader firstName={data.firstName}/>
      <TaskListNumbers taskNumbers={data.taskNumbers}/>
      <TaskList tasks= {data.tasks}/>
    </div>
  );
};

export default EmployeeDashboard;
