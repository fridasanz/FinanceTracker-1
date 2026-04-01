const Dashboard = () => {
  return (
    <main className="ml-64 min-h-screen bg-slate-50">
      {/* TopAppBar */}
      <header className="w-full sticky top-0 bg-white shadow-sm flex justify-between items-center px-8 h-20 z-40">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-black tracking-tight text-slate-900">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
            🔔
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
            👤
          </button>
        </div>
      </header>

      {/* Canvas */}
      <div className="p-8 space-y-8">
        {/* Hero Stats Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Net Worth Card */}
          <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-sm flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <p className="text-slate-500 font-bold text-sm tracking-wider uppercase mb-2">Saldo Total</p>
              <div className="flex items-baseline gap-4">
                <h2 className="text-5xl font-extrabold tracking-tighter">€3,845.50</h2>
                <div className="flex items-center gap-1 bg-lime-400 text-slate-950 px-3 py-1 rounded-full">
                  <span className="text-sm">📈</span>
                  <span className="text-sm font-bold">+8.2%</span>
                </div>
              </div>
            </div>
            <div className="mt-8 text-slate-400 text-sm">Buen progreso en tu ahorro. ¡Sigue así!</div>
          </div>

          {/* Vertical Quick Stats Stack */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-lime-400">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">💚</div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ahorrado Este Mes</span>
              </div>
              <h3 className="text-2xl font-extrabold">€285.00</h3>
              <p className="text-sm text-slate-500 mt-1">Meta: <span className="font-bold">€500</span></p>
              <div className="w-full h-2 bg-slate-200 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-lime-400 w-3/5"></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-violet-700">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">📊</div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Gasto Mensual</span>
              </div>
              <h3 className="text-2xl font-extrabold">€950.00</h3>
              <p className="text-sm text-slate-500 mt-1">Disponible: <span className="font-bold">€125.50</span></p>
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-2 flex-grow bg-violet-700 rounded-full`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Renewal Alerts */}
        <div className="bg-violet-700 rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">🔄</div>
              <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">Próximo</span>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-extrabold">Próxima Renovación</h4>
              <p className="text-sm opacity-90 mt-1">Spotify Premium se renueva en <span className="font-bold">5 días</span>.</p>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <p className="font-black text-xl">€9.99 <span className="text-xs font-normal opacity-70">/mes</span></p>
                <button className="bg-white text-violet-700 px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors">Gestionar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard