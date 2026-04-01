const Subscriptions = () => {
  const subscriptions = [
    { id: 1, name: 'Spotify Premium', icon: '🎵', category: 'Music', cycle: 'Monthly', dueDate: 'Apr 12, 2026', amount: 9.99, active: true },
    { id: 2, name: 'Microsoft 365 Edu', icon: '💼', category: 'Software', cycle: 'Annual', dueDate: 'Sep 15, 2026', amount: 0.0, active: true },
    { id: 3, name: 'Netflix', icon: '🎬', category: 'Entertainment', cycle: 'Monthly', dueDate: 'Apr 20, 2026', amount: 12.99, active: true },
    { id: 4, name: 'Scribd Digital Library', icon: '📖', category: 'Education', cycle: 'Monthly', dueDate: 'Apr 28, 2026', amount: 14.99, active: false },
  ]

  return (
    <main className="min-h-screen bg-slate-50 pt-6 pb-12 px-4 lg:px-12">
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
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((sub) => (
                <tr key={sub.id} className="hover:bg-slate-50 transition-colors border-t border-slate-100">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-lg">
                        {sub.icon}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{sub.name}</div>
                        <div className="text-xs text-slate-400">{sub.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-slate-100 rounded text-xs font-bold">{sub.cycle}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-sm font-medium">{sub.dueDate}</div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="font-black">${sub.amount}</div>
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