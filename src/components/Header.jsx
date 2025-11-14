import { ShoppingCart, Search, Menu } from 'lucide-react'

function Header({ cartCount, onToggleCart, onToggleSidebar }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="text-xl font-bold tracking-tight">Sape Shop</span>
        </div>

        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search products"
            className="bg-transparent outline-none px-2 w-full text-sm"
          />
        </div>

        <button
          className="relative p-2 rounded-lg hover:bg-gray-100"
          onClick={onToggleCart}
          aria-label="Open cart"
        >
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] leading-4 font-semibold rounded-full w-5 h-5 grid place-items-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}

export default Header
