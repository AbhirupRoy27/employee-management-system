function EmpDetails() {
  return (
    <div>
      <h1>Enter new Emp Details</h1>
      <form onSubmit={console.log('hello form sumbitted')}>
        <input placeholder="Enter Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EmpDetails
