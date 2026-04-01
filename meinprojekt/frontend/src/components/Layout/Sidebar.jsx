import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-100 flex flex-col py-6 space-y-2 z-50">
      <div className="text-2xl font-black text-violet-700 px-6 py-8">Kinetic Finance</div>
      <nav className="flex-grow flex flex-col space-y-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 mx-4 my-1 rounded-xl transition-all duration-200 ${
              isActive
                ? 'bg-lime-400 text-slate-950 font-bold shadow-lg shadow-lime-400/20'
                : 'text-slate-600 hover:bg-slate-50 hover:translate-x-1'
            }`
          }
        >
          <span className="text-xl">📊</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 mx-4 my-1 rounded-xl transition-all duration-200 ${
              isActive
                ? 'bg-lime-400 text-slate-950 font-bold shadow-lg shadow-lime-400/20'
                : 'text-slate-600 hover:bg-slate-50 hover:translate-x-1'
            }`
          }
        >
          <span className="text-xl">💰</span>
          <span>Transactions</span>
        </NavLink>

        <NavLink
          to="/budgets"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 mx-4 my-1 rounded-xl transition-all duration-200 ${
              isActive
                ? 'bg-lime-400 text-slate-950 font-bold shadow-lg shadow-lime-400/20'
                : 'text-slate-600 hover:bg-slate-50 hover:translate-x-1'
            }`
          }
        >
          <span className="text-xl">💳</span>
          <span>Budgets</span>
        </NavLink>

        <NavLink
          to="/subscriptions"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 mx-4 my-1 rounded-xl transition-all duration-200 ${
              isActive
                ? 'bg-lime-400 text-slate-950 font-bold shadow-lg shadow-lime-400/20'
                : 'text-slate-600 hover:bg-slate-50 hover:translate-x-1'
            }`
          }
        >
          <span className="text-xl">🔄</span>
          <span>Subscriptions</span>
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 mx-4 my-1 rounded-xl transition-all duration-200 ${
              isActive
                ? 'bg-lime-400 text-slate-950 font-bold shadow-lg shadow-lime-400/20'
                : 'text-slate-600 hover:bg-slate-50 hover:translate-x-1'
            }`
          }
        >
          <span className="text-xl">📈</span>
          <span>Reports</span>
        </NavLink>
      </nav>

      <div className="mt-8 px-6">
        <button className="w-full py-3 bg-violet-700 text-white rounded-xl font-bold shadow-lg shadow-violet-700/20 hover:scale-105 transition-transform duration-200">
          Add Money
        </button>
      </div>

      <footer className="mt-auto border-t border-slate-50 pt-4">
        <div className="text-slate-600 hover:bg-slate-50 rounded-xl mx-4 my-1 px-4 py-3 flex items-center gap-3 cursor-pointer transition-all duration-200">
          <span className="text-xl">⚙️</span>
          <span className="text-sm">Settings</span>
        </div>
        <div className="text-slate-600 hover:bg-slate-50 rounded-xl mx-4 my-1 px-4 py-3 flex items-center gap-3 cursor-pointer transition-all duration-200">
          <span className="text-xl">❓</span>
          <span className="text-sm">Support</span>
        </div>
      </footer>
    </aside>
  )
}

export default Sidebar