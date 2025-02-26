

const NewTask = () => {
  return (
    <div className="w-[320px] h-full bg-red-400 rounded-2xl ml-3 shrink-0">
    <div className="flex justify-between px-5 pt-5 ">
      <h3 className="bg-red-700 px-3 rounded">High</h3>
      <h3 className="bg-[#008170] px-3 rounded">21 feb 2025</h3>
    </div>
    <div>
      <h2 className="text-2xl px-5 font-semibold">Learn React </h2>
      <p className="px-5 overflow-y-auto max-h-[180px]">
      hi 
      </p>
      <div className="flex justify-between mt-2 " > 
        <button className="bg-green-500 py-1 px-3 text-sm m-2 rounded">Accept task</button>
    </div>
    </div>
  </div>
  )
}

export default NewTask
