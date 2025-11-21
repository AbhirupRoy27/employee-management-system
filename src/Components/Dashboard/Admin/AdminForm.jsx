import { useCallback, useState } from 'react'
import handleAdminForm, {
  handleInput,
} from '../../../Utils/Admin/handleAdminForm'
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

  const onFieldChange = useCallback(
    (e) => handleInput(e, setAdminFormData),
    [setAdminFormData]
  )

  const onSubmit = useCallback(
    (e) => handleAdminForm(e, adminFormData, setAdminFormData),
    [adminFormData]
  )

  return (
    <div className="bg-[#161515e3] mx-4 sm:mx-15 px-4 py-3 text-white rounded-md tracking-widest">
      <form className="flex flex-col lg:flex-row" onSubmit={onSubmit}>
        <AdFields
          title={adminFormData.title}
          date={adminFormData.date}
          email={adminFormData.email}
          category={adminFormData.category}
          onChange={onFieldChange}
        />
        <AdDescription
          description={adminFormData.description}
          onDescriptionChange={onFieldChange}
        />
      </form>
    </div>
  )
}

export default AdminForm
