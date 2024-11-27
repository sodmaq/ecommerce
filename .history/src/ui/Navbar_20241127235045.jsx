import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
}

export default Navbar;
