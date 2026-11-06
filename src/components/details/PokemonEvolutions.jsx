import { Link } from 'react-router'
import { getPokemonPath } from '../../routes/paths'

function PokemonEvolutions({ stages }) {
  if (stages.length <= 1) {
    return (
      <section className="widget-card">
        <h3>Еволюції</h3>
        <p className="empty-state">Цей покемон не еволюціонує</p>
      </section>
    )
  }

  return (
    <section className="widget-card">
      <h3>Еволюції</h3>
      <ol className="evolution-stages">
        {stages.map((stage, index) => (
          <li key={index} className="evolution-stage">
            {stage.map((evolution) => (
              <Link
                key={evolution.id}
                to={getPokemonPath(evolution.id)}
                className={evolution.isCurrent ? 'evolution-card evolution-card--current' : 'evolution-card'}
                aria-current={evolution.isCurrent || undefined}
              >
                <img src={evolution.image} alt="" width="72" height="72" loading="lazy" />
                {evolution.name}
              </Link>
            ))}
          </li>
        ))}
      </ol>
    </section>
  )
}

export default PokemonEvolutions
