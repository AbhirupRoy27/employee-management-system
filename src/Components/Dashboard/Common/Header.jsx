// import { useNavigate } from 'react-router-dom'
import { useTask } from '../../../Context/taskContext'
import { useUserContext } from '../../../Context/Usercontext'
import { CircleUser } from 'lucide-react'

function Header(props) {
  const { isAdmin } = useUserContext()
  const { tasks } = useTask()
  const failTasks = tasks.filter((t) => t.task_description === 'failed')
  const failRate = Math.floor((failTasks.length / tasks.length) * 100)

  return (
    <div className="flex py-5 px-4 sm:py-10 sm:px-15 justify-between items-center min-w-[354px]">
      <div className="text-white flex items-start lg:items-center gap-4 flex-col lg:flex-row">
        <div className="flex gap-2 items-center">
          <CircleUser size={76} strokeWidth={1.35} />
          <div>
            <h2 className="text-2xl font-light tracking-widest">Hi,</h2>
            <h1 className="text-3xl tracking-wider font-semibold">Abhirup </h1>
          </div>
        </div>
        {isAdmin && (
          <div className="bg-green-500/20 py-2 px-4 rounded-xl border border-gray-50/30">
            <p title="Success rate" className="flex items-center gap-4">
              S/R: <b className="text-3xl">{100 - failRate || 0}%</b>
            </p>
          </div>
        )}
      </div>
      <button
        className="bg-red-700 hover:bg-red-800 px-4 py-1.5 sm:px-8 sm:py-3 h-max rounded font-bold tracking-wider active:scale-102 text-white"
        onClick={() => {
          if (!isAdmin) {
            props.setIsActive(true)
          } else {
            props.setIsActive(true)
          }
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Header
