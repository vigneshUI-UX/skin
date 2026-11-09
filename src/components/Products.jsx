const products = [
  {
    name: "Cloud Cleanser",
    category: "Gentle daily cleanser",
    price: "₹24",
    tag: "Bestseller",
    image:
      "https://i.pinimg.com/736x/b8/65/8c/b8658cba72faf26ed0e692a669b3886f.jpg"
  },
  {
    name: "Petal Dew Serum",
    category: "Hydrating face serum",
    price: "₹32",
    tag: "Loved",
    image:
      "https://i.pinimg.com/736x/b0/e0/cd/b0e0cd3d6d2a5147efafe726a2e1bc48.jpg"
  },
  {
    name: "Soft Bloom Cream",
    category: "Daily moisture cream",
    price: "₹29",
    tag: "Daily essential",
    image:
      "https://i.pinimg.com/736x/1c/40/32/1c4032cb634550f1a7e8b534443eacd7.jpg"
  },
  {
    name: "Rose Water Mist",
    category: "Refreshing facial mist",
    price: "₹18",
    tag: "Fresh pick",
    image:
      "https://i.pinimg.com/1200x/dc/72/22/dc72229f9fa238ce06f0a68cb2ab4003.jpg"
  }
];

export default function Products() {
  return (
    <section className="section-space products-section" id="shop">
      <div className="container">
        <div className="section-heading section-heading-row" data-aos="fade-up">
          <div>
            <h2>Everyday <em>favorites.</em></h2>
            <p>Good-for-your-skin essentials you’ll reach for every day.</p>
          </div>

          <a className="text-link desktop-link" href="#arrivals">
            Explore all products <i className="bi bi-arrow-up-right" />
          </a>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div
              className="col-6 col-lg-3"
              key={product.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <article className="product-card">
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} />
                  <span className="product-tag">{product.tag}</span>

                  <button
                    className="product-add"
                    type="button"
                    aria-label={`Add ${product.name} to bag`}
                  >
                    <i className="bi bi-plus-lg" />
                  </button>
                </div>

                <div className="product-info">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                  </div>
                  <span className="product-price">{product.price}</span>
                </div>

              </article>
            </div>
          ))}
        </div>

        <div className="mobile-shop-link">
          <a className="text-link" href="#arrivals">
            Explore all products 
          </a>
        </div>
      </div>
    </section>
  );
}