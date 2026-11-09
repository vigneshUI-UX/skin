const footerLinks = [
  { label: "Shop", href: "#shop" },
  { label: "Our story", href: "#story" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faq" }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="petal-logo" href="#home">
              Skin<span>Care</span>
            </a>
            <p>Gentle skincare for a softer kind of glow.</p>

            <div className="footer-socials">
              <a href="#contact" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#contact" aria-label="Pinterest">
                <i className="bi bi-pinterest" />
              </a>
              <a href="#contact" aria-label="Facebook">
                <i className="bi bi-facebook" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Explore</h3>
            {footerLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-links">
            <h3>Say hello</h3>
            <a href="mailto:hello@petalskincare.com">
              skincare@gmail.com
            </a>
            <a href="#contact">Contact us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()}  Skincare.</span>
          <a href="#home">
            Back to top <i className="bi bi-arrow-up" />
          </a>
        </div>
      </div>
    </footer>
  );
}