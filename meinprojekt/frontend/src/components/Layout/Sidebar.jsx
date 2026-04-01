import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">FinanceTrack</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>
              Dashboard
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/transactions" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>
              Transactions
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/budgets" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>
              Budgets
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/subscriptions" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>
              Subscriptions
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/reports" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>
              Reports
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar