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

  const onTitleChange = useCallback((e) => handleInput(e, setAdminFormData), [])
  const onDateChange = useCallback((e) => handleInput(e, setAdminFormData), [])
  const onEmailChange = useCallback((e) => handleInput(e, setAdminFormData), [])
  const onCategoryChange = useCallback(
    (e) => handleInput(e, setAdminFormData),
    []
  )
  const onDescriptionChange = useCallback(
    (e) => handleInput(e, setAdminFormData),
    []
  )

  return (
    <div className="bg-[#161515e3] mx-4 sm:mx-15 px-4 py-3 text-white rounded-md tracking-widest">
      <form
        className="flex flex-col lg:flex-row"
        onSubmit={(e) => handleAdminForm(e, adminFormData, setAdminFormData)}
      >
        <AdFields
          title={adminFormData.title}
          date={adminFormData.date}
          email={adminFormData.email}
          category={adminFormData.category}
          onTitleChange={onTitleChange}
          onDateChange={onDateChange}
          onEmailChange={onEmailChange}
          onCategoryChange={onCategoryChange}
        />
        <AdDescription
          description={adminFormData.description}
          onDescriptionChange={onDescriptionChange}
        />
      </form>
    </div>
  )
}

export default AdminForm
