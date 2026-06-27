import { useEffect, useState } from "react";
import "./Menu.css";
import { TypeAnimation } from "react-type-animation";

function Menu() {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const menuSection = document.getElementById("menu");

      if (menuSection && !startTyping) {
        const sectionTop = menuSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 150) {
          setStartTyping(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startTyping]);

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

        <h2>Popular Items</h2>

        <p className="menu-text">
          {startTyping && (
            <TypeAnimation
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