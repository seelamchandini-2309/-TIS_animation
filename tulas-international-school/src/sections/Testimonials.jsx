import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/content";

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="05 / PARENT VOICE"
            title="A community that grows together."
            description="The Tula's experience extends beyond classrooms, creating a strong relationship between students, teachers and families."
          />
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.quote} delay={index * 0.1}>
              <article className="testimonial-card">
                <span className="quote-mark">“</span>

                <p>{item.quote}</p>

                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
