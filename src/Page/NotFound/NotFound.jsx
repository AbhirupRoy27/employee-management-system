import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  useEffect(() => {
    const pupils = document.querySelectorAll('.eye__pupil')

    const moveEyes = () => {
      pupils.forEach((pupil) => {
        const x = 10 * Math.cos(Date.now() / 500 + Math.random())
        const y = 10 * Math.sin(Date.now() / 500 + Math.random())
        pupil.style.transform = `translate(${x}px, ${y}px)`
      })
    }

    const interval = setInterval(moveEyes, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="flex min-h-screen min-w-screen items-center justify-center bg-[#050505] text-white">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* 👀 Eyes */}
        <div className="flex justify-center gap-3">
          <div className="eye w-20 h-20 bg-yellow-400 rounded-full grid place-items-center">
            <div className="eye__pupil w-8 h-8 bg-black rounded-full"></div>
          </div>
          <div className="eye w-20 h-20 bg-yellow-400 rounded-full grid place-items-center">
            <div className="eye__pupil w-8 h-8 bg-black rounded-full"></div>
          </div>
        </div>

        {/* 🧾 Heading */}
        <div className="error-page__heading">
          <h1 className="text-yellow-400 text-2xl sm:text-4xl font-semibold capitalize font-mono">
            Looks like you're lost
          </h1>
          <p className="mt-3 text-lg sm:text-2xl font-light font-mono">
            404 error
          </p>
        </div>

        {/* 🔙 Button */}
        <Link
          to="/"
          className="cursor-pointer font-mono text-white border border-yellow-400 px-6 py-3 rounded-xl text-lg font-light shadow-[0px_7px_0px_-2px_#faca2e] hover:shadow-none hover:bg-yellow-400 hover:text-black transition-all duration-300"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}

export default ErrorPage
