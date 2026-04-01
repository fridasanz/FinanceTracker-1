import { useState, useEffect } from 'react'
import axios from 'axios'

const Budgets = () => {
  const [budgets, setBudgets] = useState([])
  const [editing, setEditing] = useState(null)
  const [editLimit, setEditLimit] = useState('')

  useEffect(() => {
    fetchBudgets()
  }, [])

  const fetchBudgets = async () => {
    try {
      const response = await axios.get('/api/budgets')
      setBudgets(response.data)
    } catch (error) {
      console.error('Error fetching budgets:', error)
    }
  }

  const handleEdit = (budget) => {
    setEditing(budget.id)
    setEditLimit(budget.limit.toString())
  }

  const handleSave = async (id) => {
    try {
      await axios.put(`/api/budgets/${id}`, { limit: parseFloat(editLimit) })
      setEditing(null)
      fetchBudgets()
    } catch (error) {
      console.error('Error updating budget:', error)
    }
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
    <main className="min-h-screen bg-slate-50 pt-6 pb-12 px-4 lg:px-12">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-label font-bold text-violet-700 uppercase tracking-widest">Available Money</span>
            <h1 className="text-5xl font-black leading-none text-slate-900 mt-2">€1,245.50</h1>
            <div className="flex items-center gap-2 mt-4 text-lime-400 font-bold">
              <span>📈</span>
              <span>+6.8% from last month</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-gradient-to-br from-violet-700 to-violet-600 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-violet-700/20">
              <span>➕</span> Add Money
            </button>
            <button className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 flex items-center gap-2 shadow-sm">
              <span>⬇️</span> Export
            </button>
          </div>
        </div>
      </section>

      {/* Budgets Progress Bars */}
      <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black">Monthly Budgets</h2>
          <button className="text-violet-700 font-bold text-sm">Edit All →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {budgets.map((budget) => {
            const percent = (budget.spent / budget.limit * 100).toFixed(0)
            const icon = getIcon(budget.category)
            const color = getColor(budget.category)
            return (
              <div key={budget.id} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{icon}</span>
                    <span className="font-bold">{budget.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {editing === budget.id ? (
                      <>
                        <input
                          type="number"
                          value={editLimit}
                          onChange={(e) => setEditLimit(e.target.value)}
                          className="w-20 px-2 py-1 border border-slate-200 rounded"
                        />
                        <button onClick={() => handleSave(budget.id)} className="text-green-600">Save</button>
                        <button onClick={handleCancel} className="text-red-600">Cancel</button>
                      </>
                    ) : (
                      <>
                        <span className="text-sm font-bold text-slate-400">${budget.spent} / <span className="text-slate-900">${budget.limit}</span></span>
                        <button onClick={() => handleEdit(budget)} className="text-violet-600 text-sm">Edit</button>
                      </>
                    )}
                  </div>
                </div>
                <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className={`${color}`} style={{ width: `${percent}%` }}></div>
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