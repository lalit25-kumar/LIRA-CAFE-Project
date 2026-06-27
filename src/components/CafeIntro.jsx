import { useEffect, useState } from "react";
import "./CafeIntro.css";
import { TypeAnimation } from "react-type-animation";

function CafeIntro() {
  // Ye state batayegi ki typing effect start hua ya nahi
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.getElementById("about");

      // Agar section mil gaya aur typing abhi start nahi hui hai
      if (introSection && !startTyping) {
        const sectionTop = introSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Jab about section screen me aayega tab typing effect start hoga
        if (sectionTop < windowHeight - 150) {
          setStartTyping(true);
        }
      }
    };

    // Scroll hone par function chalega
    window.addEventListener("scroll", handleScroll);

    // Page reload hone par agar section already visible hai toh typing start hogi
    handleScroll();

    // Component remove hone par scroll listener remove ho jayega
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startTyping]);

  return (
    <section className="cafe-intro" id="about">
      <div className="intro-container">
        <p className="intro-small-title">Welcome to Lira Cafe</p>

        <h2>Where Coffee Meets Comfort</h2>

        <p className="intro-text">
          {/* Jab section screen me aayega tab hi typing effect start hoga */}
          {startTyping && (
            <TypeAnimation
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