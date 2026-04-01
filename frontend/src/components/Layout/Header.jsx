const Header = () => {
  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 bg-white border-b border-slate-200 flex justify-between items-center px-3 md:px-6 lg:px-8 h-16 md:h-20 z-40 shadow-sm">
      <div className="flex items-center gap-2 md:gap-4 flex-1 lg:flex-none">
        <input
          type="search"
          placeholder="Search..."
          className="px-2 md:px-4 py-1 md:py-2 w-full md:w-80 bg-slate-50 border border-slate-200 rounded-lg text-xs md:text-sm focus:outline-none focus:border-violet-700"
        />
      </div>
      <div className="flex items-center gap-3 md:gap-6">
        <button className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-full transition-colors text-sm md:text-base">
          🔔
        </button>
        <button className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-full transition-colors text-sm md:text-base">
          ⚙️
        </button>
        <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-gradient-to-br from-violet-700 to-lime-400 flex items-center justify-center text-white font-bold text-xs md:text-sm">
          FT
        </div>
      </div>
    </header>
  )
}

export default Header