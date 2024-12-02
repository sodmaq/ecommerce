import { GiLoveHowl } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/CartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
      <div className="p-6">
        {/* Wishlist Icon */}
        <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <GiLoveHowl className="fill-gray-800 inline-block" />
        </div>

        {/* Product Image */}
        <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center bg-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <h4 className="text-lg text-gray-800 font-bold mt-6">
          ${product.price.toFixed(2)}{" "}
          <strike className="text-gray-400 ml-2 font-medium">
            ${product.oldPrice.toFixed()}
          </strike>
        </h4>

        {/* Add to Cart Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-400 text-base text-gray-800 font-semibold rounded-xl"
        >
          <TiShoppingCart
            className="fill-gray-800 inline-block"
            onClick={() => dispatch(addItem(product))}
          />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
