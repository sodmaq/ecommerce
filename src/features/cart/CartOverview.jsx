import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCart } from "./CartSlice";

function CartOverview() {
  const cartItems = useSelector(getCart);

  return (
    <div className="space-y-4 mt-8">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartOverview;
