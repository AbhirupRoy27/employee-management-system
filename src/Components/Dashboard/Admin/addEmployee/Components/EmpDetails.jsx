const fileds = [
  {
    id: 1,
    title: 'Employee Name',
    name: 'name',
    placeholder: 'John Doe',
  },
  {
    id: 2,
    title: 'Department',
    name: 'Department',
    placeholder: 'Development',
  },
  {
    id: 3,
    title: 'Date of Joining',
    name: 'doj',
    placeholder: 'mm-dd-yyyy',
  },
]

function EmpDetails() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello form sumbitted')
  }
  return (
    <div className="bg-green-50/10 px-4 py-2">
      <h1 className="text-2xl tracking-wider uppercase">
        Enter new Employee Details
      </h1>
      <form onSubmit={() => handleSubmit(event)} className="mt-4">
        <section className="flex flex-col-reverse lg:flex-row">
          <div className="lg:w-1/2 flex flex-col gap-2">
            {fileds.map((f) => (
              <div key={f.id} className="flex flex-col gap-1">
                <label>{f.title}</label>
                <input
                  placeholder={f.placeholder}
                  name={f.name}
                  className="py-2 bg-white/10 focus:bg-gray-100/30 px-3 rounded outline-none cursor-pointer"
                />
              </div>
            ))}
            <section className="flex justify-end mt-2">
              <button
                type="submit"
                className="bg-emerald-900 hover:bg-emerald-950 active:scale-98 rounded-md py-2 px-4 font-bold cursor-pointer uppercase"
              >
                Submit
              </button>
            </section>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/dfuhnqbap/image/upload/v1765556115/office-desk_zythts.png"
              alt="Employee Image"
            />
          </div>
        </section>
      </form>
    </div>
  )
}

export default EmpDetails
