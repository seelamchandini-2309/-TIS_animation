import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { dignitaries } from "../data/content";

function Dignitaries() {
  return (
    <section className="section dignitaries-section" id="dignitaries">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="INSPIRATION & MENTORSHIP"
            title="Influential personalities & leaders on campus."
            description="Our students interact directly with Olympians, national sports captains, Arjuna awardees, and policy leaders who mentor and inspire them to reach global heights."
          />
        </Reveal>

        <div className="dignitaries-grid">
          {dignitaries.map((person, index) => (
            <Reveal key={person.name} delay={index * 0.1}>
              <div className="dignitary-card">
                <div className="dignitary-badge">Mentor & Guest</div>
                <h3>{person.name}</h3>
                <h4>{person.title}</h4>
                <p>{person.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dignitaries;
