import './App.css'
import Home2 from './components/Home2';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Works from './components/Works';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { useEffect , useState } from 'react';
function App() {
  const [loading , setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },2500);
  },[]);
  if(loading)return <Loader />
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
