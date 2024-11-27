import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
