import Hero from "../ui/Hero";
import Navbar from "../ui/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar className="sticky top-0 z-50 mb-2" />
      <Hero />
    </div>
  );
}

export default HomePage;
