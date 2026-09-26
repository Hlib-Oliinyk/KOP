import { useState } from 'react'

function Counter({ label = 'Розмір команди', min = 0, max = 6 }) {
  const [count, setCount] = useState(0)

  const increment = () => setCount((current) => Math.min(max, current + 1))
  const decrement = () => setCount((current) => Math.max(min, current - 1))
  const reset = () => setCount(0)

  return (
    <div className="widget-card">
      <h3>{label}</h3>
      <div className="counter-controls">
        <button onClick={decrement} disabled={count === min} aria-label="Зменшити">
          −
        </button>
        <span className="counter-value">{count}</span>
        <button onClick={increment} disabled={count === max} aria-label="Збільшити">
          +
        </button>
      </div>
      <button className="counter-reset" onClick={reset}>
        Скинути
      </button>
    </div>
  )
}

export default Counter
