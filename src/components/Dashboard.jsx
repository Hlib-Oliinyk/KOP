import KpiCard from './KpiCard'
import Counter from './Counter'
import Toggle from './Toggle'
import PokemonList from './List/PokemonList'
import { POKEMONS, POKEMON_TYPES } from '../data/pokemons'
import { getMostCommonType, getAverageHp } from '../utils/pokemonStats'

function Dashboard() {
  const totalPokemons = POKEMONS.length
  const totalTypes = POKEMON_TYPES.length
  const { type: topType, count: topTypeCount } = getMostCommonType(POKEMONS)
  const avgHp = getAverageHp(POKEMONS)

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Pokemon Dashboard</h1>
      </header>

      <section className="kpi-row">
        <KpiCard title="Усього покемонів" value={totalPokemons} change="перші 12 з PokeAPI" changeType="neutral" />
        <KpiCard title="Кількість типів" value={totalTypes} change="серед вибірки" changeType="neutral" />
        <KpiCard title={`Тип: ${topType}`} value={topTypeCount} change="покемонів цього типу" changeType="up" />
        <KpiCard title="Середній HP" value={avgHp} change="серед 12 покемонів" changeType="neutral" />
      </section>

      <section className="widgets-row">
        <Counter />
        <Toggle pokemon={POKEMONS[0]} />
      </section>

      <section>
        <PokemonList pokemons={POKEMONS} types={POKEMON_TYPES} />
      </section>
    </div>
  )
}

export default Dashboard
