import { useCallback, useState } from 'react'
import handleAdminForm, {
  handleInput,
} from '../../../Utils/Admin/handleAdminForm'
import AdDescription from './AdDescription'
import AdFields from './AdFields'

function AdminForm() {
  const [adminFormData, setAdminFormData] = useState({
    task_title: '',
    deadline: '',
    task_description: '',
    task_for: '',
    task_category: 'Select',
    task_status: 'pending',
    task_given_by: 'abhirup605roy@gmail.com',
  })
  const [isUpdating, setIsUpdating] = useState(false)

  const onFieldChange = useCallback(
    (e) => handleInput(e, setAdminFormData),
    [setAdminFormData]
  )

  const onSubmit = useCallback(
    (e) => handleAdminForm(e, adminFormData, setAdminFormData, setIsUpdating),
    [adminFormData]
  )
  // console.log(adminFormData)

  return (
    <div className="bg-[#161515e3] mx-4 sm:mx-15 px-4 py-3 text-white rounded-md tracking-widest">
      <form className="flex flex-col lg:flex-row" onSubmit={onSubmit}>
        <AdFields
          title={adminFormData.task_title}
          date={adminFormData.deadline}
          email={adminFormData.task_for}
          category={adminFormData.task_category}
          onChange={onFieldChange}
        />
        <AdDescription
          description={adminFormData.task_description}
          onDescriptionChange={onFieldChange}
          isUpdating={isUpdating}
        />
      </form>
    </div>
  )
}

export default AdminForm
