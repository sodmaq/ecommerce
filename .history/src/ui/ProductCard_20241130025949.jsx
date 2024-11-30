function ProductCard({ product }) {
  return (
    <div>
      <div className="border rounded-lg shadow-lg p-4 w-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h2 className="text-lg font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
