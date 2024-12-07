import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import ProductPage from "./features/product/ProductPage";
import CartPage from "./features/cart/CartPage";
import { Toaster } from "react-hot-toast";

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
              backgroundColor: "var(--color-green-50)", // Soft green for success
              color: "var(--color-green-900)",
              fontSize: "16px",
              padding: "16px 24px",
              border: "1px solid var(--color-green-300)", // Subtle border
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Add some depth
              borderRadius: "8px",
            },
          },
          error: {
            duration: 5000,
            style: {
              backgroundColor: "var(--color-red-50)", // Light red for errors
              color: "var(--color-red-900)",
              fontSize: "16px",
              padding: "16px 24px",
              border: "1px solid var(--color-red-300)", // Subtle border
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Add some depth
              borderRadius: "8px",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-50)", // Neutral for other toast types
            color: "var(--color-grey-700)",
            borderRadius: "8px",
            border: "1px solid var(--color-grey-300)",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Unified shadow
          },
        }}
        reverseOrder={false}
      />
    </>
  );
}

export default App;