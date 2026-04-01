const Budgets = () => {
  const budgets = [
    { id: 1, category: 'Comida', icon: '🛒', limit: 200, spent: 165, color: 'bg-lime-400' },
    { id: 2, category: 'Entretenimiento', icon: '🎮', limit: 80, spent: 45, color: 'bg-violet-700' },
    { id: 3, category: 'Transporte', icon: '🚌', limit: 70, spent: 65, color: 'bg-lime-400' },
    { id: 4, category: 'Materiales Escolares', icon: '📚', limit: 150, spent: 120, color: 'bg-violet-700' },
  ]

  return (
    <main className="ml-64 min-h-screen bg-slate-50 pt-24 pb-12 px-12">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-label font-bold text-violet-700 uppercase tracking-widest">Dinero Disponible</span>
            <h1 className="text-5xl font-black leading-none text-slate-900 mt-2">€1,245.50</h1>
            <div className="flex items-center gap-2 mt-4 text-lime-400 font-bold">
              <span>📈</span>
              <span>+6.8% desde el mes pasado</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-gradient-to-br from-violet-700 to-violet-600 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-violet-700/20">
              <span>➕</span> Agregar Dinero
            </button>
            <button className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 flex items-center gap-2 shadow-sm">
              <span>⬇️</span> Exportar
            </button>
          </div>
        </div>
      </section>

      {/* Budgets Progress Bars */}
      <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black">Presupuestos Mensuales</h2>
          <button className="text-violet-700 font-bold text-sm">Editar Todo →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {budgets.map((budget) => {
            const percent = (budget.spent / budget.limit * 100).toFixed(0)
            return (
              <div key={budget.id} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{budget.icon}</span>
                    <span className="font-bold">{budget.category}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-400">${budget.spent} / <span className="text-slate-900">${budget.limit}</span></span>
                </div>
                <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className={`h-full ${budget.color}`} style={{ width: `${percent}%` }}></div>
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