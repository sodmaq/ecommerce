import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const images = [
    "/landing.jpg", // Replace with your image paths
    "/landing2.jpg",
    "/landing3.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 2 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);
  return (
    <div className="bg-white dark:bg-gray-900 mt-2">
      <div className="grid  md:grid-cols-2    items-center md:gap-8 gap-6 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
        <div className="max-md:order-1 max-md:text-center">
          <h2 className="md:text-4xl text-3xl md:leading-10 font-extrabold text-gray-800 mb-4 font-sans">
            Quick<span className="text-[#3532f0] font-libre">Buy</span>
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed font-libre">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            repellat exercitationem ex, iure aliquam nemo hic. Aperiam
            perferendis molestiae veniam? Quibusdam soluta porro voluptatibus
            aut velit quae quaerat quam sunt? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Eius, sit accusantium culpa facere
            ipsum eos inventore necessitatibus vero a, fugiat vel sequi quo
            doloribus. Velit officiis iste in veniam et?
          </p>
          <div className="mt-8 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
            <a
              href=""
              className="px-6 py-3 text-base font-semibold text-white bg-[#3532f0] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#3532f0]] focus:outline-none focus:ring-opacity-50 mr-4"
              onClick={() => navigate("/products")}
            >
              Explore Our Products
            </a>
            <a
              href=""
              className="px-6 py-3 text-base font-semibold text-[#3532f0] border border-[#3532f0]] rounded-full hover:text-white hover:bg-[#3532f0] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#3532f0] focus:outline-none focus:ring-opacity-50 "
              onClick={() => navigate("/order")}
            >
              Order Now
            </a>
          </div>
        </div>
        <div className="relative md:h-[450px] overflow-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl transition-opacity duration-500 ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              }`}
              alt={`Slide ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
