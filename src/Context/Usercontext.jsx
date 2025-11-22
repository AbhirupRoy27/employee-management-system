/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export default function UsercontextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(true)
  return (
    <UserContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
