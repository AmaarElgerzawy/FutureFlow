import React, { useEffect, useRef } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import "./App.css";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;      
    }
  }, []);

  return (
    <div className="app-container">
      <SEO
        title="FutureFlow - حلول الأتمتة الذكية"
        description="شركة سعودية رائدة في حلول الأتمتة وتطوير البرمجيات المخصصة"
        keywords="أتمتة الأعمال السعودية, تطوير برمجيات مخصصة, الذكاء الاصطناعي السعودية"
      />
      {/* Background Video */}
      <div className="video-wrapper">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="background-video">
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Section */}
      <div className="content-wrapper">
        <Navbar />
        <main className="relative z-10">
          <Home id="home" />
          <Services id="services" />
          <Contact id="contact" />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
