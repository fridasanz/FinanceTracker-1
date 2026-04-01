import { NavLink } from 'react-router-dom'

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsOpen(false)}></div>}
      <aside className={`fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-violet-600 to-fuchsia-500 flex flex-col py-6 space-y-2 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300`}>
        <div className="text-2xl font-black text-white px-6 py-8">Kinetic Finance</div>
        <nav className="flex-grow flex flex-col space-y-1">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mx-4 my-1 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-white text-violet-600 font-bold shadow-lg'
                  : 'text-white hover:bg-white/20 hover:translate-x-1'
              }`
            }
          >
            <span className="text-xl">🏠</span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/transactions"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mx-4 my-1 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-white text-violet-600 font-bold shadow-lg'
                  : 'text-white hover:bg-white/20 hover:translate-x-1'
              }`
            }
          >
            <span className="text-xl">💸</span>
            <span>Transactions</span>
          </NavLink>

          <NavLink
            to="/budgets"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mx-4 my-1 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-white text-violet-600 font-bold shadow-lg'
                  : 'text-white hover:bg-white/20 hover:translate-x-1'
              }`
            }
          >
            <span className="text-xl">🎯</span>
            <span>Budgets</span>
          </NavLink>

          <NavLink
            to="/subscriptions"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mx-4 my-1 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-white text-violet-600 font-bold shadow-lg'
                  : 'text-white hover:bg-white/20 hover:translate-x-1'
              }`
            }
          >
            <span className="text-xl">📱</span>
            <span>Subscriptions</span>
          </NavLink>

          <NavLink
            to="/reports"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mx-4 my-1 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-white text-violet-600 font-bold shadow-lg'
                  : 'text-white hover:bg-white/20 hover:translate-x-1'
              }`
            }
          >
            <span className="text-xl">📊</span>
            <span>Reports</span>
          </NavLink>
        </nav>

        <footer className="mt-auto border-t border-white/20 pt-4">
          <div className="text-white hover:bg-white/20 rounded-xl mx-4 my-1 px-4 py-3 flex items-center gap-3 cursor-pointer transition-all duration-200">
            <span className="text-xl">⚙️</span>
            <span className="text-sm">Settings</span>
          </div>
        </footer>
      </aside>
    </>
  )
}

export default Sidebar