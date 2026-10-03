import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { rankings } from "../data/content";

function Rankings() {
  return (
    <section className="section rankings-section" id="rankings">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="ACCOLADES & NATIONAL STANDARDS"
            title="Recognized among India's finest boarding institutions."
            description="Tula's International School has consistently been awarded top honors by prestigious national survey agencies for academic excellence, infrastructure, and residential care."
          />
        </Reveal>

        <div className="rankings-grid">
          {rankings.map((item, index) => (
            <Reveal key={item.location} delay={index * 0.1}>
              <div className="ranking-card">
                <div className="ranking-number">{item.rank}</div>
                <div className="ranking-info">
                  <h3>{item.location}</h3>
                  <p>{item.agency}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rankings;
