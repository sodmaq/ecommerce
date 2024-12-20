/* eslint-disable react/prop-types */
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteItem } from "./CartSlice";
import { increaseItemQuantity } from "./CartSlice";
import { decreaseItemQuantity } from "./CartSlice";

function CartControls({ quantity, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
      >
        <FiMinus
          className="cursor-pointer"
          color="black"
          onClick={() => dispatch(decreaseItemQuantity(id))}
        />
        <span className="mx-2.5">{quantity}</span>

        <IoIosAdd
          className="cursor-pointer"
          color="black"
          onClick={() => dispatch(increaseItemQuantity(id))}
        />
      </button>

      <RiDeleteBinLine
        className="cursor-pointer ml-auto w-4 fill-red-500 inline"
        onClick={() => dispatch(deleteItem(id))}
      />
    </>
  );
}

export default CartControls;
