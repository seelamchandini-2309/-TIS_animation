import Reveal from "../components/Reveal";
import { stats } from "../data/content";

function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
