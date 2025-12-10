import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Galeria from "./pages/Galeria.jsx";
import Museus from "./pages/Museus.jsx";
import Museu from "./pages/Museu.jsx";
import ObraArtistica from "./pages/ObraArtistica.jsx";

import "./index.css";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <>
      <div
        className="absolute h-fit w-full bg-white box-border"
        style={{ paddingTop: "0px" }}
      >
        <BrowserRouter>
          <ScrollToTop />

          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/museus" element={<Museus />} />
            <Route path="/museu/:id" element={<Museu />} />
            <Route path="/obra_artistica/:id" element={<ObraArtistica />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
