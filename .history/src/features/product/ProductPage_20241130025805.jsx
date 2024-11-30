import { useState } from "react";
import mockProducts from "./MockProduct";

function ProductPage() {
  const [product] = useState(mockProducts);
  return <div></div>;
}

export default ProductPage;
