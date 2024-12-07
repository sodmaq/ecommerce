import CartControls from "./CartControls";

function CartItem({ item }) {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-full">
          <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
          <h6 className="text-sm text-gray-800 font-bold cursor-pointer mt-0.5">
            {/* ${item.price.toFixed(2)} */}
          </h6>

          <div className="flex gap-4 mt-4">
            <CartControls quantity={item.quantity} id={item.id} />
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />
    </>
  );
}

export default CartItem;
