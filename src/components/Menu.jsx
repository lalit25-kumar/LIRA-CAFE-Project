import { useEffect, useState } from "react";
import "./Menu.css";
import { TypeAnimation } from "react-type-animation";

function Menu() {
  // Ye state typing effect ko start/stop karegi
  const [startTyping, setStartTyping] = useState(false);

  // Ye state heading animation ko start/stop karegi
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const menuSection = document.getElementById("menu");

      if (menuSection) {
        const sectionTop = menuSection.getBoundingClientRect().top;
        const sectionBottom = menuSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Jab Menu section screen me dikhega tab dono effects start honge
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

  const menuItems = [
    {
      name: "Cappuccino",
      desc: "Rich espresso with creamy steamed milk.",
      price: "₹149",
      icon: "☕",
    },
    {
      name: "Cold Coffee",
      desc: "Chilled coffee with smooth creamy flavor.",
      price: "₹169",
      icon: "🥤",
    },
    {
      name: "Veg Sandwich",
      desc: "Fresh veggies with tasty cafe-style filling.",
      price: "₹129",
      icon: "🥪",
    },
    {
      name: "Cheese Pizza",
      desc: "Loaded cheese pizza with crispy base.",
      price: "₹249",
      icon: "🍕",
    },
    {
      name: "White Sauce Pasta",
      desc: "Creamy pasta with herbs and veggies.",
      price: "₹229",
      icon: "🍝",
    },
    {
      name: "Chocolate Brownie",
      desc: "Soft brownie with rich chocolate taste.",
      price: "₹119",
      icon: "🍫",
    },
  ];

  return (
    <section className="menu-section" id="menu">
      <div className="menu-container">
        <p className="menu-small-title">Our Special Menu</p>

        <h2 className={animateHeading ? "menu-heading heading-active" : "menu-heading"}>
          Popular Items
        </h2>

        <p className="menu-text">
          {/* Menu section me aate hi typing effect start hoga */}
          {startTyping && (
            <TypeAnimation
              key={startTyping}
              sequence={[
                "Discover our most loved coffee, snacks, and delicious cafe-style food.",
              ]}
              speed={60}
              cursor={true}
              repeat={0}
            />
          )}
        </p>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-card" key={index}>
              <div className="menu-icon">{item.icon}</div>

              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>

              <div className="menu-price">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;