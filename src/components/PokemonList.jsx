function PokemonList({ pokemons }) {
  return (
    <>
      <ul className="pokemon-list">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <span className="pokemon-name">{pokemon.name}</span>
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

export default PokemonList
