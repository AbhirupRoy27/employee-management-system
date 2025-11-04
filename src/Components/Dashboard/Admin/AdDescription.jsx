import { handleInput } from '../../../Utils/Admin/handleAdminForm'

function AdDescription({ adminFormData, setAdminFormData }) {
  return (
    <div className="flex flex-col w-full lg:w-1/2 lg:px-4 gap-2 border-t-2 border-t-amber-50 lg:border-0 mt-4 lg:mt-0">
      <label htmlFor="description" className="ml-1 font-bold mt-2 lg:mt-0">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        value={adminFormData.description}
        rows={6}
        placeholder="Enter Description of task"
        className="bg-gray-700/20 focus:bg-gray-700/10 rounded-md outline-none px-3 py-2 text-gray-200 cursor-pointer"
        onChange={(e) => handleInput(e, setAdminFormData)}
      />
      <button
        type="submit"
        className="bg-emerald-900 hover:bg-emerald-950 active:scale-98 rounded-md py-2 font-bold cursor-pointer"
      >
        Add Task
      </button>
    </div>
  )
}

export default AdDescription
