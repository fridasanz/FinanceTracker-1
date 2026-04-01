import { useState, useContext } from 'react'
import { AppContext } from '../App'

const Subscriptions = () => {
  const { subscriptions, addSubscription, updateSubscription, deleteSubscription } = useContext(AppContext)
  const [showAdd, setShowAdd] = useState(false)
  const [editing, setEditing] = useState(null)
  const [newSub, setNewSub] = useState({
    name: '',
    amount: '',
    cycle: 'monthly',
    nextPaymentDate: new Date().toISOString().split('T')[0]
  })

  const handleAdd = async () => {
    if (!newSub.name || !newSub.amount) {
      alert('Please fill all fields')
      return
    }
    await addSubscription(newSub)
    setNewSub({
      name: '',
      amount: '',
      cycle: 'monthly',
      nextPaymentDate: new Date().toISOString().split('T')[0]
    })
    setShowAdd(false)
  }

  const handleEdit = (sub) => {
    setEditing(sub)
    setNewSub({ ...sub })
    setShowAdd(true)
  }

  const handleSave = async () => {
    if (!newSub.name || !newSub.amount) {
      alert('Please fill all fields')
      return
    }
    await updateSubscription(editing.id, newSub)
    setEditing(null)
    setNewSub({
      name: '',
      amount: '',
      cycle: 'monthly',
      nextPaymentDate: new Date().toISOString().split('T')[0]
    })
    setShowAdd(false)
  }

  const handleCancel = () => {
    setShowAdd(false)
    setEditing(null)
    setNewSub({
      name: '',
      amount: '',
      cycle: 'monthly',
      nextPaymentDate: new Date().toISOString().split('T')[0]
    })
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-20 md:pt-24 pb-12 px-3 md:px-4 lg:px-12">
      {/* Hero Section */}
      <header className="mb-12">
        <div className="relative overflow-hidden bg-gradient-to-br from-violet-700 to-violet-600 rounded-xl p-8 shadow-xl">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">Potential Savings</h1>
              <p className="text-white/90 font-medium text-lg max-w-md">We've identified subscriptions you could optimize. By canceling inactive services, you could save €14.99 monthly.</p>
            </div>
            <div className="flex md:justify-end">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl text-center">
                <span className="text-lime-400 text-5xl font-black block mb-2">€14.99</span>
                <span className="text-white/80 text-sm font-bold tracking-widest uppercase">Savable Monthly</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Add Subscription Button */}
      <div className="mb-8">
        <button 
          onClick={() => setShowAdd(!showAdd)}
          className="bg-violet-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-violet-800 transition-colors"
        >
          {showAdd ? 'Cancel' : '+ Add Subscription'}
        </button>
      </div>

      {/* Add/Edit Subscription Form */}
      {showAdd && (
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-4">{editing ? 'Edit Subscription' : 'Add New Subscription'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newSub.name}
              onChange={(e) => setNewSub({...newSub, name: e.target.value})}
              className="px-4 py-2 border border-slate-200 rounded-lg"
            />
            <input
              type="number"
              placeholder="Amount"
              value={newSub.amount}
              onChange={(e) => setNewSub({...newSub, amount: e.target.value})}
              className="px-4 py-2 border border-slate-200 rounded-lg"
            />
            <select
              value={newSub.cycle}
              onChange={(e) => setNewSub({...newSub, cycle: e.target.value})}
              className="px-4 py-2 border border-slate-200 rounded-lg"
            >
              <option value="monthly">Monthly</option>
              <option value="annual">Annual</option>
            </select>
            <input
              type="date"
              value={newSub.nextPaymentDate}
              onChange={(e) => setNewSub({...newSub, nextPaymentDate: e.target.value})}
              className="px-4 py-2 border border-slate-200 rounded-lg"
            />
          </div>
          <button 
            onClick={editing ? handleSave : handleAdd}
            className="mt-4 bg-lime-400 text-slate-950 px-6 py-2 rounded-lg font-bold hover:bg-lime-500 transition-colors"
          >
            {editing ? 'Save Changes' : 'Add Subscription'}
          </button>
          <button 
            onClick={handleCancel}
            className="mt-4 ml-4 bg-gray-400 text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-500 transition-colors"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Portfolio Table */}
      <section className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-200">
          <h2 className="text-2xl font-black">My Subscriptions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-slate-400 text-xs font-black uppercase tracking-wider bg-slate-50">
                <th className="px-8 py-6">Service</th>
                <th className="px-8 py-6">Period</th>
                <th className="px-8 py-6">Next Renewal</th>
                <th className="px-8 py-6 text-right">Amount</th>
                <th className="px-8 py-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((sub) => (
                <tr key={sub.id} className="hover:bg-slate-50 transition-colors border-t border-slate-100">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-lg">
                        🎵
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{sub.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-slate-100 rounded text-xs font-bold">{sub.cycle}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-sm font-medium">{new Date(sub.nextPaymentDate).toLocaleDateString()}</div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="font-black">${sub.amount}</div>
                  </td>
                  <td className="px-8 py-6">
                    <button 
                      onClick={() => handleEdit(sub)}
                      className="text-blue-500 hover:text-blue-700 font-medium mr-2"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => deleteSubscription(sub.id)}
                      className="text-red-500 hover:text-red-700 font-medium"
                    >
                      Cancel Subscription
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Subscriptions