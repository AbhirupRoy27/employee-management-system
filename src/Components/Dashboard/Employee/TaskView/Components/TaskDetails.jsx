import { User } from 'lucide-react'

function TaskDetails() {
  return (
    <div className="py-6 px-2 sm:px-4 text-gray-900 flex flex-col w-full ">
      <div className="flex lg:justify-between lg:items-center gap-2 flex-col lg:flex-row">
        <div className="">
          <p className="text-xl text-pretty">
            Task TitleTask TitleTask TitleTask TitleTask TitleTask TitleTask
            TitleTask Title
          </p>
        </div>
        <p>Task Date: -- -- ----</p>
      </div>
      <div className="flex gap-2 my-4">
        <div className="w-16 sm:w-14 h-14 bg-gray-500/15 rounded-full flex justify-center items-center">
          <User size={43} strokeWidth={1} />
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-xl tracking-wide">Admin Name</p>
            <p className="text-md text-gray-500">admin Email</p>
          </div>
          <button className="py-2 px-4 bg-green-700  hover:bg-green-800 text-white rounded-lg active:scale-105 trasform transition-all duration-200 ease-in-out">
            Mark Done
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="my-2">
          <p> Task Details</p>
          <p> Task Details</p>
          <p> Task Details</p>
          <p> Task Details</p>
          <p> Task Details</p>
          <p> Task Details</p>
          <p> Task Details</p>
          <p> Task Details</p>

          <p> Task Details</p>
          <p> Task Details</p>
          <p> Task Details</p>
          <p> Task Details</p>
          <p> Task Details</p>
          <p> Task Details</p>
          <p> Task Details</p>
        </div>
      </div>
    </div>
  )
}

export default TaskDetails
