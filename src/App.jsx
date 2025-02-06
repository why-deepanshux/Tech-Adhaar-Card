import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-full  bg-[var(--background-color)]">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/about" element={<About />} /> {/* About page route */}
        <Route path="/contact" element={<Contact />} />{" "}
        {/* Contact page route */}
        <Route path="/projects" element={<Projects />} />{" "}
        {/* Projects page route */}
      </Routes>
    </div>
  );
}

export default App
