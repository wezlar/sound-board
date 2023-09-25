import React, { createContext, useContext, useState } from 'react'

interface ShiftContextProps {
  isShiftPressed: boolean
  setIsShiftPressed: React.Dispatch<React.SetStateAction<boolean>>
}

const ShiftContext = createContext<ShiftContextProps | undefined>(undefined)

export const useShift = (): ShiftContextProps => {
  const context = useContext(ShiftContext)
  if (context == null) {
    throw new Error('useShift must be used within a ShiftProvider')
  }
  return context
}

interface ShiftProviderProps {
  children: React.ReactNode
}

export const ShiftProvider = ({ children }: ShiftProviderProps): JSX.Element => {
  const [isShiftPressed, setIsShiftPressed] = useState(false)
  return <ShiftContext.Provider value={{ isShiftPressed, setIsShiftPressed }}>{children}</ShiftContext.Provider>
}

export default { ShiftProvider, useShift }
