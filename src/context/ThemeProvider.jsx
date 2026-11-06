import { useLayoutEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const STORAGE_KEY = 'theme'

function getInitialTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY)
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'))

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}

export default ThemeProvider
