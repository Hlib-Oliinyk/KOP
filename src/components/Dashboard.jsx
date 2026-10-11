import { useState } from 'react'
import { usePokemons } from '../hooks/usePokemons'
import { getUniqueTypes } from '../utils/pokemonStats'
import Counter from './Counter'
import Toggle from './Toggle'
import PokemonKpis from './kpi/PokemonKpis'
import PokemonTable from './table/PokemonTable'
import FilteredList from './list/FilteredList'
import LoadingState from './status/LoadingState'
import ErrorState from './status/ErrorState'
import EmptyState from './status/EmptyState'

function Dashboard() {
  const { pokemons, status, error, reload } = usePokemons()
  const [isNormal, setIsNormal] = useState(true)

  const hasData = status === 'success'

  const renderStatus = () => {
    if (status === 'loading') return <LoadingState />
    if (status === 'error') return <ErrorState message={error} onRetry={reload} />
    if (status === 'empty') return <EmptyState />
    return null
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Pokemon Dashboard</h1>
      </header>

      {renderStatus()}
      {hasData && <PokemonKpis pokemons={pokemons} />}

      <section className="widgets-row">
        <Counter />
        <Toggle isNormal={isNormal} onToggle={setIsNormal} />
      </section>

      {hasData && (
        <>
          <section className="dashboard-section">
            <PokemonTable pokemons={pokemons} isNormal={isNormal} />
          </section>
          <section className="dashboard-section">
            <FilteredList pokemons={pokemons} types={getUniqueTypes(pokemons)} isNormal={isNormal} />
          </section>
        </>
      )}
    </div>
  )
}

export default Dashboard
