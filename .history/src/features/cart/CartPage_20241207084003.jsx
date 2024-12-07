import CartOverview from "./CartOverview";
import { useLocation } from "react-router-dom";

function CartPage() {
  return (
    <>
      {location.pathname === "/products" && <Navbar />}
      <div className="font-sans max-w-6xl max-lg:max-w-2xl mx-auto bg-white p-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-100 p-6 rounded-md">
              <h2 className="text-2xl font-extrabold text-gray-800">
                Your Cart
              </h2>
              <CartOverview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
