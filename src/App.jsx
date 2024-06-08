import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Careers from "./pages/Careers";
import Products from "./pages/Products";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 600);

  return (
    <BrowserRouter>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="flex space-x-2">
            <div className="h-4 w-4 rounded-full bg-companyColor animate-bounce"></div>
            <div className="h-4 w-4 rounded-full bg-companyColor animate-bounce2"></div>
            <div className="h-4 w-4 rounded-full bg-companyColor animate-bounce"></div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/solutions" element={<Solutions />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
