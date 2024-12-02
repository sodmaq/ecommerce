import CartItem from "./CartItem";

function CartOverview() {
  return (
    <div className="space-y-4 mt-8">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartOverview;
