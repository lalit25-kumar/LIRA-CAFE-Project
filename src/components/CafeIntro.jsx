import { useEffect, useState } from "react";
import "./CafeIntro.css";
import { TypeAnimation } from "react-type-animation";

function CafeIntro() {
  // Ye state typing effect ko start/stop karegi
  const [startTyping, setStartTyping] = useState(false);

  // Ye state heading animation ko start/stop karegi
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.getElementById("about");

      if (introSection) {
        const sectionTop = introSection.getBoundingClientRect().top;
        const sectionBottom = introSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Jab About section screen me dikhega tab dono effects start honge
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

    // Scroll par check karega section visible hai ya nahi
    window.addEventListener("scroll", handleScroll);

    // Page reload hone par bhi check karega
    handleScroll();

    // Component remove hone par event listener remove ho jayega
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="cafe-intro" id="about">
      <div className="intro-container">
        <p className="intro-small-title">Welcome to Lira Cafe</p>

        <h2
          className={
            animateHeading
              ? "intro-heading heading-active"
              : "intro-heading"
          }
        >
          Where Coffee Meets Comfort
        </h2>

        <p className="intro-text">
          {/* Section screen me aate hi typing effect chalega */}
          {startTyping && (
            <TypeAnimation
              key={startTyping}
              sequence={[
                "Lira Cafe is a cozy place to enjoy fresh coffee, delicious food, and peaceful moments with your friends and family.",
              ]}
              speed={60}
              cursor={true}
              repeat={0}
            />
          )}
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