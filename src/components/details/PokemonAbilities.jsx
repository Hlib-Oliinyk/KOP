function PokemonAbilities({ abilities }) {
  return (
    <section className="widget-card">
      <h3>Здібності</h3>
      <ul className="ability-list">
        {abilities.map((ability) => (
          <li key={ability.name}>
            {ability.name}
            {ability.isHidden && <span className="ability-hidden">прихована</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PokemonAbilities
