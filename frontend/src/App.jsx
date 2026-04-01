import { createContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import MainLayout from './components/Layout/MainLayout'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Budgets from './pages/Budgets'
import Subscriptions from './pages/Subscriptions'
import Reports from './pages/Reports'
import Impressum from './pages/Impressum'
import DataPrivacy from './pages/DataPrivacy'

axios.defaults.baseURL = 'http://localhost:3000'

export const AppContext = createContext()

function App() {
  const [transactions, setTransactions] = useState([])
  const [budgets, setBudgets] = useState([])
  const [subscriptions, setSubscriptions] = useState([])

  useEffect(() => {
    fetchTransactions()
    fetchBudgets()
    fetchSubscriptions()
  }, [])

  const fetchTransactions = async () => {
    try {
      const res = await axios.get('/api/transactions')
      setTransactions(res.data)
    } catch (error) {
      console.error('Error fetching transactions:', error)
    }
  }

  const fetchBudgets = async () => {
    try {
      const res = await axios.get('/api/budgets')
      setBudgets(res.data)
    } catch (error) {
      console.error('Error fetching budgets:', error)
    }
  }

  const fetchSubscriptions = async () => {
    try {
      const res = await axios.get('/api/subscriptions')
      setSubscriptions(res.data)
    } catch (error) {
      console.error('Error fetching subscriptions:', error)
    }
  }

  const addTransaction = async (transaction) => {
    try {
      const res = await axios.post('/api/transactions', transaction)
      setTransactions([...transactions, res.data])
    } catch (error) {
      console.error('Error adding transaction:', error)
    }
  }

  const updateTransaction = async (id, updated) => {
    try {
      const res = await axios.put(`/api/transactions/${id}`, updated)
      setTransactions(transactions.map(t => parseInt(t.id) === parseInt(id) ? res.data : t))
    } catch (error) {
      console.error('Error updating transaction:', error)
    }
  }

  const deleteTransaction = async (id) => {
    try {
      console.log('Attempting to delete transaction with ID:', id, 'Type:', typeof id)
      const response = await axios.delete(`/api/transactions/${id}`)
      console.log('Delete response:', response)
      setTransactions(transactions.filter(t => {
        const match = parseInt(t.id) !== parseInt(id)
        console.log(`Keeping transaction ${t.id}?`, match)
        return match
      }))
      console.log('Transaction deleted successfully:', id)
    } catch (error) {
      console.error('Error deleting transaction:', error.response?.data || error.message)
    }
  }

  const addBudget = async (budget) => {
    try {
      const res = await axios.post('/api/budgets', budget)
      setBudgets([...budgets, res.data])
    } catch (error) {
      console.error('Error adding budget:', error)
    }
  }

  const updateBudget = async (id, updated) => {
    try {
      const res = await axios.put(`/api/budgets/${id}`, updated)
      setBudgets(budgets.map(b => parseInt(b.id) === parseInt(id) ? res.data : b))
    } catch (error) {
      console.error('Error updating budget:', error)
    }
  }

  const deleteBudget = async (id) => {
    try {
      console.log('Attempting to delete budget with ID:', id)
      const response = await axios.delete(`/api/budgets/${id}`)
      console.log('Delete response:', response)
      setBudgets(budgets.filter(b => parseInt(b.id) !== parseInt(id)))
      console.log('Budget deleted successfully:', id)
    } catch (error) {
      console.error('Error deleting budget:', error.response?.data || error.message)
    }
  }

  const addSubscription = async (subscription) => {
    try {
      const res = await axios.post('/api/subscriptions', subscription)
      setSubscriptions([...subscriptions, res.data])
    } catch (error) {
      console.error('Error adding subscription:', error)
    }
  }

  const updateSubscription = async (id, updated) => {
    try {
      const res = await axios.put(`/api/subscriptions/${id}`, updated)
      setSubscriptions(subscriptions.map(s => parseInt(s.id) === parseInt(id) ? res.data : s))
    } catch (error) {
      console.error('Error updating subscription:', error)
    }
  }

  const deleteSubscription = async (id) => {
    try {
      console.log('Attempting to delete subscription with ID:', id)
      const response = await axios.delete(`/api/subscriptions/${id}`)
      console.log('Delete response:', response)
      setSubscriptions(subscriptions.filter(s => parseInt(s.id) !== parseInt(id)))
      console.log('Subscription deleted successfully:', id)
    } catch (error) {
      console.error('Error deleting subscription:', error.response?.data || error.message)
    }
  }

  const getSpent = (category) => {
    return transactions.filter(t => t.type === 'expense' && t.category === category).reduce((sum, t) => sum + parseFloat(t.amount || 0), 0)
  }

  const value = {
    transactions, addTransaction, updateTransaction, deleteTransaction,
    budgets, addBudget, deleteBudget, updateBudget,
    subscriptions, addSubscription, updateSubscription, deleteSubscription,
    getSpent
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
          <Route path="impressum" element={<Impressum />} />
          <Route path="data-privacy" element={<DataPrivacy />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  )
}

export default App