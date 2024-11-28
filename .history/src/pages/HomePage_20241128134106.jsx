import Products from "../features/product/Products";
import Footer from "../ui/Footer";
import Hero from "../ui/Hero";
import Navbar from "../ui/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default HomePage;
