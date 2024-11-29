import { useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { GiShoppingCart } from "react-icons/gi";
// import { IoCloseOutline } from "react-icons/io5";
// import { MdFavoriteBorder } from "react-icons/md";
import { RxHamburgerMenu, RxSketchLogo } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    console.log(`Navigating to ${path}`);
    setIsMenuOpen(false); // Close menu
    navigate(path); // Navigate to the desired path
  };

  return (
    <div>
      <header className="flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
          <a onClick={() => handleNavigation("/")}>
            <RxSketchLogo className="w-10 h-10 cursor-pointer" color="blue" />
          </a>

          {/* Collapsible Menu */}
          <div
            id="collapseMenu"
            className={`lg:ml-10 ${
              isMenuOpen ? "block" : "hidden"
            } lg:block max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <IoCloseOutline size={25} />
            </button>

            <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3">
              <li onClick={() => handleNavigation("/")}>
                <a className="text-[#007bff] hover:text-[#007bff] text-[15px] block font-semibold cursor-pointer">
                  Home
                </a>
              </li>
              <li onClick={() => handleNavigation("/about")}>
                <a className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold cursor-pointer">
                  About
                </a>
              </li>
              <li onClick={() => handleNavigation("/contact")}>
                <a className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold cursor-pointer">
                  Contact
                </a>
              </li>
              <li onClick={() => handleNavigation("/blog")}>
                <a className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold cursor-pointer">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Hamburger Menu Button */}
          <button
            id="toggleOpen"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <RxHamburgerMenu size={25} />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
