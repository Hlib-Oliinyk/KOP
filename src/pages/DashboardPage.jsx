import { useFetch } from '../hooks/useFetch'
import { useDebounce } from '../hooks/useDebounce'
import { useFilters } from '../hooks/useFilters'
import { fetchPokemons } from '../api/fetchPokemons'
import { fetchPokemonTypes } from '../api/fetchPokemonTypes'
import { getUniqueTypes } from '../utils/pokemonStats'
import Counter from '../components/Counter'
import Toggle from '../components/Toggle'
import PokemonFilters from '../components/filters/PokemonFilters'
import PokemonKpis from '../components/kpi/PokemonKpis'
import PokemonTable from '../components/table/PokemonTable'
import FilteredList from '../components/list/FilteredList'
import LoadingState from '../components/status/LoadingState'
import ErrorState from '../components/status/ErrorState'
import EmptyState from '../components/status/EmptyState'

const FILTERS_DEBOUNCE_MS = 400

function DashboardPage() {
  const { filters } = useFilters()
  const debouncedFilters = useDebounce(filters, FILTERS_DEBOUNCE_MS)
  const { data: pokemons, loading, error, refetch } = useFetch(fetchPokemons, debouncedFilters)
  const { data: types, error: typesError } = useFetch(fetchPokemonTypes)

  const hasData = Boolean(pokemons?.length)
  const isUpdating = loading || filters !== debouncedFilters
  const resultsClassName = isUpdating ? 'results results--updating' : 'results'

  const renderStatus = () => {
    if (error) return <ErrorState message={error.message} onRetry={refetch} />
    if (loading && !hasData) return <LoadingState />
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

      <PokemonFilters types={types} typesError={typesError} />

      {renderStatus()}
      {hasData && (
        <div className={resultsClassName} aria-busy={isUpdating}>
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
