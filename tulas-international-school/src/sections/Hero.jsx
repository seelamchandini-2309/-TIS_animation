import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background" />

      <div className="hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow hero-eyebrow">
            DEHRADUN · CBSE CO-ED BOARDING · ESTD. 2012
          </span>

          <h1>
            Education
            <span>that shapes</span>
            the future.
          </h1>

          <p>
            Welcome to Tula's International School — Ranked #1 Co-Ed Boarding School
            in North India. Experience the Modern Gurukul where world-class academics,
            16+ Olympic sports, and character building unite.
          </p>

          <div className="hero-buttons">
            <a
              href="https://admission.tis.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
              data-cursor
            >
              Apply for Admissions 2026-27
              <span>↗</span>
            </a>

            <a
              href="#rankings"
              className="button button-secondary"
              data-cursor
            >
              View Rankings & Awards
              <span>↓</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.15
          }}
        >
          <div className="hero-image-wrap">
            <img
              src="/students-hero.webp?v=8"
              alt="Students participating in activities at Tula's International School"
            />
          </div>

          <div className="hero-badge">
            <strong>22</strong>
            <span>ACRES OF<br />GREEN CAMPUS</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
