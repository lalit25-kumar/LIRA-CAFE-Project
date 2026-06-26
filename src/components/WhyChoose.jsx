import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why-choose-section" id="whychoose">
      <div className="why-container">

        <p className="why-small-title">Why Choose Us</p>

        <h2>Experience The Best Of Lira Cafe</h2>

        <p className="why-text">
          We bring together premium coffee, delicious food and a relaxing
          atmosphere to create unforgettable moments for every guest.
        </p>

        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">☕</div>
            <h3>Premium Coffee</h3>
            <p>
              Crafted from carefully selected beans to deliver rich taste and aroma.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🍽️</div>
            <h3>Fresh Food</h3>
            <p>
              Every dish is prepared fresh with quality ingredients and love.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🌿</div>
            <h3>Cozy Ambience</h3>
            <p>
              Enjoy a peaceful environment perfect for relaxation and meetings.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🎉</div>
            <h3>Family Friendly</h3>
            <p>
              A welcoming space where friends and families create memories together.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;