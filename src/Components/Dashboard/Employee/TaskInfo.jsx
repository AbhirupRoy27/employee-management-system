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
  return (
    <div
      id="emp-task"
      className="flex flex-wrap sm:flex-nowrap mx-2 sm:mx-15 pb-4 sm:py-4 sm:px-2 justify-between overflow-y-hidden sm:overflow-x-scroll "
    >
      {taskInfo.map((p, idx) => (
        <div
          className="sm:min-w-[220px] w-1/2 sm:w-1/4 shrink-0 hover:scale-102 transform transition-transform duration-250 ease-in-out"
          key={idx}
        >
          <div
            className={`${p.bg_color}  sm:hover:shadow-lg ${p.shadow} m-1 sm:my-0 py-2 px-2 sm:px-4 min-h-24 flex flex-col justify-end rounded-2xl ${p.text_color} border-t-4 border-t-gray-300/50 hover:border-t-gray-100`}
          >
            <strong className=" font-(--font-poppins) text-[64px] md:text-[72px] leading-none">
              0
            </strong>
            <h1 className="font-medium font-(--font-poppins) text-[16px] md:text-[18px] tracking-wide leading-none h-10 mt-2 uppercase">
              {p.text}
            </h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskInfo
