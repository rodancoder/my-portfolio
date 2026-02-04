import { createContext } from 'react'
import data from './data'

export const GlobalContext = createContext()

export const Provider = ({ children }) => {
  const contextValue = { data }
  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
}
