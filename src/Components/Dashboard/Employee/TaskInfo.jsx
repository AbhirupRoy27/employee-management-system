import { useTask } from '../../../Context/taskContext'

const taskInfo = [
  {
    text: 'Active task',
    bg_color: 'bg-[#2979FF]',
    text_color: 'text-[#FFFFFF]',
    shadow: 'shadow-white/20',
  },
  {
    text: 'Pending task',
    bg_color: 'bg-[#FFCA28]',
    text_color: 'text-[#1A1A1A]',
    shadow: 'shadow-white/15',
  },
  {
    text: 'Completed task',
    bg_color: 'bg-[#00C853]',
    text_color: 'text-[#FFFFFF]',
    shadow: 'shadow-white/20',
  },
  {
    text: 'Failed task',
    bg_color: 'bg-[#D32F2F]',
    text_color: 'text-[#FFFFFF]',
    shadow: 'shadow-white/20',
  },
]

function TaskInfo() {
  const { tasks, setFilterTask } = useTask()
  let activeCount = tasks.filter((t) => t.task_description === 'accepted')
  let PendingCount = tasks.filter((t) => t.task_description === 'pending')
  let CompletedCount = tasks.filter((t) => t.task_description === 'completed')
  let FailedCount = tasks.filter((t) => t.task_description === 'failed')

  return (
    <div
      id="emp-task"
      className="flex flex-wrap sm:flex-nowrap mx-2 sm:mx-15 pb-4 sm:py-4 sm:px-2 justify-between overflow-y-hidden sm:overflow-x-scroll "
    >
      {taskInfo.map((p, idx) => (
        <div
          className="sm:min-w-[220px] w-1/2 sm:w-1/4 shrink-0 hover:scale-102 transform transition-transform duration-250 ease-in-out"
          key={idx}
          onClick={() =>
            setFilterTask(
              p.text === 'Active task'
                ? activeCount
                : p.text === 'Pending task'
                ? PendingCount
                : p.text === 'Completed task'
                ? CompletedCount
                : p.text === 'Failed task' && FailedCount
            )
          }
        >
          <div
            className={`${p.bg_color}  sm:hover:shadow-lg ${p.shadow} m-1 sm:my-0 py-2 px-2 sm:px-4 min-h-24 flex flex-col justify-end rounded-2xl ${p.text_color} border-t-4 border-t-gray-300/50 hover:border-t-gray-100`}
          >
            <TasKCount
              text={p.text}
              activeCount={activeCount}
              PendingCount={PendingCount}
              CompletedCount={CompletedCount}
              FailedCount={FailedCount}
            />
            <h1 className="font-medium text-[16px] md:text-[18px] tracking-wide leading-none h-10 mt-2 uppercase">
              {p.text}
            </h1>
          </div>
        </div>
      ))}
    </div>
  )
}

const TasKCount = ({
  text,
  activeCount,
  PendingCount,
  CompletedCount,
  FailedCount,
}) => {
  return (
    <strong className=" font-(--font-poppins) text-[64px] md:text-[72px] leading-none">
      {text === 'Active task'
        ? `${activeCount.length}`
        : text === 'Pending task'
        ? `${PendingCount.length}`
        : text === 'Completed task'
        ? `${CompletedCount.length}`
        : text === 'Failed task' && `${FailedCount.length}`}
    </strong>
  )
}

export default TaskInfo
