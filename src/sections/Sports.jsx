import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { sports } from "../data/content";

function Sports() {
  return (
    <section className="section sports-section" id="sports">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="04 / 16+ OLYMPIC & INTERNATIONAL SPORTS"
            title="Sports is not just a facility. It's the foundation."
            description="With 16+ curated sporting disciplines, an equestrian horse riding arena, semi-Olympic pool, and 10m shooting range, physical vitality is central to daily Gurukul life."
          />
        </Reveal>

        <div className="sports-layout">
          <Reveal direction="left">
            <div className="sports-intro">
              <img
                src="https://tis.edu.in/_next/static/media/Image%202.0c5295c9.webp"
                alt="Students playing sports at Tula's International School"
              />

              <div className="sports-overlay">
                <strong>16+</strong>
                <span>OLYMPIC SPORTS DISCIPLINES</span>
              </div>
            </div>
          </Reveal>

          <div className="sports-list">
            {sports.map((sport, index) => (
              <Reveal key={sport.name} delay={index * 0.03}>
                <div className="sport-item" data-cursor>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "1.3rem" }}>{sport.icon}</span>
                      <strong>{sport.name}</strong>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "3px" }}>
                      {sport.desc}
                    </p>
                  </div>

                  <span className="sport-arrow">↗</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sports;
