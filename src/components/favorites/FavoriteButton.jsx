import { useDispatch, useSelector } from 'react-redux'
import StarIcon from './StarIcon'
import { selectIsFavorite, toggleFavorite } from '../../store/favoritesSlice'

function FavoriteButton({ pokemon, withLabel = false }) {
  const isFavorite = useSelector((state) => selectIsFavorite(state, pokemon.id))
  const dispatch = useDispatch()

  const actionLabel = isFavorite ? `Прибрати ${pokemon.name} з обраного` : `Додати ${pokemon.name} в обране`
  const className = isFavorite ? 'favorite-button favorite-button--active' : 'favorite-button'

  return (
    <button
      type="button"
      className={withLabel ? `${className} favorite-button--labeled` : className}
      aria-pressed={isFavorite}
      aria-label={withLabel ? undefined : actionLabel}
      title={actionLabel}
      onClick={() => dispatch(toggleFavorite(pokemon))}
    >
      <StarIcon />
      {withLabel && (isFavorite ? 'В обраному' : 'Додати в обране')}
    </button>
  )
}

export default FavoriteButton
