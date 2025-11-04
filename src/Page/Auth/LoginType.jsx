function LoginType(props) {
  return (
    <div className="flex bg-gray-100 rounded-full w-max">
      <h3
        className={`w-1/2 flex items-center justify-center font-bold transform transition-colors duration-600 ${
          props.isAdmin ? 'text-emerald-700' : 'bg-gray-300 text-black'
        } text-sm cursor-pointer active:scale-101 py-3 px-6 rounded-full`}
        onClick={() => props.setIsAdmin(false)}
      >
        Admin Login
      </h3>
      <h3
        className={`w-1/2 flex items-center justify-center font-bold text-sm cursor-pointer active:scale-101 py-3 px-6 rounded-full text-nowrap ${
          props.isAdmin ? 'bg-gray-300 text-black' : 'text-emerald-700'
        }`}
        onClick={() => props.setIsAdmin(true)}
      >
        Employee Login
      </h3>
    </div>
  )
}

export default LoginType
