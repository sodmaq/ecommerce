import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function Testimonial() {
  return (
    <div>
      <div className="my-6 font-[sans-serif] max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">
            What our happy client say
          </h2>
          <p className="text-sm mt-4 leading-relaxed text-gray-800">
            Veniam proident aute magna anim excepteur et ex consectetur velit
            ullamco veniam minim aute sit. Elit occaecat officia et laboris
            Lorem minim. Officia do aliqua adipisicing ullamco in
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-md:gap-12 max-md:justify-center text-center max-md:max-w-lg mx-auto mt-16">
          <div className="rounded-md">
            <div className="flex flex-col items-center">
              <img
                src="/john doe.webp"
                className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
              />
              <div className="mt-4">
                <h4 className="text-sm font-extrabold text-gray-800">
                  John Doe
                </h4>
                <p className="text-xs text-blue-600 font-bold mt-1">
                  CEO, Company
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm leading-relaxed text-gray-800">
                The service was amazing. I never had to wait that long for my
                food. The staff was friendly and attentive, and the delivery was
                impressively prompt.
              </p>
            </div>

            <div className="flex justify-center space-x-1 mt-4">
              <FaStar className="w-7  text-blue-600" />
              <FaStar className="w-7  text-blue-600" />
              <FaStar className="w-7  text-blue-600" />
              <CiStar className="w-4 fill-[#007bff]" />
              <CiStar className="w-4 fill-[#007bff]" />
            </div>
          </div>

          <div className="rounded-md">
            <div className="flex flex-col items-center">
              <img
                src="/mark.webp"
                className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
              />
              <div className="mt-4">
                <h4 className="text-sm font-extrabold text-gray-800">
                  Mark Adair
                </h4>
                <p className="text-xs text-blue-600 font-bold mt-1">
                  CEO, Company
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm leading-relaxed text-gray-800">
                The service was amazing. I never had to wait that long for my
                food. The staff was friendly and attentive, and the delivery was
                impressively prompt.
              </p>
            </div>

            <div className="flex justify-center space-x-1 mt-4">
              <FaStar className="w-7  text-blue-600" />
              <FaStar className="w-7  text-blue-600" />
              <FaStar className="w-7  text-blue-600" />
              <FaStar className="w-7  text-blue-600" />
              <CiStar className="w-4 fill-[#007bff]" />
            </div>
          </div>

          <div className="rounded-md">
            <div className="flex flex-col items-center">
              <img
                src="/simon.webp"
                className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
              />
              <div className="mt-4">
                <h4 className="text-sm font-extrabold text-gray-800">
                  Simon Konecki
                </h4>
                <p className="text-xs text-blue-600 font-bold mt-1">
                  CEO, Company
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm leading-relaxed text-gray-800">
                The service was amazing. I never had to wait that long for my
                food. The staff was friendly and attentive, and the delivery was
                impressively prompt.
              </p>
            </div>

            <div className="flex justify-center space-x-1 mt-4">
              <FaStar className="w-7  text-blue-600" />
              <FaStar className="w-7  text-blue-600" />
              <FaStar className="w-7  text-blue-600" />
              <FaStar className="w-7  text-blue-600" />
              <FaStar className="w-7  text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
