import { useState } from 'react'
import PokemonTypeSelect from './PokemonTypeSelect'
import PokemonListItems from './PokemonListItems'

const ALL_TYPES = 'Усі'

function PokemonList({ pokemons, types }) {
  const [selectedType, setSelectedType] = useState(ALL_TYPES)

  const filteredPokemons =
    selectedType === ALL_TYPES
      ? pokemons
      : pokemons.filter((pokemon) => pokemon.types.includes(selectedType))

  return (
    <div className="widget-card">
      <h3>Покемони за типом</h3>

      <PokemonTypeSelect
        types={types}
        selectedType={selectedType}
        onSelectType={setSelectedType}
        allLabel={ALL_TYPES}
      />

      <PokemonListItems pokemons={filteredPokemons} />
    </div>
  )
}

export default PokemonList
