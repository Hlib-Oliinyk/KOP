import { useState } from 'react'
import TypeSelect from './TypeSelect'
import PokemonList from './PokemonList'

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

      <TypeSelect
        types={types}
        selectedType={selectedType}
        onSelectType={setSelectedType}
        allLabel={ALL_TYPES}
      />

      <PokemonList pokemons={filteredPokemons} />
    </div>
  )
}

export default FilteredList
