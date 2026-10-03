import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="01 / ABOUT TULA'S"
            title="More than a school. A place to belong, grow and shine."
            description="At Tula's, learning extends beyond the classroom. Students are encouraged to explore their interests, develop confidence and build the skills needed for the world ahead."
          />
        </Reveal>

        <div className="about-grid">
          <Reveal direction="left">
            <div className="about-image-card">
              <img
                src="https://tis.edu.in/_next/static/media/ladyInPink.c358aa8f.png"
                alt="Tula's International School student"
              />
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="about-content">
              <span className="big-number">2012</span>

              <h3>
                A modern learning environment
                rooted in values.
              </h3>

              <p>
                Tula's International School was established
                under the aegis of Rishabh Educational Trust
                to create meaningful educational opportunities
                for students.
              </p>

              <p>
                The school combines academics with sports,
                arts, technology and residential experiences
                to support holistic development.
              </p>

              <a href="#academics" className="text-link" data-cursor>
                Explore the learning experience →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
