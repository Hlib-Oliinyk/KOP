import { useState } from 'react'

const ALL_TYPES = 'Усі'

function FilteredList({ pokemons, types }) {
  const [selectedType, setSelectedType] = useState(ALL_TYPES)

  const filteredPokemons =
    selectedType === ALL_TYPES
      ? pokemons
      : pokemons.filter((pokemon) => pokemon.types.includes(selectedType))

  return (
    <div className="widget-card">
      <h3>Покемони за типом</h3>

      <select
        className="type-select"
        value={selectedType}
        onChange={(event) => setSelectedType(event.target.value)}
      >
        <option value={ALL_TYPES}>{ALL_TYPES}</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <ul className="pokemon-list">
        {filteredPokemons.map((pokemon) => (
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

      {filteredPokemons.length === 0 && <p className="empty-state">Немає покемонів цього типу</p>}
    </div>
  )
}

export default FilteredList
