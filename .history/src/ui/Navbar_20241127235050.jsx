import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
        <a href="#">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </a>

        {/* Menu */}
        <div
          className={`lg:ml-10 ${
            isMenuOpen ? "block" : "hidden"
          } lg:block max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
        >
          <button
            onClick={handleToggleMenu}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            {/* Close Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path d="..." />
              <path d="..." />
            </svg>
          </button>

          <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3">
            <li className="mb-6 hidden max-lg:block">
              <a href="#">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a href="#" className="text-[#007bff] font-semibold">
                New
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a href="#" className="text-[#333] font-semibold">
                Men
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a href="#" className="text-[#333] font-semibold">
                Women
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a href="#" className="text-[#333] font-semibold">
                Kids
              </a>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-x-6 gap-y-4 ml-auto">
          <div className="flex border-2 rounded-full px-6 py-3 max-lg:hidden">
            <input
              type="text"
              placeholder="Search something..."
              className="w-full text-sm bg-transparent outline-none"
            />
            <svg className="w-4 h-4 fill-gray-600 cursor-pointer" viewBox="...">
              <path d="..." />
            </svg>
          </div>

          <div className="flex items-center space-x-8">
            <button onClick={handleToggleMenu} className="lg:hidden">
              {/* Open Menu Icon */}
              <svg className="w-7 h-7 fill-[#333]" viewBox="0 0 20 20">
                <path d="..." />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
