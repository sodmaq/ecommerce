import { useEffect, useState } from "react";

function Hero() {
  const images = [
    "/landing.jpg", // Replace with your image paths
    "public/landing2.jpg",
    "public/landing3.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);
  return (
    <div className="bg-white dark:bg-gray-900 mt-2">
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
        <div className="max-md:order-1 max-md:text-center">
          <h2 className="md:text-4xl text-3xl md:leading-10 font-extrabold text-gray-800 mb-4">
            Quick<span className="text-[#3532f0]">Buy</span>
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
              href="javascript:void(0);"
              className="px-6 py-3 text-base font-semibold text-white bg-[#3532f0] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#3532f0]] focus:outline-none focus:ring-opacity-50"
            >
              Explore Our Products
            </a>
            <a
              href="javascript:void(0);"
              className="px-6 py-3 text-base font-semibold text-[#3532f0] border border-[#3532f0]] rounded-full hover:text-white hover:bg-[#3532f0] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#3532f0] focus:outline-none focus:ring-opacity-50"
            >
              Order Now
            </a>
          </div>
        </div>
        <div className="md:h-[450px]">
          <img
            src={images[currentImageIndex]}
            className="w-full h-full object-cover rounded-lg shadow-xl"
            alt="Dining Experience"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
