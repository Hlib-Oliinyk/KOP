import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useDebounce } from '../hooks/useDebounce'
import { usePokemonFilters } from '../hooks/usePokemonFilters'
import { fetchPokemons } from '../api/fetchPokemons'
import { fetchPokemonTypes } from '../api/fetchPokemonTypes'
import { getUniqueTypes } from '../utils/pokemonStats'
import Counter from './Counter'
import Toggle from './Toggle'
import PokemonFilters from './filters/PokemonFilters'
import PokemonKpis from './kpi/PokemonKpis'
import PokemonTable from './table/PokemonTable'
import FilteredList from './list/FilteredList'
import LoadingState from './status/LoadingState'
import ErrorState from './status/ErrorState'
import EmptyState from './status/EmptyState'

const FILTERS_DEBOUNCE_MS = 400

function Dashboard() {
  const { control, filters, isDirty, resetFilters } = usePokemonFilters()
  const debouncedFilters = useDebounce(filters, FILTERS_DEBOUNCE_MS)
  const { data: pokemons, loading, error, refetch } = useFetch(fetchPokemons, debouncedFilters)
  const { data: types, error: typesError } = useFetch(fetchPokemonTypes)
  const [isNormal, setIsNormal] = useState(true)

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
      <header className="dashboard-header">
        <h1>Pokemon Dashboard</h1>
      </header>

      {hasData && (
        <div className={resultsClassName} aria-busy={isUpdating}>
          <PokemonKpis pokemons={pokemons} />
        </div>
      )}

      <section className="widgets-row">
        <Counter />
        <Toggle isNormal={isNormal} onToggle={setIsNormal} />
      </section>

      <PokemonFilters
        control={control}
        types={types}
        typesError={typesError}
        isDirty={isDirty}
        onReset={resetFilters}
      />

      {renderStatus()}
      {hasData && (
        <div className={resultsClassName} aria-busy={isUpdating}>
          <section className="dashboard-section">
            <PokemonTable pokemons={pokemons} isNormal={isNormal} />
          </section>
          <section className="dashboard-section">
            <FilteredList pokemons={pokemons} types={getUniqueTypes(pokemons)} isNormal={isNormal} />
          </section>
        </div>
      )}
    </div>
  )
}

export default Dashboard
