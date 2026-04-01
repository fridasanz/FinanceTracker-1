import { useContext } from 'react'
import { AppContext } from '../App'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Dashboard = () => {
  const { transactions, subscriptions } = useContext(AppContext)

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0)

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0)

  const totalBalance = totalIncome - totalExpenses

  const totalSubscriptions = subscriptions
    .reduce((sum, s) => sum + parseFloat(s.amount), 0)

  const chartData = [
    { month: 'Jan', balance: 2500 },
    { month: 'Feb', balance: 2800 },
    { month: 'Mar', balance: 3200 },
    { month: 'Apr', balance: 3500 },
    { month: 'May', balance: 3800 },
    { month: 'Jun', balance: totalBalance + 4000 }
  ]

  const lastTransactions = [...transactions].reverse().slice(0, 5)

  const today = new Date()
  const upcomingPayments = subscriptions.filter(s => {
    const paymentDate = new Date(s.nextPaymentDate)
    const daysUntilPayment = Math.ceil((paymentDate - today) / (1000 * 60 * 60 * 24))
    return daysUntilPayment <= 7 && daysUntilPayment >= 0
  })

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-6 pb-12 px-4 lg:px-12">
      <header className="mb-12">
        <h1 className="text-4xl font-black text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-2">Welcome back! Here's your financial overview.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Balance</p>
              <h3 className="text-3xl font-extrabold text-slate-900">€{totalBalance.toFixed(2)}</h3>
            </div>
            <span className="text-3xl">💰</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Income</p>
              <h3 className="text-3xl font-extrabold text-green-600">€{totalIncome.toFixed(2)}</h3>
            </div>
            <span className="text-3xl">📈</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Expenses</p>
              <h3 className="text-3xl font-extrabold text-red-600">€{totalExpenses.toFixed(2)}</h3>
            </div>
            <span className="text-3xl">📉</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Subscriptions</p>
              <h3 className="text-3xl font-extrabold text-purple-600">€{totalSubscriptions.toFixed(2)}</h3>
            </div>
            <span className="text-3xl">📱</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <h2 className="text-2xl font-black mb-6">Balance Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }} />
            <Area type="monotone" dataKey="balance" stroke="#7c3aed" fillOpacity={1} fill="url(#colorBalance)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-black mb-6">Recent Transactions</h2>
          <div className="space-y-4">
            {lastTransactions.length === 0 ? (
              <p className="text-slate-500 text-center py-8">No transactions yet</p>
            ) : (
              lastTransactions.map(t => (
                <div key={t.id} className={`flex justify-between items-center p-4 rounded-lg ${t.type === 'income' ? 'bg-green-50' : 'bg-red-50'}`}>
                  <div>
                    <p className={`font-bold ${t.type === 'income' ? 'text-green-900' : 'text-red-900'}`}>{t.title}</p>
                    <p className="text-xs text-slate-600">{new Date(t.date).toLocaleDateString()}</p>
                  </div>
                  <p className={`font-black text-lg ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                    {t.type === 'income' ? '+' : '-'}€{Math.abs(parseFloat(t.amount)).toFixed(2)}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-black mb-6">Upcoming Payments</h2>
          <div className="space-y-4">
            {upcomingPayments.length === 0 ? (
              <p className="text-slate-500 text-center py-8">No upcoming payments this week</p>
            ) : (
              upcomingPayments.map(s => {
                const paymentDate = new Date(s.nextPaymentDate)
                const daysUntilPayment = Math.ceil((paymentDate - today) / (1000 * 60 * 60 * 24))
                return (
                  <div key={s.id} className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-yellow-900">{s.name}</p>
                        <p className="text-xs text-yellow-700">{daysUntilPayment} days remaining</p>
                      </div>
                      <p className="font-black text-yellow-600">€{parseFloat(s.amount).toFixed(2)}</p>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard