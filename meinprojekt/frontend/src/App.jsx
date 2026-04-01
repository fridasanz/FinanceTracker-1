import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Budgets from './pages/Budgets'
import Subscriptions from './pages/Subscriptions'
import Reports from './pages/Reports'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="budgets" element={<Budgets />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  )
}

export default App