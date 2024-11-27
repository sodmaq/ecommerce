import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { RxHamburgerMenu, RxSketchLogo } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header className="flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
          <a href="javascript:void(0)">
            <RxSketchLogo className="w-10 h-10" color="blue" />
          </a>

          <div
            id="collapseMenu"
            className={`lg:ml-10 ${
              isMenuOpen ? "block" : "hidden"
            } lg:block max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
          >
            <button
              onClick={handleToggleMenu}
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <IoCloseOutline className="w-6 h-6" size={24} />
            </button>

            <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="text-[#007bff] hover:text-[#007bff] text-[15px] block font-semibold"
                >
                  New
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
                >
                  Men
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
                >
                  Women
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
                >
                  Kids
                </a>
              </li>
            </ul>
          </div>

          <div className="flex gap-x-6 gap-y-4 ml-auto">
            <div className="flex border-2 focus-within:border-gray-400 rounded-full px-6 py-3 overflow-hidden max-w-52 max-lg:hidden">
              <input
                type="text"
                placeholder="Search something..."
                className="w-full text-sm bg-transparent outline-none pr-2"
              />
              <CiSearch className="fill-gray-600 cursor-pointer" size={25} />
            </div>

            <div className="flex items-center space-x-8">
              <span className="relative">
                <MdFavoriteBorder
                  className="cursor-pointer fill-[#333] inline  "
                  size={25}
                />
                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  0
                </span>
              </span>

              <span className="relative">
                <GiShoppingCart
                  className="cursor-pointer fill-[#333] inline "
                  size={25}
                />

                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  0
                </span>
              </span>
              <button
                className="px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>

              <button
                id="toggleOpen"
                className="lg:hidden"
                onClick={handleToggleMenu}
              >
                <RxHamburgerMenu size={25} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
