const reviews = [
  {
    quote:
      "My routine feels so much simpler now. The products are gentle, and my skin feels comfortable all day.",
    name: "Udhaya",
    detail: "Petal customer"
  },
  {
    quote:
      "The textures are beautiful and the whole experience feels calm. It has become my favorite part of the day.",
    name: "Ananya",
    detail: "Petal customer"
  },
  {
    quote:
      "I love how easy the routine is. Everything feels thoughtful, from the packaging to the products.",
    name: "Vicky",
    detail: "Petal customer"
  }
];

export default function Testimonials() {
  return (
    <section className="section-space reviews-section" id="reviews">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <h2>Love notes from <em>our community.</em></h2>
          <p>A little love from people who made Petal part of their routine.</p>
        </div>

        <div className="row g-4">
          {reviews.map((review, index) => (
            <div
              className="col-12 col-md-4"
              key={review.name}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <article className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-quote">“{review.quote}”</p>

                <div className="review-author">
                  <div className="review-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3>{review.name}</h3>
                    <span>{review.detail}</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}