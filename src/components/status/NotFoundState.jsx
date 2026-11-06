import { Link } from 'react-router'
import { HOME_PATH } from '../../routes/paths'

function NotFoundState({ title, message }) {
  return (
    <div className="status-card">
      <h1 className="status-title">{title}</h1>
      <p>{message}</p>
      <Link to={HOME_PATH} className="retry-button">
        На головну
      </Link>
    </div>
  )
}

export default NotFoundState
