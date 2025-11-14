import { X } from 'lucide-react'

function CartDrawer({ open, items, onClose, onChangeQty, onRemove }) {
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0)

  return (
    <div className={`fixed inset-0 z-30 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button className="p-2 rounded hover:bg-gray-100" onClick={onClose} aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-9rem)]">
          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-3">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain bg-gray-100 rounded" />
                <div className="flex-1">
                  <h3 className="font-medium line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="px-2 py-1 rounded bg-gray-100" onClick={() => onChangeQty(item.id, Math.max(1, item.qty - 1))}>-</button>
                    <span className="w-8 text-center">{item.qty}</span>
                    <button className="px-2 py-1 rounded bg-gray-100" onClick={() => onChangeQty(item.id, item.qty + 1)}>+</button>
                    <button className="ml-auto text-red-600 text-sm" onClick={() => onRemove(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartDrawer
