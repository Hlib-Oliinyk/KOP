function EmptyState({ message = 'Даних немає' }) {
  return (
    <div className="status-card">
      <p>{message}</p>
    </div>
  )
}

export default EmptyState
