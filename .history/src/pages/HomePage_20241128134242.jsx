import Products from "../features/product/ProductList";
import Footer from "../ui/Footer";
import Hero from "../ui/Hero";
import Navbar from "../ui/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductList />
      <Footer />
    </div>
  );
}

export default HomePage;
