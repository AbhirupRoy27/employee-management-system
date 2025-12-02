// import React, { useEffect, useState } from 'react'
import React from 'react'
import { useFilterTask } from '../../../Context/filterTaskContext'
import taskInfo from '../../../DB/taskInfo.json'
import getTasksByFilter from '../../../Utils/getTasks/getTasksByFilter'
import TaskInfoLoader from './TaskView/Components/TaskInfoLoader'
import { useTaskCount } from '../../../Context/taskCountContext'
// import getTaskCounts from '../../../Utils/getTasks/getTaskCounts'

function TaskInfo() {
  const { setFilteredTask } = useFilterTask()
  const { taskCounts } = useTaskCount()
  // console.log(taskCounts)

  if (taskCounts.length < 1) {
    return <TaskInfoLoader />
  }

  return (
    <div
      id="emp-task"
      className="flex flex-wrap sm:flex-nowrap mx-2 sm:mx-15 pb-4 sm:py-4 sm:px-2 justify-between overflow-y-hidden sm:overflow-x-scroll "
    >
      {taskInfo.map((p, idx) => (
        <div
          className="cursor-pointer active:cursor-progress sm:min-w-[220px] w-1/2 sm:w-1/4 shrink-0 hover:scale-98 transform transition-transform duration-250 ease-in-out"
          key={idx}
          onClick={() =>
            // setFilteredTask(
            p.text === 'Active task'
              ? getTasksByFilter(setFilteredTask, 'accepted')
              : p.text === 'Pending task'
              ? getTasksByFilter(setFilteredTask, 'pending')
              : p.text === 'Completed task'
              ? getTasksByFilter(setFilteredTask, 'completed')
              : p.text === 'Failed task' &&
                getTasksByFilter(setFilteredTask, 'failed')
          }
        >
          <div
            className={`${p.bg_options} sm:hover:shadow-md ${p.shadow} m-1 sm:my-0 min-h-24 rounded-2xl ${p.text_color} border-t-4 border-t-gray-300/50 hover:border-t-gray-100`}
          >
            <div className="min-w-full min-h-full backdrop-blur-[3px] rounded-xl py-2 px-2 sm:px-4 flex flex-col items-end justify-end gap-3">
              <TaskCount
                bg_color={p.bg_color}
                text={p.text}
                activeCount={taskCounts[0].count}
                PendingCount={taskCounts[1].count}
                CompletedCount={taskCounts[2].count}
                FailedCount={taskCounts[3]?.count || 0}
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
          ? `${activeCount}`
          : text === 'Pending task'
          ? `${PendingCount}`
          : text === 'Completed task'
          ? `${CompletedCount}`
          : `${FailedCount}`}
      </strong>
    </div>
  )
}

export default React.memo(TaskInfo)
