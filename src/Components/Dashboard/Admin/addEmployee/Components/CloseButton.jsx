import { X } from 'lucide-react'

const CloseButton = () => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-gray-400 font-semibold tracking-wider uppercase">
        close
      </span>
      <X color="oklch(51.4% 0.222 16.935)" size={25} />
    </div>
  )
}

export default CloseButton
