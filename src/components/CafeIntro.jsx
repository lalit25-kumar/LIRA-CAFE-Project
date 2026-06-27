import { useEffect, useState } from "react";
import "./CafeIntro.css";
import { TypeAnimation } from "react-type-animation";

function CafeIntro() {
  // Ye state batayegi typing effect start karna hai ya nahi
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.getElementById("about");

      if (introSection) {
        const sectionTop = introSection.getBoundingClientRect().top;
        const sectionBottom = introSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Jab section screen ke andar aaye tab typing start hogi
        if (sectionTop < windowHeight - 150 && sectionBottom > 150) {
          setStartTyping(true);
        } else {
          // Jab section screen se bahar chala jaye tab reset ho jayega
          setStartTyping(false);
        }
      }
    };

    // Scroll karne par check hoga ki section screen me hai ya nahi
    window.addEventListener("scroll", handleScroll);

    // Reload ya direct section visible hone par bhi check karega
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

        <h2>Where Coffee Meets Comfort</h2>

        <p className="intro-text">
          {/* Section screen me aate hi ye typing effect chalega */}
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