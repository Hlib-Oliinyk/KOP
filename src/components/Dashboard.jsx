import { useState } from 'react'
import { usePokemons } from '../hooks/usePokemons'
import { getUniqueTypes } from '../utils/pokemonStats'
import Counter from './Counter'
import Toggle from './Toggle'
import PokemonKpis from './PokemonKpis'
import PokemonTable from './PokemonTable'
import FilteredList from './FilteredList'
import LoadingState from './LoadingState'
import ErrorState from './ErrorState'
import EmptyState from './EmptyState'

function Dashboard() {
  const { pokemons, isLoading, error, reload } = usePokemons()
  const [isNormal, setIsNormal] = useState(true)

  const renderPokemonData = () => {
    if (isLoading) return <LoadingState />
    if (error) return <ErrorState message={error} onRetry={reload} />
    if (pokemons.length === 0) return <EmptyState />

    return (
      <>
        <PokemonKpis pokemons={pokemons} />
        <section className="dashboard-section">
          <PokemonTable pokemons={pokemons} isNormal={isNormal} />
        </section>
        <section className="dashboard-section">
          <FilteredList pokemons={pokemons} types={getUniqueTypes(pokemons)} isNormal={isNormal} />
        </section>
      </>
    )
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Pokemon Dashboard</h1>
      </header>

      <section className="widgets-row">
        <Counter />
        <Toggle isNormal={isNormal} onToggle={setIsNormal} />
      </section>

      {renderPokemonData()}
    </div>
  )
}

export default Dashboard
