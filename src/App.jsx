import Home from "./pages/home";
import Navbar from "./components/navbar";
import "./App.css";
import image from "./rr.png";
import ScatteredBackground from "./components/background/ScatteredBackground";
import History from "./pages/history";
import Teachings from "./pages/teachings";
import Legacy from "./pages/legacy";
import Events from "./pages/events";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <ScatteredBackground imageSrc={image} count={20} size={80} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/teachings" element={<Teachings />} />
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
