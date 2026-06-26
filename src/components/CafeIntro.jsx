import "./CafeIntro.css";

function CafeIntro() {
  return (
    <section className="cafe-intro" id="about">
      <div className="intro-container">
        <p className="intro-small-title">Welcome to Lira Cafe</p>

        <h2>Where Coffee Meets Comfort</h2>

        <p className="intro-text">
          Lira Cafe is a cozy place to enjoy fresh coffee, delicious food,
          and peaceful moments with your friends and family.
        </p>

        <div className="intro-cards">
          <div className="intro-card">
            <span>☕</span>
            <h3>Fresh Coffee</h3>
          </div>

          <div className="intro-card">
            <span>🍽️</span>
            <h3>Delicious Food</h3>
          </div>

          <div className="intro-card">
            <span>🌿</span>
            <h3>Peaceful Ambience</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CafeIntro;