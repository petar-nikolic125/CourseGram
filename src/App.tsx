import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import { SeenOn } from "./components/SeenOn";
import { VouchSection } from "./components/VouchSection";
import { Features } from "./pages/Features";
import { Pricing } from "./pages/Pricing";
import { Creators } from "./pages/Creators";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-gradient-to-b from-[#1A0021] to-[#0F0D1A] min-h-screen pt-16">
              <Hero />
              <SeenOn />
              <VouchSection />
            </div>
          }
        />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/creators" element={<Creators />} />
      </Routes>
    </BrowserRouter>
  );
}

