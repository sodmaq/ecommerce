import { useState, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu, RxSketchLogo } from "react-icons/rx";
import { getTotalCartQuantity } from "../features/cart/CartSlice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartQuantity = useSelector(getTotalCartQuantity);

  // Toggle menu visibility with useCallback
  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Close menu and navigate
  const handleNavigation = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <div>
      <header className="flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
          {/* Logo */}
          <NavLink to="/" onClick={handleNavigation} className="cursor-pointer">
            <RxSketchLogo className="w-10 h-10" color="blue" />
          </NavLink>

          {/* Collapsible Menu */}
          <div
            id="collapseMenu"
            className={`lg:ml-10 ${
              isMenuOpen ? "block" : "hidden"
            } lg:block max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto`}
          >
            {/* Close Button for Mobile */}
            <button
              onClick={handleToggleMenu}
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <IoCloseOutline size={25} />
            </button>

            <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3">
              <li className="mb-6 hidden max-lg:block">
                <NavLink to="/" onClick={handleNavigation} className="block">
                  <RxSketchLogo
                    className="w-10 h-10 cursor-pointer"
                    color="blue"
                  />
                </NavLink>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <NavLink
                  to="/"
                  onClick={handleNavigation}
                  className={({ isActive }) =>
                    `text-[15px] block font-semibold cursor-pointer ${
                      isActive
                        ? "text-[#007bff]"
                        : "text-[#333] hover:text-[#007bff]"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <NavLink
                  to="/about"
                  onClick={handleNavigation}
                  className={({ isActive }) =>
                    `text-[15px] block font-semibold cursor-pointer ${
                      isActive
                        ? "text-[#007bff]"
                        : "text-[#333] hover:text-[#007bff]"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <NavLink
                  to="/contact"
                  onClick={handleNavigation}
                  className={({ isActive }) =>
                    `text-[15px] block font-semibold cursor-pointer ${
                      isActive
                        ? "text-[#007bff]"
                        : "text-[#333] hover:text-[#007bff]"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <NavLink
                  to="/blog"
                  onClick={handleNavigation}
                  className={({ isActive }) =>
                    `text-[15px] block font-semibold cursor-pointer ${
                      isActive
                        ? "text-[#007bff]"
                        : "text-[#333] hover:text-[#007bff]"
                    }`
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex gap-x-6 gap-y-4 ml-auto">
            {/* Search Bar */}
            <div className="flex border-2 focus-within:border-gray-400 rounded-full px-6 py-3 overflow-hidden max-w-52 max-lg:hidden">
              <input
                type="text"
                placeholder="Search something..."
                className="w-full text-sm bg-transparent outline-none pr-2"
              />
              <CiSearch className="fill-gray-600 cursor-pointer" size={25} />
            </div>

            <div className="flex items-center space-x-8">
              {/* Shopping Cart */}
              <span className="relative">
                <GiShoppingCart
                  className="cursor-pointer fill-[#333] inline"
                  size={25}
                  onClick={() => {
                    if (cartQuantity > 0) {
                      navigate("/cart");
                    } else {
                      toast.error("Cart is empty");
                    }
                  }}
                />
                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  {cartQuantity}
                </span>
              </span>

              {/* Sign-In Button */}
              <button
                className="px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>

              {/* Hamburger Menu Button */}
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
