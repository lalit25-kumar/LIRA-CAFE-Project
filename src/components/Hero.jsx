import "./Hero.css";
import heroImage from "../image/hero-bg.png";

function Hero() {
  return (
    <section
  className="hero"
  id="home"
  style={{ backgroundImage: `url(${heroImage})` }}
>
      <div className="hero-overlay"></div>
    </section>
  );
}

export default Hero;