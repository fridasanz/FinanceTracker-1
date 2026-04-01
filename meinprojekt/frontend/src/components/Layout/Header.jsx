const Header = () => {
  return (
    <header className="fixed top-0 left-64 right-0 bg-white border-b border-slate-200 flex justify-between items-center px-8 h-20 z-40 shadow-sm">
      <div className="flex items-center gap-4">
        <input
          type="search"
          placeholder="Search transactions..."
          className="px-4 py-2 w-80 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-violet-700"
        />
      </div>
      <div className="flex items-center gap-6">
        <button className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
          🔔
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
          ⚙️
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-700 to-lime-400 flex items-center justify-center text-white font-bold text-sm">
          FT
        </div>
      </div>
    </header>
  )
}

export default Header