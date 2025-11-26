import React from 'react'
// import { useTask } from '../../../Context/taskContext'

function SuccessRate({ count }) {
  let failRate = 0

  if (count.length > 0) {
    const failTasks = count.filter((t) => t.task_status === 'failed')
    // console.log(failTasks.length / count.length)
    failRate = Math.ceil((failTasks.length / count.length) * 100)
    return (
      <>
        {/* {true && ( */}
        <div className="cursor-alias backdrop-blur bg-green-400/10 py-2 px-4 rounded-xl border border-gray-50/30">
          <p title="Success rate" className="flex items-center gap-4">
            S/R: <b className="text-3xl">{100 - failRate || 0}%</b>
          </p>
        </div>
        {/* )} */}
      </>
    )
  }
}

export default React.memo(SuccessRate)
