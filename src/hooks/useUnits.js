import { useContext } from 'react'
import { UnitsContext } from '../context/UnitsContext'

export function useUnits() {
  const context = useContext(UnitsContext)
  if (!context) throw new Error('useUnits потрібно викликати всередині UnitsProvider')
  return context
}
