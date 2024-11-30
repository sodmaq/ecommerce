import ProductPage from "../features/product/ProductPage";
import Footer from "../ui/Footer";
import Hero from "../ui/Hero";
import Navbar from "../ui/Navbar";
import Testimonial from "../ui/Testimonial";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductPage />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default HomePage;
