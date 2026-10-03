import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { facilities } from "../data/content";

function Academics() {
  return (
    <section className="section academics-section" id="academics">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="02 / ACADEMICS"
            title="Curiosity first. Memorisation second."
            description="Our CBSE curriculum is designed to encourage reasoning, analytical thinking, creativity and practical learning."
          />
        </Reveal>

        <div className="academic-layout">
          <Reveal direction="left">
            <div className="academic-feature">
              <span>CBSE · IV–XII</span>

              <h3>
                Learning designed
                for real life.
              </h3>

              <p>
                From project-based learning to digital
                classrooms and experiential activities,
                students are encouraged to understand,
                question and apply what they learn.
              </p>

              <div className="academic-line" />
            </div>
          </Reveal>

          <div className="facility-list">
            {facilities.map((facility, index) => (
              <Reveal
                key={facility.number}
                delay={index * 0.1}
              >
                <article className="facility-item">
                  <span>{facility.number}</span>

                  <div>
                    <h3>{facility.title}</h3>
                    <p>{facility.text}</p>
                  </div>

                  <span className="facility-arrow">↗</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Academics;
