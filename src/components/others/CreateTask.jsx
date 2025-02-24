
const CreateTask = () => {
  return (
    <div>
        <form className="flex items-center justify-around bg-[#03001C] p-10 m-10 rounded-xl">
          <div className="h-[269px] flex flex-col justify-between">
            {" "}
            <div>
              {" "}
              <h3>Task Title</h3>
              <input
                className="border rounded p-1 w-[300px]"
                type="text"
                placeholder="Develop a website"
              />
            </div>
            <div>
              {" "}
              <h3>Date</h3>
              <input
                className="border rounded p-1 w-[300px]"
                type="date"
                name=""
                id=""
              />
            </div>
            <div>
              {" "}
              <h3>Assign to</h3>
              <input
                className="border rounded p-1 w-[300px]"
                type="text"
                placeholder="Employee name"
              />
            </div>
            <div>
              {" "}
              <h3>Category</h3>
              <input
                className="border rounded p-1 w-[300px]"
                type="text"
                placeholder="Dev"
              />
            </div>
          </div>

          <div>
            {" "}
            <div>
              {" "}
              <h3>Description</h3>
              <textarea
                className="border rounded p-1 w-[400px] h-[200px]"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className="w-full bg-[#008170] rounded p-2">Create task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask