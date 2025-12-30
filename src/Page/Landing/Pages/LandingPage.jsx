import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="text-white">
      <h1 className="text-4xl text-gray-500 text-center pt-6">
        This is a <b className="text-gray-300">EMS</b>
      </h1>
      <h3 className="text-center text-gray-100/60">
        (Employee Management System)
      </h3>
      <section className="bg-gray-50/20 mt-10 px-2 sm:px-6 lg:px-30">
        <div>
          <h2 className="text-4xl font-extralight py-4 border-b-2 border-white/10">
            Features
          </h2>
          <div className="py-4">
            <h2 className="text-2xl">Employee Login</h2>
            <p className="py-2">
              Route:{' '}
              <b className="text-blue-400">
                <Link to={'/login/emp'}>Employee Login Link</Link>
              </b>
            </p>
          </div>
          <div className="py-4">
            <h2 className="text-2xl">Admin Login</h2>
            <p className="py-2">
              Route:{' '}
              <b className="text-blue-400">
                <Link to={'/login/admin'}>Admin Login Link</Link>
              </b>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
