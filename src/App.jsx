import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import PageHeader from './components/PageHeader.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'

const TABS = {
  DASHBOARD: 'dashboard',
  KNOWLEDGE: 'knowledge',
  DATA_SOURCES: 'data_sources',
  FABRICS: 'fabrics',
  TEST_WITH_LLM: 'test_llm',
  CONTEXT_ANALYSIS: 'context_analysis',
  FEEDBACK_QUALITY: 'feedback_quality',
  ADMIN_SETTINGS: 'admin_settings',
}

function App() {
  const [activeTab, setActiveTab] = useState(TABS.DASHBOARD)

  const renderContent = () => {
    switch (activeTab) {
      case TABS.DASHBOARD:
        return <DashboardPage />
      case TABS.KNOWLEDGE:
        return (
          <PlaceholderPage
            title="Knowledge"
            description="Browse and manage knowledge items from ServiceNow, SharePoint, Confluence, email and other sources."
          />
        )
      case TABS.DATA_SOURCES:
        return (
          <PlaceholderPage
            title="Data Sources"
            description="Configure and monitor connectors like ServiceNow, SharePoint, Confluence, GitHub, file shares, etc."
          />
        )
      case TABS.FABRICS:
        return (
          <PlaceholderPage
            title="Available Fabrics"
            description="Create and manage Knowledge Fabrics – bundles of sources, scopes, and guardrails for each use case."
          />
        )
      case TABS.TEST_WITH_LLM:
        return (
          <PlaceholderPage
            title="Test with LLM"
            description="Ask Fabricator questions and review the cited knowledge snippets returned by the model."
          />
        )
      case TABS.CONTEXT_ANALYSIS:
        return (
          <PlaceholderPage
            title="Context Analysis"
            description="Analyze search trends, query success, and knowledge gaps across all IT Ops users."
          />
        )
      case TABS.FEEDBACK_QUALITY:
        return (
          <PlaceholderPage
            title="Feedback & Quality"
            description="Review thumbs-up/down feedback, escalations to SMEs, and quality metrics."
          />
        )
      case TABS.ADMIN_SETTINGS:
        return (
          <PlaceholderPage
            title="Admin & Settings"
            description="Manage users, roles, guardrails, environment configuration, and audit logs."
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="app-root">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} TABS={TABS} />
      <div className="app-main">
        <PageHeader activeTab={activeTab} />
        <div className="app-content">{renderContent()}</div>
      </div>
    </div>
  )
}

export default App
