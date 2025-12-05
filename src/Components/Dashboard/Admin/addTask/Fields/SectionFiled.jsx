import React from 'react'

function SectionFiled({ value, onChange }) {
  return (
    <div className="flex justify-between items-center mt-3 ">
      <label htmlFor="category" className="ml-1 font-bold">
        Category
      </label>
      <select
        id="category"
        className="w-1/2 bg-gray-200/50 py-2 text-gray-950 font-bold rounded-md px-3 outline-none cursor-pointer"
        name="task_category"
        value={value}
        onChange={onChange}
      >
        <option>Select</option>
        <option>Development</option>
        <option>Design</option>
        <option>Q&A</option>
        <option>Meating</option>
      </select>
    </div>
  )
}

export default React.memo(SectionFiled)
