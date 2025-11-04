import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export default function UsercontextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <UserContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
