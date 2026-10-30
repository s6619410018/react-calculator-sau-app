import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bmi from "./pages/Bmi";
import Bmr from "./pages/Bmr";
import Car from "./pages/Car";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-['Prompt',sans-serif] text-gray-900">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/bmr" element={<Bmr />} />
          <Route path="/car" element={<Car />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}