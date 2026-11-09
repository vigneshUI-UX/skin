export default function BrandStory() {
  return (
    <section className="section-space story-section" id="story">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6" data-aos="fade-right">
            <div className="story-image">
              <img
                src="https://i.pinimg.com/736x/b2/90/cc/b290cc77bb80f4149d5d58cba22ef9d2.jpg"
                alt="Natural skincare ingredients and flowers"
              />
              <div className="story-image-note">
                <span>Care that feels like you.</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6" data-aos="fade-left">
            <div className="story-content">
              <h2>Skincare should feel like a <em>deep breath.</em></h2>

              <p>
                We believe taking care of your skin can be simple, comforting,
                and joyful. Petal was created around gentle routines and
                thoughtful formulas that make everyday care feel special.
              </p>


              <a className="text-link" href="#contact">
                Get to know us 
              </a>
            </div>
          </div>
        </div>

        <div className="story-values row g-3" data-aos="fade-up">
          <div className="col-6 col-lg-3">
            <div className="value-item">
              <i className="bi bi-droplet" />
              <h3>Gentle care</h3>
              <p>Comfort-first daily essentials.</p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="value-item">
              <i className="bi bi-flower2" />
              <h3>Thoughtful</h3>
              <p>Made with care and intention.</p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="value-item">
              <i className="bi bi-heart" />
              <h3>Feel-good</h3>
              <p>Little rituals, lovely moments.</p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="value-item">
              <i className="bi bi-recycle" />
              <h3>Mindful</h3>
              <p>More care in every detail.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}