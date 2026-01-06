import React from "react";

import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const isDesktop = window.innerWidth >= 1024;

  // 🚫 Block Mobile & Tablet
  if (!isDesktop) {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "24px",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        <p style={{ maxWidth: "420px", lineHeight: "1.7" }}>
          This experience is crafted exclusively for desktop screens.
          <br />
          <br />
          Please visit <strong>RR EXPERIENCE</strong> on a laptop or desktop for
          the complete luxury motion experience.
        </p>
      </div>
    );
  }

  // ✅ Desktop Experience 
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
