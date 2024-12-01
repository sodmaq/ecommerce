import React from "react";
import CartItem from "./CartItem";

function CartOverview() {
  const cartItems = [
    {
      id: 1,
      name: "Velvet Sneaker",
      price: 18.0,
      image: "https://readymadeui.com/images/product14.webp",
      quantity: 1,
    },
    {
      id: 2,
      name: "Smart Watch Timex",
      price: 90.0,
      image: "https://readymadeui.com/images/watch5.webp",
      quantity: 1,
    },
    {
      id: 3,
      name: "Sun Glass",
      price: 30.0,
      image: "https://readymadeui.com/images/sunglass1.webp",
      quantity: 1,
    },
  ];

  return (
    <div className="space-y-4 mt-8">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartOverview;
