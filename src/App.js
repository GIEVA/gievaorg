import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Blog from "./components/pages/Blog";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Gallery from "./components/pages/Gallery";
import History from "./components/pages/History";
import Step from "./components/pages/Step";
import Heals from "./components/pages/Heals";
import Sat from "./components/pages/Sat";
import Gre from "./components/pages/Gre";
import Global from "./components/pages/Global";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/History" element={<History />} />
        <Route path="/Step" element={<Step />} />
        <Route path="/Sat" element={<Sat />} />
        <Route path="/Heals" element={<Heals />} />
        <Route path="/Global" element={<Global />} />
        <Route path="/Gre" element={<Gre />} />
        {/* <Route path="/Services" element={<Services />}>
          </Route> */}
      </Routes>
      {/* </Router> */}
      <Footer />
    </div>
  );
}

export default App;
