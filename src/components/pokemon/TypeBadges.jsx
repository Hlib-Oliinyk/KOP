function TypeBadges({ types }) {
  return (
    <span className="type-badges">
      {types.map((type) => (
        <span key={type} className={`type-badge type-badge--${type.toLowerCase()}`}>
          {type}
        </span>
      ))}
    </span>
  )
}

export default TypeBadges
