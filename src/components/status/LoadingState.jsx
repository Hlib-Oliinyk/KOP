function LoadingState({ message = 'Завантаження покемонів...' }) {
  return (
    <div className="status-card">
      <div className="spinner" />
      <p>{message}</p>
    </div>
  )
}

export default LoadingState
