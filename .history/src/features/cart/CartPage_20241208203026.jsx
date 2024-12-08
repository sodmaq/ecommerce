import Navbar from "../../ui/Navbar";
import CartOverview from "./CartOverview";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "./CartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <>
      {location.pathname === "/cart" && <Navbar />}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-gray-100 p-6 rounded-md max-w-lg w-full">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
            Your Cart
          </h2>
          <CartOverview />
          <button
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </button>
          <button
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </button>
        </div>
      </div>
    </>
  );
}

export default CartPage;
