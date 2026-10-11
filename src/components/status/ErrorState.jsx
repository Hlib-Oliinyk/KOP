function ErrorState({ message, onRetry }) {
  return (
    <div className="status-card status-card--error">
      <p>Помилка: {message}</p>
      <button className="retry-button" onClick={onRetry}>
        Спробувати ще раз
      </button>
    </div>
  )
}

export default ErrorState
