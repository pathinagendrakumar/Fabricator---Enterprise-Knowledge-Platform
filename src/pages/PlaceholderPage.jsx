import React from 'react'

function PlaceholderPage({ title, description }) {
  return (
    <div className="card placeholder-card">
      <h2 className="card-title">{title}</h2>
      <p className="card-subtitle">{description}</p>
      <p className="placeholder-note">
        This section will later include full UI as per the SOW (tables, filters,
        wizards, and charts). For now it is a placeholder.
      </p>
    </div>
  )
}

export default PlaceholderPage
