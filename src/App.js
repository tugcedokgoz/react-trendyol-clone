import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/Hesabim/KullaniciBilgileri" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
