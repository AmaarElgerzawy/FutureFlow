  import React, { useEffect, useRef, useState } from "react";
  import Home from "./pages/Home";
  import Services from "./pages/Services";
  import Contact from "./pages/Contact";
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import SEO from "./components/SEO";
  import "./App.css";

  function App() {
    const videoRef = useRef(null);
    const [isDarkMode, setIsDarkMode] = useState(true);
    

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.5;
      }
      document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    return (
      <div className={`min-h-screen font-sans transition-colors duration-500 ${
      isDarkMode ? "dark bg-darkBg text-darkText" : "light bg-lightBg text-lightText"
    }`}>
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
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <main className="relative z-10">
            <Home id="home" isDarkMode={isDarkMode} />
            <Services id="services" isDarkMode={isDarkMode} />
            <Contact id="contact" isDarkMode={isDarkMode} />
          </main>
          <Footer isDarkMode={isDarkMode} />
        </div>
      </div>
    );
  }

  export default App;
