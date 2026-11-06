import { RouterProvider } from 'react-router'
import ThemeProvider from './context/ThemeProvider'
import UnitsProvider from './context/UnitsProvider'
import FiltersProvider from './context/FiltersProvider'
import { router } from './routes/router'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <UnitsProvider>
        <FiltersProvider>
          <RouterProvider router={router} />
        </FiltersProvider>
      </UnitsProvider>
    </ThemeProvider>
  )
}

export default App
