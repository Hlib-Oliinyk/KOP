import { metersToFeetInches, kgToLbs } from '../../utils/units'

function PokemonTableRows({ pokemons, isNormal }) {
  return (
    <tbody>
      {pokemons.map((pokemon) => (
        <tr key={pokemon.id}>
          <td>{pokemon.id}</td>
          <td>{pokemon.name}</td>
          <td>
            <span className="type-badges">
              {pokemon.types.map((type) => (
                <span key={type} className={`type-badge type-badge--${type.toLowerCase()}`}>
                  {type}
                </span>
              ))}
            </span>
          </td>
          <td>{pokemon.stats.hp}</td>
          <td>{pokemon.stats.attack}</td>
          <td>{isNormal ? `${pokemon.height} м` : metersToFeetInches(pokemon.height)}</td>
          <td>{isNormal ? `${pokemon.weight} кг` : `${kgToLbs(pokemon.weight)} lbs`}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default PokemonTableRows
