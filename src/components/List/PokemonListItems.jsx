import { metersToFeetInches, kgToLbs } from '../../utils/units'

function PokemonListItems({ pokemons, isNormal }) {
  return (
    <>
      <ul className="pokemon-list">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <div className="pokemon-info">
              <span className="pokemon-name">{pokemon.name}</span>
              <span className="pokemon-measurements">
                {isNormal ? `${pokemon.height} м` : metersToFeetInches(pokemon.height)}
                {' · '}
                {isNormal ? `${pokemon.weight} кг` : `${kgToLbs(pokemon.weight)} lbs`}
              </span>
            </div>
            <span className="type-badges">
              {pokemon.types.map((type) => (
                <span key={type} className={`type-badge type-badge--${type.toLowerCase()}`}>
                  {type}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>

      {pokemons.length === 0 && <p className="empty-state">Немає покемонів цього типу</p>}
    </>
  )
}

export default PokemonListItems
