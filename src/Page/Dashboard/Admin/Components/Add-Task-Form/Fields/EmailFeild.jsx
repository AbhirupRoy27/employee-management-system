import React from 'react'

function EmailFeild({ value, onChange }) {
  return (
    <>
      <label htmlFor="email" className="my-2 font-bold">
        Employee Email
      </label>
      <input
        id="email"
        name="task_for"
        value={value}
        onChange={onChange}
        type="email"
        placeholder="Enter Employee Email"
        className="py-2 bg-white/10 focus:bg-gray-100/30 outline-none rounded px-3 cursor-pointer"
      />
    </>
  )
}

export default React.memo(EmailFeild)
