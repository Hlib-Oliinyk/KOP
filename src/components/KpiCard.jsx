function KpiCard({ title, value, change, changeType = 'neutral' }) {
  return (
    <div className="kpi-card">
      <p className="kpi-title">{title}</p>
      <p className="kpi-value">{value}</p>
      {change && <p className={`kpi-change kpi-change--${changeType}`}>{change}</p>}
    </div>
  )
}

export default KpiCard
