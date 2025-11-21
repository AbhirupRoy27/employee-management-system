import React from 'react'

function TitleField({ value, onChange }) {
  return (
    <>
      <label htmlFor="title" className="mb-2 font-bold">
        Task Title
      </label>
      <input
        id="title"
        name="title"
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Task Title"
        className="py-2 bg-white/10 focus:bg-gray-100/30 px-3 rounded outline-none cursor-pointer"
      />
    </>
  )
}

export default React.memo(TitleField)
