const DashboardHeader = ({ firstName }) => {

  return (
    <header className="flex justify-between items-center p-5 bg-[#03001C] text-white">
      <div className="text-xl">
        Hi, <span className="text-2xl">{firstName || "User"} ✌️</span>
      </div>
      <button className="bg-[#008170] text-white rounded-2xl px-4 py-2 hover:bg-[#006f5a] transition-all cursor-pointer">
        Log Out
      </button>
    </header>
  );
};

export default DashboardHeader;
