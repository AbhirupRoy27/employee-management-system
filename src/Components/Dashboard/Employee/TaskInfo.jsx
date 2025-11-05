function TaskInfo() {
  return (
    <div
      id="emp-task"
      className="flex flex-wrap sm:flex-nowrap mx-4 sm:mx-15 sm:p-2 justify-between overflow-y-hidden sm:overflow-x-scroll"
    >
      <div className="sm:min-w-[200px] w-1/2 sm:w-1/4 shrink-0">
        <div className="bg-red-300 m-1 sm:my-0 p-1 min-h-24 flex flex-col justify-end rounded-lg">
          <strong className="text-5xl sm:text-7xl">0</strong>
          <h1 className="text-xl sm:text-2xl font-semibold leading-none h-10 sm:mt-2">
            Active task
          </h1>
        </div>
      </div>
      <div className="sm:min-w-[200px] w-1/2 sm:w-1/4 shrink-0">
        <div className="bg-red-400 m-1 sm:my-0 p-1 min-h-24 flex flex-col justify-end rounded-lg">
          <strong className="text-5xl sm:text-7xl">0</strong>
          <h1 className="text-xl sm:text-2xl font-semibold leading-none h-10 sm:mt-2">
            Pending task
          </h1>
        </div>
      </div>
      <div className="sm:min-w-[200px] w-1/2 sm:w-1/4 shrink-0">
        <div className="bg-red-600 m-1 sm:my-0 p-1 min-h-24 flex flex-col justify-end rounded-lg">
          <strong className="text-5xl sm:text-7xl">0</strong>
          <h1 className="text-xl sm:text-2xl font-semibold leading-none h-10 sm:mt-2">
            Completed task
          </h1>
        </div>
      </div>
      <div className="sm:min-w-[200px] w-1/2 sm:w-1/4 shrink-0">
        <div className="bg-red-900 m-1 sm:my-0 p-1 min-h-24 flex flex-col justify-end rounded-lg">
          <strong className="text-5xl sm:text-7xl">0</strong>
          <h1 className="text-xl sm:text-2xl font-semibold leading-none h-10 sm:mt-2">
            Failed task
          </h1>
        </div>
      </div>
    </div>
  )
}

export default TaskInfo
