import axios from 'axios'

const getTastById = async (id, setTask) => {
  const response = await axios.post(
    'http://localhost:3000/api/employee/get-task-byId',
    { _id: id }
  )
  // console.log()
  return setTask([response.data.data])
}

export default getTastById
