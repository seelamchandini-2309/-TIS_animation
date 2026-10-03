import { useEffect, useState } from "react";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";

import Hero from "./sections/Hero";
import Rankings from "./sections/Rankings";
import About from "./sections/About";
import Academics from "./sections/Academics";
import Campus from "./sections/Campus";
import Sports from "./sections/Sports";
import Stats from "./sections/Stats";
import Dignitaries from "./sections/Dignitaries";
import Testimonials from "./sections/Testimonials";
import ContactCTA from "./sections/ContactCTA";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="app">
      <CustomCursor />

      <ScrollProgress />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero />
        <Rankings />
        <About />
        <Academics />
        <Campus />
        <Sports />
        <Stats />
        <Dignitaries />
        <Testimonials />
        <ContactCTA />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <strong>TULA'S INTERNATIONAL SCHOOL</strong>
            <span>The Modern Gurukul · Estd. 2012</span>
            <small style={{ display: "block", marginTop: "6px", color: "var(--muted)" }}>
              Affiliated with CBSE (Classes IV to XII)
            </small>
          </div>

          <div>
            <strong>Campus Location</strong>
            <p>
              Dhoolkot, P.O – Selaqui, Chakrata Road,
              Dehradun - 248011, Uttarakhand, India
            </p>
          </div>

          <div>
            <strong>Admissions Contact</strong>
            <p>
              <a href="tel:+919837983791">+91-98379 83791</a>
              <br />
              <a href="tel:01352699444">0135-2699444</a>
              <br />
              <a href="mailto:info@tis.edu.in">info@tis.edu.in</a>
            </p>
          </div>

          <div>
            <strong>Recognition & Affiliations</strong>
            <span>#1 Co-Ed Boarding School in Dehradun</span>
            <span>Rishabh Educational Trust</span>
            <span style={{ marginTop: "8px", display: "block" }}>
              © 2026 Tula's International School. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
