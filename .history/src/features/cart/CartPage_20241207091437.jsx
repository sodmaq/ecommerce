import Navbar from "../../ui/Navbar";
import CartOverview from "./CartOverview";
import { useLocation } from "react-router-dom";

function CartPage() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/cart" && <Navbar />}
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-gray-100 p-6 rounded-md max-w-lg w-full">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
            Your Cart
          </h2>
          <CartOverview />
        </div>
      </div>
    </>
  );
}

export default CartPage;
