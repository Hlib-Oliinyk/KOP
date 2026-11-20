import ChartWidget from './ChartWidget'
import { CHART_COLORS, CHART_IDS } from '../../constants/charts'
import { getStatsChartData, getTypeDistribution } from '../../utils/pokemonStats'

const TYPE_SERIES = [{ key: 'count', label: 'Покемонів', color: CHART_COLORS[0] }]

const STATS_SERIES = [
  { key: 'hp', label: 'HP', color: CHART_COLORS[2] },
  { key: 'attack', label: 'Атака', color: CHART_COLORS[1] },
]

function PokemonCharts({ pokemons }) {
  return (
    <div className="charts-row">
      <ChartWidget
        chartId={CHART_IDS.types}
        title="Розподіл за типами"
        description="Покемон із двома типами враховується в кожному з них"
        types={['bar', 'line', 'pie']}
        data={getTypeDistribution(pokemons)}
        xKey="type"
        series={TYPE_SERIES}
      />
      <ChartWidget
        chartId={CHART_IDS.stats}
        title="HP та атака"
        description="Базові характеристики покемонів за поточними фільтрами"
        types={['bar', 'line', 'area']}
        data={getStatsChartData(pokemons)}
        xKey="name"
        series={STATS_SERIES}
      />
    </div>
  )
}

export default PokemonCharts
