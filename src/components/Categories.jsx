const categories = [
  {
    title: "Cleansers",
    description: "A fresh start for your skin",
    image:
      "https://i.pinimg.com/736x/12/af/26/12af26f2a1558abdb24ecee731b0736b.jpg"
  },
  {
    title: "Moisturizers",
    description: "Your daily dose of hydration",
    image:
      "https://i.pinimg.com/736x/b7/7d/4f/b77d4f223734fc4a20a6b13ccb9ab04a.jpg"
  },
  {
    title: "Serums",
    description: "A little care, a lot of glow",
    image:
      "https://i.pinimg.com/1200x/74/eb/32/74eb320a7a563286710a58a0f70ac325.jpg"
  }
];

export default function Categories() {
  return (
    <section className="section-space categories-section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <h2>Find your <em>skin ritual.</em></h2>
          <p>Simple essentials for every step of your skincare routine.</p>
        </div>

        <div className="row g-4">
          {categories.map((category, index) => (
            <div
              className="col-12 col-md-4"
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <a className="category-card" href="#shop">
                <img src={category.image} alt={category.title} />
                <div className="category-card-content">
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}