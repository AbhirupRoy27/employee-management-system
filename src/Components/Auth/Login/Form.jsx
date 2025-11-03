import React, { useState } from 'react'

function Form() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      user_email: email,
      password: pass,
    })
    setEmail('')
    setPass('')
  }
  return (
    <div className="w-full sm:w-[80%] lg:w-[60%] flex flex-col">
      <form onSubmit={(e) => handleSubmit(e)} className="">
        <div className="flex flex-col gap-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="outline-none bg-gray-50 rounded-full w-full  px-6 py-2 text-black placeholder:text-gray-400"
          />
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            type="password"
            className="outline-none bg-gray-50 rounded-full w-full  px-6 py-2 text-black placeholder:text-gray-400"
          />
        </div>
        <div className="flex justify-between items-center mt-2 px-4">
          <span className="flex gap-2">
            <input type="checkbox" />
            <h4>Remember Me</h4>
          </span>
          <h3 className="text-red-600">Forgot Password</h3>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            type="submit"
            className="bg-emerald-800 px-8 py-4 rounded-full"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
