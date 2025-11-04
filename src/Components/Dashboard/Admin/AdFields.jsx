import { handleInput } from '../../../Utils/Admin/handleAdminForm'

function AdFields({ adminFormData, setAdminFormData }) {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-between">
      <label htmlFor="title" className="mb-2 font-bold">
        Task Title
      </label>
      <input
        id="title"
        name="title"
        value={adminFormData.title}
        onChange={(e) => handleInput(e, setAdminFormData)}
        type="text"
        placeholder="Task Title"
        className="py-2 bg-white/10 focus:bg-gray-100/30 px-3 rounded outline-none cursor-pointer"
      />
      <label htmlFor="date" className="my-2 font-bold">
        Date
      </label>
      <input
        id="date"
        name="date"
        value={adminFormData.date}
        onChange={(e) => handleInput(e, setAdminFormData)}
        type="date"
        className="py-2 bg-white/10 focus:bg-gray-100/30 px-3 rounded outline-none cursor-pointer"
      />
      <label htmlFor="email" className="my-2 font-bold">
        Employee Email
      </label>
      <input
        id="email"
        name="email"
        value={adminFormData.email}
        onChange={(e) => handleInput(e, setAdminFormData)}
        type="email"
        placeholder="Enter Employee Email"
        className="py-2 bg-white/10 focus:bg-gray-100/30 outline-none rounded px-3 cursor-pointer"
      />
      <div className="flex justify-between items-center mt-3 ">
        <label htmlFor="category" className="ml-1 font-bold">
          Category
        </label>
        <select
          id="category"
          className="w-1/2 bg-gray-200/50 py-2 text-gray-950 font-bold rounded-md px-3 outline-none cursor-pointer"
          name="category"
          value={adminFormData.category}
          onChange={(e) => handleInput(e, setAdminFormData)}
        >
          <option>Select</option>
          <option>Development</option>
          <option>Design</option>
          <option>Q&A</option>
          <option>Meating</option>
        </select>
      </div>
    </div>
  )
}

export default AdFields
