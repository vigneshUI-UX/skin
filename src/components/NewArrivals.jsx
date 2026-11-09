export default function NewArrivals() {
  return (
    <section className="arrival-section" id="arrivals">
      <div className="container">
        <div className="arrival-panel">
          <div className="arrival-image" data-aos="fade-right">
            <img
              src="https://i.pinimg.com/736x/13/13/7c/13137c273a3e26ff792905b99a583f7c.jpg"
              alt="Petal skincare cream"
            />
            <span className="arrival-sticker">Just<br />bloomed</span>
          </div>

          <div className="arrival-content" data-aos="fade-left">
            <h2>Meet your new<br /><em>daily dewdrop.</em></h2>
            <p>
              A silky, lightweight moisturizer that gives your skin a
              comfortable, fresh-from-the-garden feeling.
            </p>

            <ul className="arrival-benefits">
              <li><i className="bi bi-check2" /> Everyday hydration</li>
              <li><i className="bi bi-check2" /> Lightweight texture</li>
              <li><i className="bi bi-check2" /> Made for your daily ritual</li>
            </ul>

            <a className="btn-petal" href="#shop">
              Shop the new arrival 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}