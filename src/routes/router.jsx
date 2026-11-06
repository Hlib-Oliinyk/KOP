import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import AppLayout from '../components/layout/AppLayout'
import DashboardPage from '../pages/DashboardPage'
import PokemonPage from '../pages/PokemonPage'
import NotFoundPage from '../pages/NotFoundPage'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<DashboardPage />} />
      <Route path="pokemon/:id" element={<PokemonPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
)
