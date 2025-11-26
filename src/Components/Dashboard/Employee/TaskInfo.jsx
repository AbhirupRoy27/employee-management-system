import { useTask } from '../../../Context/taskContext'

const taskInfo = [
  {
    text: 'Active task',
    bg_options:
      'bg-[url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmt8ZW58MHx8MHx8fDA%3D)] bg-cover bg-center',
    text_color: 'text-black',
    shadow: 'shadow-white/15',
    bg_color: 'bg-gray-50/70',
  },
  {
    text: 'Pending task',
    bg_options:
      'bg-[url(https://images.unsplash.com/photo-1543269664-7eef42226a21?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHdvcmt8ZW58MHx8MHx8fDA%3D)] bg-cover bg-center',
    text_color: 'text-[#1A1A1A]',
    shadow: 'shadow-white/20',
    bg_color: 'bg-gray-50/70',
  },
  {
    text: 'Completed task',
    bg_options:
      'bg-[url(https://images.unsplash.com/photo-1611095973763-414019e72400?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHdvcmt8ZW58MHx8MHx8fDA%3D)] bg-cover bg-center',
    text_color: 'text-black',
    shadow: 'shadow-white/15',
    bg_color: 'bg-gray-50/70',
  },
  {
    text: 'Failed task',
    bg_options:
      'bg-[url(https://images.unsplash.com/photo-1623018035782-b269248df916?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhaWx8ZW58MHx8MHx8fDA%3D)] bg-cover bg-center',
    text_color: 'text-black',
    shadow: 'shadow-white/20',
    bg_color: 'bg-gray-50/70',
  },
]

function TaskInfo() {
  const { tasks } = useTask()
  let activeCount = tasks.filter((t) => t.task_status === 'accepted')
  let PendingCount = tasks.filter((t) => t.task_status === 'pending')
  let CompletedCount = tasks.filter((t) => t.task_status === 'completed')
  let FailedCount = tasks.filter((t) => t.task_status === 'failed')

  return (
    <div
      id="emp-task"
      className="flex flex-wrap sm:flex-nowrap mx-2 sm:mx-15 pb-4 sm:py-4 sm:px-2 justify-between overflow-y-hidden sm:overflow-x-scroll "
    >
      {taskInfo.map((p, idx) => (
        <div
          className="cursor-pointer active:cursor-progress sm:min-w-[220px] w-1/2 sm:w-1/4 shrink-0 hover:scale-102 transform transition-transform duration-250 ease-in-out"
          key={idx}
          // onClick={() =>
          //   setTask(
          //     p.text === 'Active task'
          //       ? activeCount
          //       : p.text === 'Pending task'
          //       ? PendingCount
          //       : p.text === 'Completed task'
          //       ? CompletedCount
          //       : p.text === 'Failed task' && FailedCount
          //   )
          // }
        >
          <div
            className={`${p.bg_options} sm:hover:shadow-md ${p.shadow} m-1 sm:my-0 min-h-24 rounded-2xl ${p.text_color} border-t-4 border-t-gray-300/50 hover:border-t-gray-100`}
          >
            <div className="min-w-full min-h-full backdrop-blur-[3px] rounded-xl py-2 px-2 sm:px-4 flex flex-col items-end justify-end gap-3">
              <TaskCount
                bg_color={p.bg_color}
                text={p.text}
                activeCount={activeCount}
                PendingCount={PendingCount}
                CompletedCount={CompletedCount}
                FailedCount={FailedCount}
              />
              <h1 className="text-white font-semibold text-[16px] md:text-[18px] tracking-widest leading-none h-8 uppercase">
                {p.text}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const TaskCount = ({
  bg_color,
  text,
  activeCount,
  PendingCount,
  CompletedCount,
  FailedCount,
}) => {
  return (
    <div
      className={`${bg_color} backdrop-blur w-16 h-16 md:w-22 md:h-22 rounded-full flex justify-center items-center`}
    >
      <strong className="font-(--font-poppins) text-[45px] md:text-[68px] leading-none mb-1">
        {text === 'Active task'
          ? `${activeCount.length}`
          : text === 'Pending task'
          ? `${PendingCount.length}`
          : text === 'Completed task'
          ? `${CompletedCount.length}`
          : text === 'Failed task' && `${FailedCount.length}`}
      </strong>
    </div>
  )
}

export default TaskInfo
