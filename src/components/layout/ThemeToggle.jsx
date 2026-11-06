import { useTheme } from '../../hooks/useTheme'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme}>
      {isDark ? 'Світла тема' : 'Темна тема'}
    </button>
  )
}

export default ThemeToggle
