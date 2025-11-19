import React from 'react'

const TAB_TITLES = {
  dashboard: 'Dashboard',
  knowledge: 'Knowledge',
  data_sources: 'Data Sources',
  fabrics: 'Available Fabrics',
  test_llm: 'Test with LLM',
  context_analysis: 'Context Analysis',
  feedback_quality: 'Feedback & Quality',
  admin_settings: 'Admin & Settings',
}

function PageHeader({ activeTab }) {
  return (
    <header className="page-header">
      <div>
        <h1 className="page-title">{TAB_TITLES[activeTab]}</h1>
        <p className="page-subtitle">
          Knowledge Management for UNUM IT Operations – Fabricator PoC.
        </p>
      </div>
      <div className="page-header-right">
        <span className="badge badge-env">PoC</span>
        <div className="user-pill">
          <div className="user-avatar">N</div>
          <div>
            <div className="user-name">Nagendra P</div>
            <div className="user-role">KM Lead • TCS</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeader
