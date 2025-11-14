import { useMemo, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProductCard from './components/ProductCard'
import CartDrawer from './components/CartDrawer'

function App() {
  // Mock products (static for demo)
  const products = useMemo(() => [
    {
      id: 'p1',
      title: 'Wireless Headphones',
      description: 'Noise-cancelling over‑ear headphones with 30h battery life.',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaXJlbGVzcyUyMEhlYWRwaG9uZXN8ZW58MHwwfHx8MTc2MzA5MzgyNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      id: 'p2',
      title: 'Smart Watch',
      description: 'Track fitness, sleep, and notifications with a bright OLED.',
      price: 89.0,
      image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'p3',
      title: 'Mechanical Keyboard',
      description: 'Tactile switches, RGB backlight, and aluminum case.',
      price: 149.5,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'p4',
      title: '4K Monitor 27"',
      description: 'Ultra‑sharp IPS panel with 99% sRGB coverage.',
      price: 329.99,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'p5',
      title: 'Portable Speaker',
      description: 'Waterproof Bluetooth speaker with punchy bass.',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1598327106026-d9521da673d1?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'p6',
      title: 'Gaming Mouse',
      description: 'Lightweight, 8K polling, customizable buttons.',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop',
    },
  ], [])

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id)
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const handleChangeQty = (id, qty) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)))
  }

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id))
  }

  const cartCount = cart.reduce((sum, it) => sum + it.qty, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <Header
        cartCount={cartCount}
        onToggleCart={() => setCartOpen((s) => !s)}
        onToggleSidebar={() => setSidebarOpen((s) => !s)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <Sidebar open={sidebarOpen} />

          <main className="flex-1 pt-6 pb-12">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Products</h1>
                <p className="text-gray-500 text-sm mt-1">Browse and add to your cart</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={handleAddToCart} />
              ))}
            </div>
          </main>
        </div>
      </div>

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onChangeQty={handleChangeQty}
        onRemove={handleRemove}
      />
    </div>
  )
}

export default App
