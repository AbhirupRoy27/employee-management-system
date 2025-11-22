export default function handleEmpListClick(navigate, task) {
  // console.log(task)

  navigate(`task-details?task-id=${task._id || 0}`)
}
