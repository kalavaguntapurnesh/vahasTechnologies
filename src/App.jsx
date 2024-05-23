import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Solutions from "./pages/Solutions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/solutions" element={<Solutions />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
