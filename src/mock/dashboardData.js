export const dashboardStats = {
  totalDocuments: { value: 1234, delta: 12 },
  sources: { value: 45, delta: 3 },
  searches: { value: 892, delta: 23 },
  accuracy: { value: 94.2, delta: 2.1 },
}

export const recentActivity = [
  {
    id: 1,
    title: 'PDF uploaded',
    detail: 'incident_runbook_p1p2.pdf',
    timeAgo: '2 minutes ago',
  },
  {
    id: 2,
    title: 'ServiceNow connector synced',
    detail: 'ITSM incidents & KB articles',
    timeAgo: '15 minutes ago',
  },
  {
    id: 3,
    title: 'Model training completed',
    detail: 'knowledge_fabric_v2',
    timeAgo: '1 hour ago',
  },
  {
    id: 4,
    title: 'Search performed',
    detail: '"How to handle P1 incident?"',
    timeAgo: '2 hours ago',
  },
]

export const systemStatus = [
  {
    id: 1,
    name: 'Vector Database',
    status: 'Online',
    note: 'ChromaDB – 325k embeddings',
  },
  {
    id: 2,
    name: 'Embedding Model',
    status: 'Active',
    note: 'Azure OpenAI text-embedding-3-large',
  },
  {
    id: 3,
    name: 'LLM API Server',
    status: 'Running',
    note: 'GPT-4o via Azure OpenAI',
  },
  {
    id: 4,
    name: 'Connectors',
    status: 'Degraded',
    note: 'SharePoint sync delayed – retry scheduled',
  },
]
