const TaskListNumbers = ({ taskNumbers }) => {
  console.log(taskNumbers);
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 mx-3">
      <div className="bg-[#D84040] rounded-2xl p-3 text-white">
        <h3>{taskNumbers?.active || 0}</h3>
        <h4>New task</h4>
      </div>
      <div className="bg-[#3674B5] rounded-2xl p-3 text-white">
        <h3>{taskNumbers?.completed || 0}</h3>
        <h4>Completed task</h4>
      </div>
      <div className="bg-[#FFB200] rounded-2xl p-3 text-white">
        <h3>{taskNumbers?.accepted || 0}</h3>
        <h4>Accepted task</h4>
      </div>
      <div className="bg-[#00879E] rounded-2xl p-3 text-white">
        <h3>{taskNumbers?.failed || 0}</h3>
        <h4>Failed task</h4>
      </div>
    </div>
  );
};

export default TaskListNumbers;
