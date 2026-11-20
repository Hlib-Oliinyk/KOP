import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { CHART_COLORS } from '../../constants/charts'

const CARTESIAN_CHARTS = {
  bar: BarChart,
  line: LineChart,
  area: AreaChart,
}

const TOOLTIP_PROPS = {
  contentStyle: {
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 8,
  },
  labelStyle: { color: 'var(--color-text)', fontWeight: 600 },
}

function getRowColor(row, index) {
  return row.color ?? CHART_COLORS[index % CHART_COLORS.length]
}

function renderSeries(type, series, data) {
  const useRowColors = series.length === 1 && data.some((row) => row.color)

  return series.map((item) => {
    if (type === 'bar') {
      return (
        <Bar key={item.key} dataKey={item.key} name={item.label} fill={item.color} radius={[4, 4, 0, 0]}>
          {useRowColors && data.map((row, index) => <Cell key={index} fill={getRowColor(row, index)} />)}
        </Bar>
      )
    }

    if (type === 'line') {
      return (
        <Line
          key={item.key}
          type="monotone"
          dataKey={item.key}
          name={item.label}
          stroke={item.color}
          strokeWidth={2}
          dot={{ r: 3 }}
        />
      )
    }

    return (
      <Area
        key={item.key}
        type="monotone"
        dataKey={item.key}
        name={item.label}
        stroke={item.color}
        fill={item.color}
        fillOpacity={0.25}
      />
    )
  })
}

function PieChartView({ data, xKey, series }) {
  return (
    <PieChart>
      <Pie data={data} dataKey={series[0].key} nameKey={xKey} name={series[0].label} outerRadius="75%" label>
        {data.map((row, index) => (
          <Cell key={row[xKey]} fill={getRowColor(row, index)} />
        ))}
      </Pie>
      <Tooltip {...TOOLTIP_PROPS} />
      <Legend />
    </PieChart>
  )
}

function CartesianChartView({ type, data, xKey, series }) {
  const ChartComponent = CARTESIAN_CHARTS[type]

  return (
    <ChartComponent data={data} margin={{ top: 8, right: 16, bottom: 8, left: -16 }}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey={xKey} tickLine={false} />
      <YAxis allowDecimals={false} tickLine={false} />
      <Tooltip {...TOOLTIP_PROPS} />
      {series.length > 1 && <Legend />}
      {renderSeries(type, series, data)}
    </ChartComponent>
  )
}

function Chart({ type, data, xKey, series, height = 280 }) {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height={height}>
        {type === 'pie' ? (
          <PieChartView data={data} xKey={xKey} series={series} />
        ) : (
          <CartesianChartView type={type} data={data} xKey={xKey} series={series} />
        )}
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
