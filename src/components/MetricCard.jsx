import React from 'react'

function MetricCard({ label, value, delta, deltaLabel }) {
  const isPositive = delta >= 0
  return (
    <div className="metric-card">
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
      <div className="metric-footer">
        <span
          className={
            'metric-delta ' + (isPositive ? 'metric-delta--up' : 'metric-delta--down')
          }
        >
          {isPositive ? '+' : ''}
          {delta}%
        </span>
        <span className="metric-delta-label">{deltaLabel}</span>
      </div>
    </div>
  )
}

export default MetricCard
