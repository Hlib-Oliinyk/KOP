import { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '../store/settingsSlice'

export function useDocumentTheme() {
  const theme = useSelector(selectTheme)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
}
