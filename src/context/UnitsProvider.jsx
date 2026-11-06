import { useState } from 'react'
import { UnitsContext } from './UnitsContext'

function UnitsProvider({ children }) {
  const [isNormal, setIsNormal] = useState(true)

  return <UnitsContext value={{ isNormal, setIsNormal }}>{children}</UnitsContext>
}

export default UnitsProvider
