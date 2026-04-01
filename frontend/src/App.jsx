import { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Budgets from './pages/Budgets'
import Subscriptions from './pages/Subscriptions'
import Reports from './pages/Reports'

export const AppContext = createContext()

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: 'Salary', amount: 3000, type: 'income', category: 'Salary', date: '2024-01-01', note: '' },
    { id: 2, title: 'Groceries', amount: 150, type: 'expense', category: 'Food', date: '2024-01-02', note: '' }
  ])

  const [budgets, setBudgets] = useState([
    { id: 1, category: 'Food', limit: 500 },
    { id: 2, category: 'Transport', limit: 200 },
    { id: 3, category: 'Entertainment', limit: 300 }
  ])

  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: 'Spotify', amount: 9.99, cycle: 'monthly', nextPaymentDate: '2024-01-15' },
    { id: 2, name: 'Netflix', amount: 15.99, cycle: 'monthly', nextPaymentDate: '2024-01-20' }
  ])

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }])
  }

  const updateTransaction = (id, updated) => {
    setTransactions(transactions.map(t => t.id === id ? { ...t, ...updated } : t))
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  const addBudget = (budget) => {
    setBudgets([...budgets, { ...budget, id: Date.now() }])
  }

  const deleteBudget = (id) => {
    setBudgets(budgets.filter(b => b.id !== id))
  }

  const updateBudget = (id, updated) => {
    setBudgets(budgets.map(b => b.id === id ? { ...b, ...updated } : b))
  }

  const addSubscription = (subscription) => {
    setSubscriptions([...subscriptions, { ...subscription, id: Date.now() }])
  }

  const deleteSubscription = (id) => {
    setSubscriptions(subscriptions.filter(s => s.id !== id))
  }

  const value = {
    transactions, addTransaction, updateTransaction, deleteTransaction,
    budgets, addBudget, deleteBudget, updateBudget,
    subscriptions, addSubscription, deleteSubscription
  }

  return (
    <AppContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  )
}

export default App