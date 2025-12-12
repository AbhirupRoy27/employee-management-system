import React from 'react'
import { useTask } from '../../../Context/taskContext'

function SuccessRate() {
  const { tasks } = useTask()
  const taskCount = tasks
  let failRate = 0

  if (taskCount.length > 0) {
    const failTasks = taskCount.filter((t) => t.task_status === 'failed')
    // console.log(failTasks.length / count.length)
    failRate = Math.ceil((failTasks.length / taskCount.length) * 100)
    return (
      <div className="px-4 pb-4 sm:px-15 text-gray-50">
        <div className="cursor-alias  bg-green-400/10 py-2 px-4 rounded-xl border border-gray-50/30 w-fit">
          <p title="Success rate" className="flex items-center gap-4">
            S/R: <b className="text-3xl">{100 - failRate || 0}%</b>
          </p>
        </div>
      </div>
    )
  }
}

export default React.memo(SuccessRate)
