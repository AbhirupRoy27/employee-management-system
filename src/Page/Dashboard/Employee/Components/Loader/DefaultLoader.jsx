import { Loader } from 'lucide-react'

function DefaultLoader() {
  return (
    <div className="flex justify-center items-center h-[75vh] bg-gray-50/10">
      <h1 className="flex gap-2 items-center text-3xl text-gray-50/40 tracking-widest font-mono font-semibold">
        <Loader size={40} />
        Loading...
      </h1>
    </div>
  )
}

export default DefaultLoader
