import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteButton from './FavoriteButton'
import TypeBadges from '../pokemon/TypeBadges'
import { clearFavorites, selectFavorites } from '../../store/favoritesSlice'
import { getSpriteUrl } from '../../api/pokeApiUrls'
import { getPokemonPath } from '../../routes/paths'

function FavoritesPanel() {
  const favorites = useSelector(selectFavorites)
  const dispatch = useDispatch()

  return (
    <section className="widget-card favorites-panel">
      <div className="widget-header">
        <h3>Обране ({favorites.length})</h3>
        {favorites.length > 0 && (
          <button type="button" className="reset-button" onClick={() => dispatch(clearFavorites())}>
            Очистити
          </button>
        )}
      </div>

      {favorites.length === 0 ? (
        <p className="empty-state">Натисніть на зірочку біля покемона, щоб додати його в обране</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((pokemon) => (
            <li key={pokemon.id} className="favorite-item">
              <img src={getSpriteUrl(pokemon.id)} alt="" width="48" height="48" loading="lazy" />
              <div className="favorite-item-info">
                <Link to={getPokemonPath(pokemon.id)} className="pokemon-link favorite-item-name">
                  {pokemon.name}
                </Link>
                <TypeBadges types={pokemon.types} />
              </div>
              <FavoriteButton pokemon={pokemon} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default FavoritesPanel
