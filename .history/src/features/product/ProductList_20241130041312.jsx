const mockProducts = [
  {
    id: 1,
    name: "Sole Elegance",
    price: "$20.5",
    description: "5 types of shoes available",
    imageUrl: "https://readymadeui.com/images/product9.webp",
  },
  {
    id: 2,
    name: "Urban Sneakers",
    price: "$12.5",
    description: "5 types of shoes available",
    imageUrl: "https://readymadeui.com/images/product10.webp",
  },
  {
    id: 3,
    name: "Velvet Boots",
    price: "$14.5",
    description: "5 types of shoes available",
    imageUrl: "https://readymadeui.com/images/product11.webp",
  },
  {
    id: 4,
    name: "Summit Hiking",
    price: "$12.5",
    description: "5 types of shoes available",
    imageUrl: "https://readymadeui.com/images/product12.webp",
  },
  {
    id: 5,
    name: "Zenith Glow",
    price: "$15.5",
    description: "5 types of shoes available",
    imageUrl: "https://readymadeui.com/images/product13.webp",
  },
  {
    id: 6,
    name: "Echo Elegance",
    price: "$14.5",
    description: "5 types of shoes available",
    imageUrl: "https://readymadeui.com/images/product14.webp",
  },
  {
    id: 7,
    name: "Pumps",
    price: "$14.5",
    description: "5 types of shoes available",
    imageUrl: "https://readymadeui.com/images/product15.webp",
  },
  {
    id: 8,
    name: "Blaze Burst",
    price: "$14.5",
    description: "5 types of shoes available",
    imageUrl: "https://readymadeui.com/images/product10.webp",
  },
];

function Products() {
  return (
    <div>
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Premium Sneakers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative"
            >
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3"></div>

              <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h3>
                <h4 className="text-lg text-gray-800 font-bold mt-2">
                  {product.price}
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>

                <div className="flex space-x-2 mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
