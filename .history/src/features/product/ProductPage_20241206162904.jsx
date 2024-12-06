import { useState } from "react";
import mockProducts from "./MockProduct";
import ProductCard from "../../ui/ProductCard";

function ProductPage() {
  const [products] = useState(mockProducts);
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
