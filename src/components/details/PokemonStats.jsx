const STAT_LABELS = {
  hp: 'HP',
  attack: 'Атака',
  defense: 'Захист',
  'special-attack': 'Спец. атака',
  'special-defense': 'Спец. захист',
  speed: 'Швидкість',
}

const MAX_STAT_VALUE = 255

function PokemonStats({ stats }) {
  const total = stats.reduce((sum, stat) => sum + stat.value, 0)

  return (
    <section className="widget-card">
      <h3>Характеристики</h3>
      <dl className="stat-list">
        {stats.map((stat) => (
          <div key={stat.key} className="stat-row">
            <dt>{STAT_LABELS[stat.key] ?? stat.key}</dt>
            <dd className="stat-value">{stat.value}</dd>
            <dd className="stat-bar">
              <span className="stat-bar-fill" style={{ width: `${(stat.value / MAX_STAT_VALUE) * 100}%` }} />
            </dd>
          </div>
        ))}
        <div className="stat-row stat-row--total">
          <dt>Разом</dt>
          <dd className="stat-value">{total}</dd>
        </div>
      </dl>
    </section>
  )
}

export default PokemonStats
