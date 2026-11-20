import { useSelector } from 'react-redux'
import { useDebounce } from '../hooks/useDebounce'
import { selectFilters } from '../store/filtersSlice'
import { useGetPokemonsQuery } from '../store/pokeApi'
import { getUniqueTypes } from '../utils/pokemonStats'
import Counter from '../components/Counter'
import Toggle from '../components/Toggle'
import PokemonFilters from '../components/filters/PokemonFilters'
import FavoritesPanel from '../components/favorites/FavoritesPanel'
import PokemonKpis from '../components/kpi/PokemonKpis'
import PokemonCharts from '../components/charts/PokemonCharts'
import PokemonTable from '../components/table/PokemonTable'
import FilteredList from '../components/list/FilteredList'
import LoadingState from '../components/status/LoadingState'
import ErrorState from '../components/status/ErrorState'
import EmptyState from '../components/status/EmptyState'

const FILTERS_DEBOUNCE_MS = 400

function DashboardPage() {
  const filters = useSelector(selectFilters)
  const debouncedFilters = useDebounce(filters, FILTERS_DEBOUNCE_MS)
  const { data, isFetching, isError, error, refetch } = useGetPokemonsQuery(debouncedFilters)

  const pokemons = isError ? undefined : data
  const hasData = Boolean(pokemons?.length)
  const isUpdating = isFetching || filters !== debouncedFilters
  const resultsClassName = isUpdating ? 'results results--updating' : 'results'

  const renderStatus = () => {
    if (isError) return <ErrorState message={error.message} onRetry={refetch} />
    if (isFetching && !hasData) return <LoadingState />
    if (!hasData) return <EmptyState message="Нічого не знайдено за цими фільтрами" />
    return null
  }

  return (
    <div className="dashboard">
      <title>Pokemon Dashboard</title>
      <h1 className="page-title">Покемони</h1>

      {hasData && (
        <div className={resultsClassName} aria-busy={isUpdating}>
          <PokemonKpis pokemons={pokemons} />
        </div>
      )}

      <section className="widgets-row">
        <Counter />
        <Toggle />
      </section>

      <PokemonFilters />
      <FavoritesPanel />

      {renderStatus()}
      {hasData && (
        <div className={resultsClassName} aria-busy={isUpdating}>
          <section className="dashboard-section">
            <PokemonCharts pokemons={pokemons} />
          </section>
          <section className="dashboard-section">
            <PokemonTable pokemons={pokemons} />
          </section>
          <section className="dashboard-section">
            <FilteredList pokemons={pokemons} types={getUniqueTypes(pokemons)} />
          </section>
        </div>
      )}
    </div>
  )
}

export default DashboardPage
