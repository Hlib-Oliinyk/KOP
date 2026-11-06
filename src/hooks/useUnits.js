import { useContext } from 'react'
import { UnitsContext } from '../context/UnitsContext'

export function useUnits() {
  return useContext(UnitsContext)
}
