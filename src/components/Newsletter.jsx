import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="newsletter-section" id="contact">
      <div className="container">
        <div className="newsletter-panel" data-aos="fade-up">
          <div className="newsletter-copy">
            <h2>A little glow in <em>your inbox.</em></h2>
            <p>
              Get skincare tips, fresh launches, and little treats from us.
            </p>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <label className="visually-hidden" htmlFor="newsletter-email">
              Email address
            </label>

            <div className="newsletter-input-wrap">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <button type="submit" aria-label="Subscribe to newsletter">
                <i className="bi bi-arrow-right" />
              </button>
            </div>

            {submitted ? (
              <small className="newsletter-success">
                Thank you for joining the Petal community!
              </small>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}