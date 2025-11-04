import React, { useState } from 'react'
import handleAdminForm from '../../../Utils/Admin/handleAdminForm'
import AdDescription from './AdDescription'
import AdFields from './AdFields'

function AdminForm() {
  const [adminFormData, setAdminFormData] = useState({
    title: '',
    date: '',
    description: '',
    email: '',
    category: 'Select',
  })
  return (
    <div className="bg-[#161515e3] mx-4 sm:mx-15 px-4 py-3 text-white rounded-md tracking-widest">
      <form
        className="flex flex-col lg:flex-row"
        onSubmit={(e) => handleAdminForm(e, adminFormData, setAdminFormData)}
      >
        <AdFields
          adminFormData={adminFormData}
          setAdminFormData={setAdminFormData}
        />
        <AdDescription
          adminFormData={adminFormData}
          setAdminFormData={setAdminFormData}
        />
      </form>
    </div>
  )
}

export default AdminForm
