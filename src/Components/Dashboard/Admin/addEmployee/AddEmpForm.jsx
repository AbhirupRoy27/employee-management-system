import React, { useState } from 'react'
import CloseButton from './Components/CloseButton'
import EmpDetails from './Components/EmpDetails'

function AddEmpForm() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="mx-4 sm:mx-15  py-3 text-gray-50 mt-5">
      <button
        className="bg-gray-50/10 hover:bg-gray-50/15 py-2 px-4 rounded border border-gray-50/40 transition-colors duration-300 ease-in-out cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CloseButton /> : 'Add New Employeee'}
      </button>
      {isOpen && <EmpDetails />}
    </div>
  )
}

export default React.memo(AddEmpForm)
