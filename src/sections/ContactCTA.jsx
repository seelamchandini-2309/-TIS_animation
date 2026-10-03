import { useState } from "react";
import Reveal from "../components/Reveal";
import { contactDetails } from "../data/content";

function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", grade: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <div className="contact-grid-layout">
              <div className="contact-left">
                <span className="eyebrow">ADMISSIONS 2026-27 OPEN (CLASSES IV–XII)</span>

                <h2>
                  Let's begin
                  <br />
                  the journey.
                </h2>

                <p>
                  Discover the Modern Gurukul experience at Tula's International School, Dehradun.
                  Schedule a campus tour or speak directly with our admissions counsellors.
                </p>

                <div className="contact-info-list">
                  <div>
                    <strong>Admissions Helpline:</strong>
                    <a href={`tel:${contactDetails.helpline}`} style={{ color: "var(--yellow-bright)", fontWeight: 700 }}>
                      {contactDetails.helpline}
                    </a>
                  </div>

                  <div>
                    <strong>Landline Contacts:</strong>
                    <span>{contactDetails.landlines.join(" / ")}</span>
                  </div>

                  <div>
                    <strong>Campus Address:</strong>
                    <span>{contactDetails.address}</span>
                  </div>

                  <div>
                    <strong>Email:</strong>
                    <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                  </div>
                </div>

                <a
                  href={contactDetails.admissionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-light"
                  data-cursor
                >
                  Start Online Application Form
                  <span>↗</span>
                </a>
              </div>

              <div className="contact-right-form">
                {submitted ? (
                  <div className="form-success-box">
                    <span style={{ fontSize: "2.5rem" }}>✨</span>
                    <h3>Inquiry Received!</h3>
                    <p>
                      Our admissions committee will reach out to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="quick-inquiry-form">
                    <h3>Request Prospectus & Callback</h3>
                    <input
                      type="text"
                      placeholder="Parent's Full Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Contact Number"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <select
                      required
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    >
                      <option value="">Select Class / Grade for Admission</option>
                      <option value="Class IV - V">Class IV – V (Primary)</option>
                      <option value="Class VI - VIII">Class VI – VIII (Middle)</option>
                      <option value="Class IX - X">Class IX – X (Secondary CBSE)</option>
                      <option value="Class XI - XII Science">Class XI – XII (Science / PCM / PCB)</option>
                      <option value="Class XI - XII Commerce">Class XI – XII (Commerce)</option>
                      <option value="Class XI - XII Humanities">Class XI – XII (Humanities)</option>
                    </select>

                    <button type="submit" className="button button-primary" style={{ width: "100%", marginTop: "10px" }}>
                      Submit Inquiry & Request Callback
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactCTA;
