import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import ProductPage from "./features/product/ProductPage";
import CartPage from "./features/cart/CartPage";
import { Toaster } from "react-hot-toast";
import OrderPage from "./features/order/OrderPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-50)",
            color: "var(--color-grey-700)",
          },
        }}
        reverseOrder={false}
      /> */}
      <Toaster
        position="top-center"
        gutter={16} // Increase spacing between toasts for better visibility
        containerStyle={{
          margin: "16px", // Adjust the container margin for uniformity
          zIndex: 9999, // Ensure it stays on top of other UI components
        }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              backgroundColor: "#d1fae5", // Soft green for success
              color: "#065f46", // Dark green text
              fontSize: "16px",
              padding: "16px 24px",
              border: "1px solid #6ee7b7", // Subtle green border
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Add some depth
              borderRadius: "8px",
            },
          },
          error: {
            duration: 5000,
            style: {
              backgroundColor: "#fee2e2", // Light red for errors
              color: "#b91c1c", // Dark red text
              fontSize: "16px",
              padding: "16px 24px",
              border: "1px solid #fca5a5", // Subtle red border
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Add some depth
              borderRadius: "8px",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#f3f4f6", // Neutral light grey
            color: "#374151", // Dark grey text
            borderRadius: "8px",
            border: "1px solid #d1d5db", // Subtle grey border
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Unified shadow
          },
        }}
        reverseOrder={false}
      />
    </>
  );
}

export default App;
