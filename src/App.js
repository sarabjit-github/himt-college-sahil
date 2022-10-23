import { Routes, Route } from "react-router";
import "./App.css";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="top-con">
        <Routes>
          <Route path="/" element={<Hero />}  />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
