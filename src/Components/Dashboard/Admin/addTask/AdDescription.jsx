import React from 'react'

function AdDescription({ description, onDescriptionChange, isUpdating }) {
  return (
    <div className="flex justify-between flex-col w-full lg:w-1/2 lg:pl-4 gap-2 border-t-2 border-t-amber-50 lg:border-0 mt-4 lg:mt-0">
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="ml-1 font-bold mt-2 lg:mt-0">
          Description
        </label>
        <textarea
          id="description"
          name="task_description"
          value={description}
          rows={8}
          placeholder="Enter Description of task"
          className="bg-gray-700/20 focus:bg-gray-700/10 rounded-md outline-none px-3 py-2 text-gray-200 cursor-pointer"
          onChange={onDescriptionChange}
        />
      </div>
      <button
        type="submit"
        className="bg-emerald-900 hover:bg-emerald-950 active:scale-98 rounded-md py-2 font-bold cursor-pointer uppercase"
      >
        {isUpdating ? 'Adding Task to employee' : 'Add Task'}
      </button>
    </div>
  )
}

export default React.memo(AdDescription)
