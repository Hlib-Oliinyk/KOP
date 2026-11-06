import TypeBadges from '../pokemon/TypeBadges'
import { useUnits } from '../../hooks/useUnits'
import { formatHeight, formatWeight } from '../../utils/units'

function PokemonHero({ pokemon }) {
  const { isNormal } = useUnits()

  const facts = [
    { label: 'Зріст', value: formatHeight(pokemon.height, isNormal) },
    { label: 'Вага', value: formatWeight(pokemon.weight, isNormal) },
    { label: 'Базовий досвід', value: pokemon.baseExperience ?? '—' },
  ]

  return (
    <section className="widget-card pokemon-hero">
      {pokemon.image && <img className="pokemon-hero-image" src={pokemon.image} alt={pokemon.name} />}

      <div className="pokemon-hero-info">
        <p className="pokemon-number">#{String(pokemon.id).padStart(4, '0')}</p>
        <h1 className="pokemon-hero-name">{pokemon.name}</h1>
        {pokemon.genus && <p className="pokemon-genus">{pokemon.genus}</p>}

        <div className="pokemon-hero-badges">
          <TypeBadges types={pokemon.types} />
          {pokemon.isLegendary && <span className="rarity-badge">Легендарний</span>}
          {pokemon.isMythical && <span className="rarity-badge">Міфічний</span>}
        </div>

        {pokemon.description && <p className="pokemon-description">{pokemon.description}</p>}

        <dl className="pokemon-facts">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default PokemonHero
