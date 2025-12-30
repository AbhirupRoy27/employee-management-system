function TaskInfoLoader() {
  return (
    <div
      id="emp-task"
      className="flex flex-wrap sm:flex-nowrap mx-2 sm:mx-15 pb-4 sm:py-4 sm:px-2 justify-between overflow-y-hidden sm:overflow-x-scroll "
    >
      {[{}, {}, {}, {}].map((p, idx) => (
        <div
          className="cursor-pointer sm:min-w-[220px] w-1/2 sm:w-1/4 shrink-0 hover:scale-102 transform transition-transform duration-250 ease-in-out"
          key={idx}
        >
          <div
            className={`bg-white/10  sm:hover:shadow-md m-1 sm:my-0 min-h-24 rounded-2xl border-t-4 border-t-gray-300/50 hover:border-t-gray-100`}
          >
            <div className="min-w-full min-h-full backdrop-blur-[3px] rounded-xl py-2 px-2 sm:px-4 flex flex-col items-end justify-end gap-3">
              <h1 className="text-white font-semibold text-[16px] md:text-[18px] tracking-widest leading-none h-8 uppercase">
                {'Loading'}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskInfoLoader
