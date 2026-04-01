import { useState, useEffect } from 'react'
import axios from 'axios'

const Transactions = () => {
  const [showForm, setShowForm] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [newTransaction, setNewTransaction] = useState({
    title: '',
    category: 'Food',
    type: 'expense',
    amount: '',
    date: new Date().toISOString().split('T')[0]
  })

  useEffect(() => {
    fetchTransactions()
  }, [])

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('/api/transactions')
      setTransactions(response.data)
    } catch (error) {
      console.error('Error fetching transactions:', error)
    }
  }

  const getIcon = (transaction) => {
    if (transaction.type === 'income') return '💵'
    switch (transaction.category) {
      case 'Food': return '🍕'
      case 'Transport': return '🚌'
      case 'Education': return '📚'
      default: return '💰'
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-6 pb-12 px-4 lg:px-12">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-black text-slate-900">Transactions</h1>
        <p className="text-slate-600 mt-2">Your recent expense and income history</p>
      </header>

      {/* Add Transaction Button */}
      <div className="mb-8">
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-violet-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-violet-800 transition-colors"
        >
          {showForm ? 'Cancel' : '+ Add Transaction'}
        </button>
      </div>

      {/* Add Transaction Form */}
      {showForm && (
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-4">Add New Transaction</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Description"
              value={newTransaction.title}
              onChange={(e) => setNewTransaction({...newTransaction, title: e.target.value})}
              className="px-4 py-2 border border-slate-200 rounded-lg"
            />
            <select
              value={newTransaction.category}
              onChange={(e) => setNewTransaction({...newTransaction, category: e.target.value})}
              className="px-4 py-2 border border-slate-200 rounded-lg"
            >
              <option>Food</option>
              <option>Transport</option>
              <option>Education</option>
              <option>Entertainment</option>
              <option>Income</option>
            </select>
            <select
              value={newTransaction.type}
              onChange={(e) => setNewTransaction({...newTransaction, type: e.target.value})}
              className="px-4 py-2 border border-slate-200 rounded-lg"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
            <input
              type="number"
              placeholder="Amount"
              value={newTransaction.amount}
              onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})}
              className="px-4 py-2 border border-slate-200 rounded-lg"
            />
            <input
              type="date"
              value={newTransaction.date}
              onChange={(e) => setNewTransaction({...newTransaction, date: e.target.value})}
              className="px-4 py-2 border border-slate-200 rounded-lg"
            />
          </div>
          <button 
            onClick={handleAddTransaction}
            className="mt-4 bg-lime-400 text-slate-950 px-6 py-2 rounded-lg font-bold hover:bg-lime-500 transition-colors"
          >
            Add Transaction
          </button>
        </div>
      )}

      {/* Filters */}
      <div className="mb-8 flex gap-4">
        <select className="px-4 py-2 bg-white border border-slate-200 rounded-lg font-medium text-sm">
          <option>All Categories</option>
          <option>Income</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Education</option>
          <option>Entertainment</option>
        </select>
        <select className="px-4 py-2 bg-white border border-slate-200 rounded-lg font-medium text-sm">
          <option>All Time</option>
          <option>This Month</option>
          <option>Last Month</option>
          <option>Last 3 Months</option>
        </select>
      </div>

      {/* Transactions Table */}
      <section className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-slate-400 text-xs font-black uppercase tracking-wider bg-slate-50">
                <th className="px-8 py-6">Description</th>
                <th className="px-8 py-6">Category</th>
                <th className="px-8 py-6">Date</th>
                <th className="px-8 py-6 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-slate-50 transition-colors border-t border-slate-100">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-lg">
                        {getIcon(txn)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{txn.title}</div>
                        <div className="text-xs text-slate-400">ID: {String(txn.id).padStart(6, '0')}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-700">{txn.category}</span>
                  </td>
                  <td className="px-8 py-6 text-slate-600 text-sm font-medium">{new Date(txn.date).toLocaleDateString()}</td>
                  <td className="px-8 py-6 text-right">
                    <div className={`font-black text-lg ${
                      txn.type === 'income' ? 'text-lime-400' : 'text-slate-900'
                    }`}>
                      {txn.type === 'income' ? '+' : '-'}${Math.abs(txn.amount).toFixed(2)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pagination */}
      <div className="mt-8 flex justify-between items-center">
        <p className="text-sm text-slate-600">Showing 1-5 of 47 transactions</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">← Previous</button>
          <button className="px-2 py-2 rounded-lg text-sm font-bold bg-violet-700 text-white">1</button>
          <button className="px-2 py-2 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">2</button>
          <button className="px-2 py-2 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">3</button>
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">Next →</button>
        </div>
      </div>
    </main>
  )
}

export default Transactions