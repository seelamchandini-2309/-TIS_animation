import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

function Campus() {
  return (
    <section className="section campus-section" id="campus">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="03 / CAMPUS LIFE"
            title="A campus designed for discovery."
            description="From modern classrooms and laboratories to boarding spaces, libraries and activity areas, campus life is built around learning and exploration."
            light
          />
        </Reveal>

        <div className="campus-grid">
          <Reveal direction="left">
            <div className="campus-main-image">
              <img
                src="https://tis.edu.in/_next/static/media/archery.7a805345.png"
                alt="Students practising archery at Tula's International School"
              />

              <div className="image-label">
                <span>Campus Life</span>
                <strong>Learning beyond walls.</strong>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="campus-side">
              <div className="campus-card">
                <span>01</span>

                <h3>
                  Boarding
                  <br />
                  life
                </h3>

                <p>
                  A structured residential environment
                  designed to help students become
                  confident and independent.
                </p>
              </div>

              <div className="campus-card accent-card">
                <span>02</span>

                <h3>
                  Beyond
                  <br />
                  academics
                </h3>

                <p>
                  Clubs, societies, sports, arts and
                  practical experiences give students
                  room to discover their strengths.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Campus;
