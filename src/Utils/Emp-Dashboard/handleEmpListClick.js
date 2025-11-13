export default function handleEmpListClick(navigate, task, setTaskDetails) {
  setTaskDetails(task)

  // console.log(taskDetails)
  navigate(`task-details?task-id=${task.task_id}`)
}
