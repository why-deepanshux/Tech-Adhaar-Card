import './App.css'
import Home2 from './components/Home2';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Works from './components/Works';
import Footer from './components/Footer';
function App() {
  return (
    <div className="w-full grid-background">
      <Navbar />
      {/* <Routes>
          <Route path="/" element={<Home2 />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}
      <Home2 />
      <AboutMe />
      <Projects/>
      <Works />
      <Footer />
    </div>
  );
}

export default App
