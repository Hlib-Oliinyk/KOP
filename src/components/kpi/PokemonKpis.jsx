import KpiCard from './KpiCard'
import { getMostCommonType, getAverageHp, getUniqueTypes } from '../../utils/pokemonStats'

function PokemonKpis({ pokemons }) {
  const totalPokemons = pokemons.length
  const totalTypes = getUniqueTypes(pokemons).length
  const { type: topType, count: topTypeCount } = getMostCommonType(pokemons)
  const avgHp = getAverageHp(pokemons)

  return (
    <section className="kpi-row">
      <KpiCard title="Усього покемонів" value={totalPokemons} change="за поточними фільтрами" changeType="neutral" />
      <KpiCard title="Кількість типів" value={totalTypes} change="серед вибірки" changeType="neutral" />
      <KpiCard title={`Тип: ${topType}`} value={topTypeCount} change="покемонів цього типу" changeType="up" />
      <KpiCard title="Середній HP" value={avgHp} change={`серед ${totalPokemons} покемонів`} changeType="neutral" />
    </section>
  )
}

export default PokemonKpis
