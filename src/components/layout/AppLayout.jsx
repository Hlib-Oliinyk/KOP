import { Link, Outlet, ScrollRestoration } from 'react-router'
import ThemeToggle from './ThemeToggle'
import { HOME_PATH } from '../../routes/paths'

function AppLayout() {
  return (
    <>
      <header className="app-header">
        <Link to={HOME_PATH} className="app-brand">
          Pokemon Dashboard
        </Link>
        <ThemeToggle />
      </header>

      <main>
        <Outlet />
      </main>

      <ScrollRestoration />
    </>
  )
}

export default AppLayout
