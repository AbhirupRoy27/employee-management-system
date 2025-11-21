import React from 'react'

function DateFiled({ value, onChange }) {
  return (
    <>
      <label htmlFor="date" className="my-2 font-bold">
        Date
      </label>
      <input
        id="date"
        name="deadline"
        value={value}
        onChange={onChange}
        type="date"
        className="py-2 bg-white/10 focus:bg-gray-100/30 px-3 rounded outline-none cursor-pointer"
      />
    </>
  )
}

export default React.memo(DateFiled)
