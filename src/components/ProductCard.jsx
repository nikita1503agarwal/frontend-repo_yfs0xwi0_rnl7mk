function ProductCard({ product, onAdd }) {
  return (
    <div className="group bg-white rounded-xl border hover:shadow-md transition overflow-hidden">
      <div className="aspect-square bg-gray-100 grid place-items-center">
        <img src={product.image} alt={product.title} className="max-h-full" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 line-clamp-1">{product.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={() => onAdd(product)}
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
