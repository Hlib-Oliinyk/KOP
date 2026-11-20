import { useDispatch, useSelector } from 'react-redux'
import Chart from './Chart'
import ChartTypeSwitch from './ChartTypeSwitch'
import { selectChartType, setChartType } from '../../store/chartsSlice'

function ChartWidget({ chartId, title, description, types, data, xKey, series }) {
  const savedType = useSelector((state) => selectChartType(state, chartId))
  const dispatch = useDispatch()
  const chartType = types.includes(savedType) ? savedType : types[0]

  const handleTypeChange = (type) => dispatch(setChartType({ chartId, chartType: type }))

  return (
    <section className="widget-card chart-widget">
      <div className="widget-header">
        <h3>{title}</h3>
        <ChartTypeSwitch types={types} value={chartType} onChange={handleTypeChange} />
      </div>
      {description && <p className="chart-description">{description}</p>}
      <Chart type={chartType} data={data} xKey={xKey} series={series} />
    </section>
  )
}

export default ChartWidget
