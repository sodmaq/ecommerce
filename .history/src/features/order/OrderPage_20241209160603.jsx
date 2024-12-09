import Navbar from "../../ui/Navbar";
import OrderForm from "./OrderForm";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getCart,
  getTotalCartPrice,
  clearCart,
} from "../../features/cart/CartSlice";

function OrderPage() {
  const location = useLocation();

  // Fetch cart data and total price from Redux store
  const cartItems = useSelector(getCart); // Get all cart items
  const totalPrice = useSelector(getTotalCartPrice); // Get total cart price

  return (
    <>
      {location.pathname === "/order" && <Navbar />}
      <div>
        <div className="font-[sans-serif] bg-white">
          <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
            <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
              <div className="relative h-full">
                <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                  <div className="space-y-4">
                    {cartItems.length === 0 ? (
                      <p className="text-white">Your cart is empty.</p>
                    ) : (
                      cartItems.map((item) => (
                        <div key={item.id} className="flex items-start gap-4">
                          <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                            <img
                              src={item.image} // Dynamically load image
                              alt={item.name}
                              className="w-full object-contain"
                            />
                          </div>
                          <div className="w-full">
                            <h3 className="text-base text-white">
                              {item.name}
                            </h3>
                            <ul className="text-xs text-gray-300 space-y-2 mt-2">
                              <li className="flex flex-wrap gap-4">
                                Quantity{" "}
                                <span className="ml-auto">{item.quantity}</span>
                              </li>
                              <li className="flex flex-wrap gap-4">
                                Total Price{" "}
                                <span className="ml-auto">
                                  ${item.totalPrice.toFixed(2)}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
                  <h4 className="flex flex-wrap gap-4 text-base text-white">
                    Total{" "}
                    <span className="ml-auto">${totalPrice.toFixed(2)}</span>
                  </h4>
                </div>
              </div>
            </div>

            <OrderForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPage;
