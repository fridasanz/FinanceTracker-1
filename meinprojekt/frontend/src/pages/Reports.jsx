const Reports = () => {
  const categoryData = [
    { name: 'Comida', icon: '🛒', amount: 165.00, momentum: -5, status: 'ÓPTIMO' },
    { name: 'Transporte', icon: '🚌', amount: 65.00, momentum: 0, status: 'ESTABLE' },
    { name: 'Entretenimiento', icon: '🎮', amount: 45.50, momentum: 3, status: 'SOBRE PRESUPUESTO' },
    { name: 'Educación', icon: '📚', amount: 120.00, momentum: -2, status: 'PLANIFICADO' },
  ]

  return (
    <main className="ml-64 min-h-screen bg-slate-50 pt-24 p-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight leading-none">
              Gestionando el presupuesto <span className="text-lime-400 italic">inteligentemente.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Este mes has mantenido tus gastos bajo control. Reduciendo gastos discrecionales un 8%, tu tasa de ahorro ha mejorado significativamente. ¡Muy bien!
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-end">
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Puntuación Financiera</span>
              <div className="text-4xl font-black text-violet-700">72.5</div>
              <div className="flex items-center text-lime-400 font-bold text-sm mt-1">
                <span>📈</span>
                <span className="ml-1">+3.2% vs Marzo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {categoryData.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-violet-700/10">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-slate-100 p-2 rounded-lg text-2xl">{item.icon}</div>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                item.momentum < 0 ? 'bg-lime-400/20 text-lime-600' : item.momentum > 0 ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600'
              }`}>
                {item.momentum < 0 ? '-' : item.momentum > 0 ? '+' : ''}  {Math.abs(item.momentum)}%
              </span>
            </div>
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{item.name}</h4>
            <div className="text-2xl font-black text-slate-900 mb-4">${item.amount}</div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>MOMENTUM</span>
                <span>{item.status}</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-violet-700 h-full rounded-full" style={{ width: `${Math.random() * 100}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Insights Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-violet-700 to-violet-600 rounded-2xl p-10 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-4">¡Tú puedes!</h3>
            <p className="text-violet-100 mb-8 max-w-sm">Si ahorras €50 más al mes, alcanzarás tu meta de €500 en apenas 8 meses. Está a tu alcance.</p>
            <button className="bg-lime-400 text-slate-950 px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
              <span>Ver Mi Progreso</span>
              <span>⚡</span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 border border-slate-200">
          <h3 className="text-xl font-black mb-6">Consejos Útiles</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1 bg-lime-400 rounded-full"></div>
              <div>
                <p className="text-sm font-bold text-slate-900">Revisa tus suscripciones</p>
                <p className="text-xs text-slate-600">Tienes 1 servicio inactivo (Scribd) que cuesta €14.99/mes. Considéra cancelarlo si no lo usas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-violet-700 rounded-full"></div>
              <div>
                <p className="text-sm font-bold text-slate-900">Aumenta tu fondo de emergencia</p>
                <p className="text-xs text-slate-600">Intenta tener ahorrado al menos 2-3 meses de gastos. Ahora tienes suficiente para 4 meses. ¡Excelente!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Reports