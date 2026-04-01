const Transactions = () => {
  const transactions = [
    { id: 1, icon: '�', title: 'Pizzería Stefano', category: 'Comida', type: 'expense', amount: -8.50, date: '2024-01-15', status: 'completed' },
    { id: 2, icon: '🚌', title: 'BVB Transporte Mensual', category: 'Transporte', type: 'expense', amount: -65.00, date: '2024-01-14', status: 'completed' },
    { id: 3, icon: '💵', title: 'Ingreso Trabajo Part-time', category: 'Ingresos', type: 'income', amount: +850.00, date: '2024-01-12', status: 'completed' },
    { id: 4, icon: '🛒', title: 'Kaufland Supermercado', category: 'Comida', type: 'expense', amount: -32.80, date: '2024-01-11', status: 'completed' },
    { id: 5, icon: '📚', title: 'Librería Universitaria', category: 'Educación', type: 'expense', amount: -45.00, date: '2024-01-10', status: 'completed' },
  ]

  return (
    <main className="ml-64 min-h-screen bg-slate-50 pt-24 pb-12 px-12">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-black text-slate-900">Transacciones</h1>
        <p className="text-slate-600 mt-2">Tu historial de gastos e ingresos recientes</p>
      </header>

      {/* Filters */}
      <div className="mb-8 flex gap-4">
        <select className="px-4 py-2 bg-white border border-slate-200 rounded-lg font-medium text-sm">
          <option>Todas las Categorías</option>
          <option>Ingresos</option>
          <option>Comida</option>
          <option>Transporte</option>
          <option>Educación</option>
          <option>Entretenimiento</option>
        </select>
        <select className="px-4 py-2 bg-white border border-slate-200 rounded-lg font-medium text-sm">
          <option>Todo el Tiempo</option>
          <option>Este Mes</option>
          <option>Mes Pasado</option>
          <option>Últimos 3 Meses</option>
        </select>
      </div>

      {/* Transactions Table */}
      <section className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-slate-400 text-xs font-black uppercase tracking-wider bg-slate-50">
                <th className="px-8 py-6">Descripción</th>
                <th className="px-8 py-6">Categoría</th>
                <th className="px-8 py-6">Fecha</th>
                <th className="px-8 py-6 text-right">Monto</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-slate-50 transition-colors border-t border-slate-100">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-lg">
                        {txn.icon}
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
        <p className="text-sm text-slate-600">Mostrando 1-5 de 47 transacciones</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">← Anterior</button>
          <button className="px-2 py-2 rounded-lg text-sm font-bold bg-violet-700 text-white">1</button>
          <button className="px-2 py-2 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">2</button>
          <button className="px-2 py-2 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">3</button>
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">Siguiente →</button>
        </div>
      </div>
    </main>
  )
}

export default Transactions