import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({tasks}) => {
  return (
    <div
      id="taskList"
      className="h-[400px] w-full mt-10 py-10 flex items-center flex-nowrap overflow-x-auto"
    >
      <AcceptTask/>
      <NewTask/>
     <CompleteTask/>
     <FailedTask/>
      
    </div>
  );
};

export default TaskList;
