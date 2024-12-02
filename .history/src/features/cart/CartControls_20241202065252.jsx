import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

function CartControls({ quantity }) {
  return (
    <>
      <button
        type="button"
        className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
      >
        <FiMinus className="cursor-pointer" color="black" />
        <span className="mx-2.5">{quantity}</span>

        <IoIosAdd className="cursor-pointer" color="black" />
      </button>

      <RiDeleteBinLine />
    </>
  );
}

export default CartControls;
