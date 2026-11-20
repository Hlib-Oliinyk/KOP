import { useDispatch, useSelector } from 'react-redux'
import { selectTheme, toggleTheme } from '../../store/settingsSlice'

function ThemeToggle() {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()
  const isDark = theme === 'dark'

  return (
    <button type="button" className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
      {isDark ? 'Світла тема' : 'Темна тема'}
    </button>
  )
}

export default ThemeToggle
