import { useState, useContext } from 'react'
import { AppContext } from '../App'

const Budgets = () => {
  const { budgets, addBudget, updateBudget, deleteBudget, getSpent } = useContext(AppContext)
  const [editing, setEditing] = useState(null)
  const [editLimit, setEditLimit] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const [useCustomCategory, setUseCustomCategory] = useState(false)
  const [newBudget, setNewBudget] = useState({ category: '', limit: '' })

  const handleEdit = (budget) => {
    setEditing(budget.id)
    setEditLimit(budget.limit.toString())
  }

  const handleSave = async (id) => {
    await updateBudget(id, { limit: parseFloat(editLimit) })
    setEditing(null)
  }

  const handleCancel = () => {
    setEditing(null)
  }

  const handleAdd = async () => {
    if (!newBudget.category || !newBudget.limit) {
      alert('Please fill all fields')
      return
    }
    await addBudget({ category: newBudget.category, limit: parseFloat(newBudget.limit) })
    setNewBudget({ category: '', limit: '' })
    setShowAdd(false)
  }

  const getIcon = (category) => {
    switch (category) {
      case 'Food': return '🛒'
      case 'Entertainment': return '🎮'
      case 'Transport': return '🚌'
      case 'School Supplies': return '📚'
      default: return '💰'
    }
  }

  const getColor = (category) => {
    switch (category) {
      case 'Food': return 'bg-lime-400'
      case 'Entertainment': return 'bg-violet-700'
      case 'Transport': return 'bg-lime-400'
      case 'School Supplies': return 'bg-violet-700'
      default: return 'bg-gray-400'
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-20 md:pt-24 pb-12 px-3 md:px-4 lg:px-12">
      {/* Hero Section */}
      <section className="mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
          <div>
            <span className="text-xs md:text-sm font-bold text-violet-700 uppercase tracking-widest">Available Money</span>
            <h1 className="text-3xl md:text-5xl font-black leading-none text-slate-900 mt-2">€1,245.50</h1>
            <div className="flex items-center gap-2 mt-3 md:mt-4 text-lime-400 font-bold text-sm md:text-base">
              <span>📈</span>
              <span>+6.8% from last month</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
            <button className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-br from-violet-700 to-violet-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-violet-700/20 text-sm md:text-base">
              <span>➕</span> Add Money
            </button>
            <button className="px-4 md:px-6 py-2 md:py-3 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 flex items-center justify-center gap-2 shadow-sm text-sm md:text-base">
              <span>⬇️</span> Export
            </button>
          </div>
        </div>
      </section>

      {/* Budgets Progress Bars */}
      <div className="bg-white rounded-2xl p-4 md:p-8 shadow-sm mb-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 md:gap-0 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-black">Monthly Budgets</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <button onClick={() => setShowAdd(!showAdd)} className="bg-violet-700 text-white px-3 md:px-4 py-2 rounded font-bold text-sm md:text-base hover:bg-violet-800">Add Budget</button>
            <button className="text-violet-700 font-bold text-xs md:text-sm">Edit All →</button>
          </div>
        </div>
        {showAdd && (
          <div className="mb-6 p-4 bg-slate-50 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <select
              value={useCustomCategory ? 'custom' : newBudget.category}
              onChange={(e) => {
                if (e.target.value === 'custom') {
                  setUseCustomCategory(true)
                  setNewBudget({...newBudget, category: ''})
                } else {
                  setUseCustomCategory(false)
                  setNewBudget({...newBudget, category: e.target.value})
                }
              }}
              className="px-3 py-2 border border-slate-200 rounded"
            >
              <option value="">Select Category</option>
              <option>Food</option>
              <option>Transport</option>
              <option>Education</option>
              <option>Entertainment</option>
              <option>Health</option>
              <option>Utilities</option>
              <option value="custom">+ Add Custom Category</option>
            </select>
            {useCustomCategory && (
              <input
                type="text"
                placeholder="Enter custom category"
                value={newBudget.category}
                onChange={(e) => setNewBudget({...newBudget, category: e.target.value})}
                className="px-3 py-2 border border-slate-200 rounded"
              />
            )}
            <input
              type="number"
              placeholder="Budget Limit"
              value={newBudget.limit}
              onChange={(e) => setNewBudget({...newBudget, limit: e.target.value})}
              className="px-3 py-2 border border-slate-200 rounded"
            />
            <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2 rounded font-medium hover:bg-green-600">Add Budget</button>
            <button onClick={() => {setShowAdd(false); setUseCustomCategory(false)}} className="bg-gray-400 text-white px-4 py-2 rounded font-medium hover:bg-gray-500">Cancel</button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-8">
          {budgets.map((budget) => {
            const spent = getSpent(budget.category)
            const percent = (spent / budget.limit * 100).toFixed(0)
            const icon = getIcon(budget.category)
            const color = getColor(budget.category)
            return (
              <div key={budget.id} className="space-y-3">
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-lg md:text-xl flex-shrink-0">{icon}</span>
                    <span className="font-bold text-sm md:text-base truncate">{budget.category}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {editing === budget.id ? (
                      <>
                        <input
                          type="number"
                          value={editLimit}
                          onChange={(e) => setEditLimit(e.target.value)}
                          className="w-16 md:w-20 px-2 py-1 border border-slate-200 rounded text-xs md:text-sm"
                        />
                        <button onClick={() => handleSave(budget.id)} className="text-green-600 text-xs md:text-sm font-bold">Save</button>
                        <button onClick={handleCancel} className="text-gray-600 text-xs md:text-sm font-bold">Cancel</button>
                        <button onClick={() => deleteBudget(budget.id)} className="text-red-600 text-xs md:text-sm font-bold">Delete</button>
                      </>
                    ) : (
                      <>
                        <span className="text-xs md:text-sm font-bold text-slate-400">${spent} / <span className="text-slate-900">${budget.limit}</span></span>
                        <button onClick={() => handleEdit(budget)} className="text-violet-600 text-xs md:text-sm font-bold">Edit</button>
                      </>
                    )}
                  </div>
                </div>
                <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className={`${color} transition-all duration-300`} style={{ width: `${Math.min(percent, 100)}%` }}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Budgets