import React from "react";
import "./app.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact.js";
import Header from "./components/Header.js";
import FooterApp from "./components/Footer.js";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Artist from "./pages/Artist";
import ScrollToTop from "react-scroll-to-top"
import { ReactComponent as MySVG } from "./components/Arrow.svg"
import './assets/fonts/Modeseven.ttf'


function App() {
      return (
          <Router>
            <div>
                <Header />
                <div className="container flex flex-col md:ml-[5rem]">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/songs" element={<Songs />} />
                    <Route path="/artist" element={<Artist />} />
                  </Routes>
                </div>
                <ScrollToTop smooth component={<MySVG />} className="arrow grid place-content-center" />
                <FooterApp />
                </div>
          </Router>
      );
    }
    
    export default App;