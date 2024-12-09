import { useNavigate } from "react-router-dom";
import { useState } from "react";

function OrderForm() {
  const navigate = useNavigate();

  // State to track form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Check if all required fields are filled
  const isFormComplete = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  return (
    <div>
      <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
        <h2 className="text-2xl font-bold text-gray-800">
          Complete your order
        </h2>
        <form className="mt-8">
          <div>
            <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
              </div>

              <div>
                <input
                  type="number"
                  placeholder="Phone No."
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Address Line"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Zip Code"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 max-md:flex-col mt-8">
              <button
                type="button"
                className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!isFormComplete} // Disable button if form is incomplete
                className={`rounded-md px-6 py-3 w-full text-sm tracking-wide ${
                  isFormComplete
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                onClick={() => navigate("/payment")}
              >
                Make Payment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
