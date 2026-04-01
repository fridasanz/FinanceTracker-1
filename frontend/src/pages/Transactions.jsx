import { useState, useContext } from 'react'
import { AppContext } from '../App'

const Transactions = () => {
  const { transactions, addTransaction, updateTransaction, deleteTransaction } = useContext(AppContext)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(null)
  const [useCustomCategory, setUseCustomCategory] = useState(false)
  const [newTransaction, setNewTransaction] = useState({
    title: '',
    category: 'Food',
    type: 'expense',
    amount: '',
    date: new Date().toISOString().split('T')[0]
  })

  const handleSaveTransaction = async () => {
    if (!newTransaction.title || !newTransaction.amount) {
      alert('Please fill all fields')
      return
    }
    if (editing) {
      await updateTransaction(editing.id, newTransaction)
      setEditing(null)
    } else {
      await addTransaction(newTransaction)
    }
    setNewTransaction({
      title: '',
      category: 'Food',
      type: 'expense',
      amount: '',
      date: new Date().toISOString().split('T')[0]
    })
    setShowForm(false)
  }

  const handleEdit = (txn) => {
    setEditing(txn)
    setNewTransaction({ ...txn })
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditing(null)
    setNewTransaction({
      title: '',
      category: 'Food',
      type: 'expense',
      amount: '',
      date: new Date().toISOString().split('T')[0]
    })
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
    <main className="min-h-screen bg-slate-50 pt-20 md:pt-24 pb-12 px-3 md:px-4 lg:px-12">
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
        <div className="mb-8 bg-white p-4 md:p-6 rounded-xl shadow-sm">
          <h3 className="text-lg md:text-xl font-bold mb-4">Add New Transaction</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <input
              type="text"
              placeholder="Description"
              value={newTransaction.title}
              onChange={(e) => setNewTransaction({...newTransaction, title: e.target.value})}
              className="px-3 md:px-4 py-2 border border-slate-200 rounded-lg text-sm md:text-base"
            />
            <select
              value={newTransaction.category}
              onChange={(e) => {
                if (e.target.value === 'custom') {
                  setUseCustomCategory(true)
                  setNewTransaction({...newTransaction, category: ''})
                } else {
                  setNewTransaction({...newTransaction, category: e.target.value})
                }
              }}
              className="px-3 md:px-4 py-2 border border-slate-200 rounded-lg text-sm md:text-base"
            >
              {!useCustomCategory && (
                <>
                  <option>Food</option>
                  <option>Transport</option>
                  <option>Education</option>
                  <option>Entertainment</option>
                  <option>Salary</option>
                  <option value="custom">+ Add Custom Category</option>
                </>
              )}
            </select>
            {useCustomCategory && (
              <>
                <input
                  type="text"
                  placeholder="Enter custom category"
                  value={newTransaction.category}
                  onChange={(e) => setNewTransaction({...newTransaction, category: e.target.value})}
                  className="px-3 md:px-4 py-2 border border-slate-200 rounded-lg text-sm md:text-base sm:col-span-2"
                />
                <button
                  onClick={() => setUseCustomCategory(false)}
                  className="px-3 md:px-4 py-2 bg-gray-200 rounded-lg font-medium text-sm md:text-base hover:bg-gray-300 sm:col-span-2"
                >
                  Use Preset
                </button>
              </>
            )}
            <select
              value={newTransaction.type}
              onChange={(e) => setNewTransaction({...newTransaction, type: e.target.value})}
              className="px-3 md:px-4 py-2 border border-slate-200 rounded-lg text-sm md:text-base"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
            <input
              type="number"
              placeholder="Amount"
              value={newTransaction.amount}
              onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})}
              className="px-3 md:px-4 py-2 border border-slate-200 rounded-lg text-sm md:text-base"
            />
            <input
              type="date"
              value={newTransaction.date}
              onChange={(e) => setNewTransaction({...newTransaction, date: e.target.value})}
              className="px-3 md:px-4 py-2 border border-slate-200 rounded-lg text-sm md:text-base"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <button 
              onClick={handleSaveTransaction}
              className="flex-1 bg-lime-400 text-slate-950 px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold hover:bg-lime-500 transition-colors text-sm md:text-base"
            >
              {editing ? 'Save Changes' : 'Add Transaction'}
            </button>
            <button 
              onClick={handleCancel}
              className="flex-1 bg-gray-400 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold hover:bg-gray-500 transition-colors text-sm md:text-base"
            >
              Cancel
            </button>
          </div>
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
          <table className="w-full text-left border-collapse min-w-full">
            <thead>
              <tr className="text-slate-400 text-xs font-black uppercase tracking-wider bg-slate-50">
                <th className="px-4 md:px-8 py-4 md:py-6">Description</th>
                <th className="px-4 md:px-8 py-4 md:py-6 hidden sm:table-cell">Category</th>
                <th className="px-4 md:px-8 py-4 md:py-6 hidden md:table-cell">Date</th>
                <th className="px-4 md:px-8 py-4 md:py-6 text-right">Amount</th>
                <th className="px-4 md:px-8 py-4 md:py-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-slate-50 transition-colors border-t border-slate-100">
                  <td className="px-4 md:px-8 py-4 md:py-6">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-slate-100 flex items-center justify-center text-sm md:text-lg flex-shrink-0">
                        {getIcon(txn)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 truncate text-sm md:text-base">{txn.title}</div>
                        <div className="text-xs text-slate-400 hidden sm:block">ID: {String(txn.id).padStart(6, '0')}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 md:px-8 py-4 md:py-6 hidden sm:table-cell">
                    <span className="px-2 md:px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-700">{txn.category}</span>
                  </td>
                  <td className="px-4 md:px-8 py-4 md:py-6 text-slate-600 text-xs md:text-sm font-medium hidden md:table-cell">{new Date(txn.date).toLocaleDateString()}</td>
                  <td className="px-4 md:px-8 py-4 md:py-6 text-right">
                    <div className={`font-black text-sm md:text-lg ${
                      txn.type === 'income' ? 'text-lime-400' : 'text-slate-900'
                    }`}>
                      {txn.type === 'income' ? '+' : '-'}${Math.abs(txn.amount).toFixed(2)}
                    </div>
                  </td>
                  <td className="px-4 md:px-8 py-4 md:py-6">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button 
                        onClick={() => handleEdit(txn)}
                        className="text-blue-500 hover:text-blue-700 font-medium text-xs md:text-sm"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => {
                          console.log('Deleting transaction:', txn.id)
                          deleteTransaction(txn.id)
                        }}
                        className="text-red-500 hover:text-red-700 font-medium text-xs md:text-sm"
                      >
                        Delete
                      </button>
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