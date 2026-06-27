import { useEffect, useState } from "react";
import "./WhyChoose.css";
import { TypeAnimation } from "react-type-animation";

function WhyChoose() {
  // Ye state typing effect ko start/stop karegi
  const [startTyping, setStartTyping] = useState(false);

  // Ye state heading animation ko start/stop karegi
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const whySection = document.getElementById("whychoose");

      if (whySection) {
        const sectionTop = whySection.getBoundingClientRect().top;
        const sectionBottom = whySection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Jab Why Choose section screen me dikhega tab dono effects start honge
        if (sectionTop < windowHeight - 150 && sectionBottom > 150) {
          setStartTyping(true);
          setAnimateHeading(true);
        } else {
          // Section se bahar jaate hi dono effects reset ho jayenge
          setStartTyping(false);
          setAnimateHeading(false);
        }
      }
    };

    // Scroll hone par section visible hai ya nahi check hoga
    window.addEventListener("scroll", handleScroll);

    // Page reload hone par bhi ye function ek baar chalega
    handleScroll();

    // Component remove hone par event listener remove ho jayega
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="why-choose-section" id="whychoose">
      <div className="why-container">
        <p className="why-small-title">Why Choose Us</p>

        <h2
          className={
            animateHeading ? "why-heading heading-active" : "why-heading"
          }
        >
          Experience The Best Of Lira Cafe
        </h2>

        <p className="why-text">
          {/* Section me aate hi typing effect chalega */}
          {startTyping && (
            <TypeAnimation
              key={startTyping}
              sequence={[
                "We bring together premium coffee, delicious food and a relaxing atmosphere to create unforgettable moments for every guest.",
              ]}
              speed={60}
              cursor={true}
              repeat={0}
            />
          )}
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