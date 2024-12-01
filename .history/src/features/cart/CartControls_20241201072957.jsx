import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";

function CartControls({ quantity }) {
  return (
    <>
      <button
        type="button"
        className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
      >
        <FiMinus className="cursor-pointer" />
        <span className="mx-2.5">{quantity}</span>

        <IoIosAdd className="cursor-pointer w-3 h-10" color="black" />
      </button>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 fill-red-500 inline cursor-pointer ml-auto"
        viewBox="0 0 24 24"
      >
        <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"></path>
        <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"></path>
      </svg>
    </>
  );
}

export default CartControls;
