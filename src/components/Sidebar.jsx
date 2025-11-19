import React from 'react'
import {
  LayoutGrid,
  BookOpen,
  Database,
  Layers,
  MessageCircle,
  BarChart2,
  ThumbsUp,
  Settings,
} from 'lucide-react'

const menuItems = (TABS) => [
  { id: TABS.DASHBOARD, label: 'Dashboard', icon: <LayoutGrid size={18} /> },
  { id: TABS.KNOWLEDGE, label: 'Knowledge', icon: <BookOpen size={18} /> },
  { id: TABS.DATA_SOURCES, label: 'Data Sources', icon: <Database size={18} /> },
  { id: TABS.FABRICS, label: 'Available Fabrics', icon: <Layers size={18} /> },
  { id: TABS.TEST_WITH_LLM, label: 'Test with LLM', icon: <MessageCircle size={18} /> },
  { id: TABS.CONTEXT_ANALYSIS, label: 'Context Analysis', icon: <BarChart2 size={18} /> },
  { id: TABS.FEEDBACK_QUALITY, label: 'Feedback & Quality', icon: <ThumbsUp size={18} /> },
  { id: TABS.ADMIN_SETTINGS, label: 'Admin & Settings', icon: <Settings size={18} /> },
]

function Sidebar({ activeTab, onTabChange, TABS }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">F</div>
        <div>
          <div className="sidebar-title">Fabricator</div>
          <div className="sidebar-subtitle">Enterprise Knowledge Platform</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems(TABS).map((item) => (
          <button
            key={item.id}
            className={
              'sidebar-nav-item' +
              (activeTab === item.id ? ' sidebar-nav-item--active' : '')
            }
            onClick={() => onTabChange(item.id)}
          >
            <span className="sidebar-nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
