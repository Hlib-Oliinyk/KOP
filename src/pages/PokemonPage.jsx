import { Link, useParams } from 'react-router'
import PokemonDetails from '../components/details/PokemonDetails'
import NotFoundState from '../components/status/NotFoundState'
import { HOME_PATH } from '../routes/paths'

const POKEMON_ID_PATTERN = /^[1-9]\d*$/

function PokemonPage() {
  const { id } = useParams()
  const isValidId = POKEMON_ID_PATTERN.test(id)

  return (
    <div className="pokemon-page">
      <Link to={HOME_PATH} className="back-link">
        Назад до списку
      </Link>

      {isValidId ? (
        <PokemonDetails id={id} />
      ) : (
        <NotFoundState title="Покемона не знайдено" message={`"${id}" - некоректний ідентифікатор покемона.`} />
      )}
    </div>
  )
}

export default PokemonPage
