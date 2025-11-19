import React from 'react'
import MetricCard from '../components/MetricCard.jsx'
import { dashboardStats, recentActivity, systemStatus } from '../mock/dashboardData.js'

function DashboardPage() {
  return (
    <div className="dashboard-grid">
      <div className="metrics-row">
        <MetricCard
          label="Total Documents"
          value={dashboardStats.totalDocuments.value}
          delta={dashboardStats.totalDocuments.delta}
          deltaLabel="from last month"
        />
        <MetricCard
          label="Knowledge Sources"
          value={dashboardStats.sources.value}
          delta={dashboardStats.sources.delta}
          deltaLabel="from last month"
        />
        <MetricCard
          label="Search Queries"
          value={dashboardStats.searches.value}
          delta={dashboardStats.searches.delta}
          deltaLabel="from last month"
        />
        <MetricCard
          label="Model Accuracy"
          value={dashboardStats.accuracy.value + '%'}
          delta={dashboardStats.accuracy.delta}
          deltaLabel="from last month"
        />
      </div>

      <div className="dashboard-main-row">
        <section className="card quick-actions-card">
          <h2 className="card-title">Quick Actions</h2>
          <p className="card-subtitle">
            Create and manage Knowledge Fabrics, train models, and manage the vector
            database.
          </p>
          <div className="quick-actions-buttons">
            <button className="btn btn-primary">Create Knowledge Fabric</button>
            <button className="btn btn-outline">Train Model</button>
            <button className="btn btn-outline">Manage Database</button>
            <button className="btn btn-outline">Run Data Sync</button>
          </div>
        </section>

        <section className="card recent-activity-card">
          <h2 className="card-title">Recent Activity</h2>
          <ul className="activity-list">
            {recentActivity.map((item) => (
              <li key={item.id} className="activity-item">
                <div>
                  <div className="activity-title">{item.title}</div>
                  <div className="activity-subtitle">{item.detail}</div>
                </div>
                <div className="activity-time">{item.timeAgo}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="card system-status-card">
        <h2 className="card-title">System Status</h2>
        <div className="system-status-grid">
          {systemStatus.map((item) => (
            <div key={item.id} className="system-status-item">
              <div className="system-status-name">{item.name}</div>
              <div
                className={
                  'system-status-badge system-status-badge--' +
                  item.status.toLowerCase()
                }
              >
                {item.status}
              </div>
              <div className="system-status-note">{item.note}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DashboardPage
