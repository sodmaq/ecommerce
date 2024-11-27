import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
